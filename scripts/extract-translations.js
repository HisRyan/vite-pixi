import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import crypto from 'crypto';
import fetch from 'node-fetch';

// 百度翻译 API 配置
const BAIDU_APP_ID = '20250319002308435';
const BAIDU_SECRET = 'a4toHeoNEuForHHpzSyX';

// 获取 __dirname 的 ES 模块等价物
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 用于存储找到的所有翻译键
const translations = new Set();

// 匹配 $t('xxx') 或 $t("xxx") 以及 i18n.global.t('xxx') 或 i18n.global.t("xxx") 的正则表达式
const translationRegex = /(?:\$t|i18n\.global\.t)\(['"](.+?)['"]\)/g;

// 百度翻译 API 调用函数
async function baiduTranslate(text, from = 'zh', to = 'en') {
  const salt = Date.now();
  const sign = crypto
    .createHash('md5')
    .update(BAIDU_APP_ID + text + salt + BAIDU_SECRET)
    .digest('hex');

  const url = 'https://fanyi-api.baidu.com/api/trans/vip/translate';
  const params = new URLSearchParams({
    q: text,
    from,
    to,
    appid: BAIDU_APP_ID,
    salt: salt.toString(),
    sign
  });

  try {
    const response = await fetch(`${url}?${params}`);
    const data = await response.json();
    console.log(data);

    if (data && data.trans_result && data.trans_result[0]) {
      return data.trans_result[0].dst;
    }
    throw new Error('Translation failed');
  } catch (error) {
    console.error(`翻译失败: ${text}`, error.message);
    return text; // 翻译失败返回中文
  }
}

// 批量翻译函数
async function batchTranslate(texts) {
  const results = {};
  // 将文本分成小批次，每次翻译 10 个
  const batchSize = 10;
  const batches = [];

  for (let i = 0; i < texts.length; i += batchSize) {
    batches.push(texts.slice(i, i + batchSize));
  }

  for (const batch of batches) {
    // 添加延迟以避免请求过快
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('batch', batch);

    await Promise.all(
      batch.map(async text => {
        const translated = await baiduTranslate(text);
        results[text] = translated;
        console.log(`已翻译: ${text} => ${translated}`);
      })
    );
  }

  return results;
}

// 递归查找所有源文件
async function findSourceFiles(dir) {
  const vueFiles = await glob('**/*.vue', { cwd: dir });
  const tsFiles = await glob('**/*.ts', { cwd: dir });
  return [...vueFiles, ...tsFiles];
}

// 从文件内容中提取翻译键
function extractTranslations(content) {
  let match;
  while ((match = translationRegex.exec(content)) !== null) {
    translations.add(match[1]);
  }
}

// 读取现有的翻译文件
function loadExistingTranslations(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    // 如果文件不存在或解析失败，返回空对象
    return {};
  }
}

// 合并新旧翻译
function mergeTranslations(existingTranslations, newTranslationKeys) {
  const result = {};

  // 只添加不存在的翻译键
  for (const key of newTranslationKeys) {
    if (!(key in existingTranslations)) {
      result[key] = key; // 中文文件使用键作为默认值
    } else {
      result[key] = existingTranslations[key];
    }
  }

  return result;
}

// 创建英文翻译对象
async function createEnglishTranslations(newTranslationKeys, existingTranslations = {}) {
  const result = { ...existingTranslations }; // 保留所有现有翻译
  const toTranslate = [];

  // 收集需要翻译的文本
  for (const key of newTranslationKeys) {
    if (!(key in existingTranslations) || existingTranslations[key] === '') {
      toTranslate.push(key);
    }
  }

  if (toTranslate.length > 0) {
    console.log(`发现 ${toTranslate.length} 个需要翻译的新内容...`);
    const translations = await batchTranslate(toTranslate);

    for (const [key, translation] of Object.entries(translations)) {
      if (translation) { // 只在翻译成功时更新
        result[key] = translation;
      } else {
        result[key] = result[key] || ''; // 如果翻译失败，保留原有翻译或使用空字符串
      }
    }
  } else {
    console.log('没有发现需要翻译的新内容');
  }

  return {
    translations: result,
    translatedCount: toTranslate.length
  };
}

// 主函数
async function main() {
  const srcDir = path.resolve(__dirname, '../src');
  const sourceFiles = await findSourceFiles(srcDir);

  console.log('找到的源文件数量:', sourceFiles.length);

  for (const file of sourceFiles) {
    const filePath = path.join(srcDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    extractTranslations(content);
  }

  const localesDir = path.resolve(__dirname, '../src/locales');
  fs.mkdirSync(localesDir, { recursive: true });

  // 处理中文翻译
  const zhPath = path.join(localesDir, 'zh_CN.json');
  const existingZhTranslations = loadExistingTranslations(zhPath);
  const zhTranslations = mergeTranslations(existingZhTranslations, Array.from(translations));

  // 处理英文翻译
  const enPath = path.join(localesDir, 'en_GB.json');
  const existingEnTranslations = loadExistingTranslations(enPath);
  const { translations: enTranslations, translatedCount } = await createEnglishTranslations(Array.from(translations), existingEnTranslations);

  // 写入文件
  fs.writeFileSync(zhPath, JSON.stringify(zhTranslations, null, 2), 'utf-8');
  fs.writeFileSync(enPath, JSON.stringify(enTranslations, null, 2), 'utf-8');

  const newKeysCount = Object.keys(zhTranslations).length - Object.keys(existingZhTranslations).length;

  console.log('翻译提取完成！');
  console.log(`发现的翻译键总数: ${translations.size}`);
  console.log(`新增的翻译键数量: ${newKeysCount}`);
  console.log(`实际翻译的数量: ${translatedCount}`);
  console.log(`中文翻译已保存到: ${zhPath}`);
  console.log(`英文翻译已保存到: ${enPath}`);
}

main().catch(console.error); 