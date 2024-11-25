import { readFileSync } from "node:fs";
import colors from "picocolors";

// 获取 git commit 信息
const msgPath = process.argv[2];
const msg = readFileSync(msgPath, "utf-8").trim();

// 定义提交信息格式
const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/;

// 检查提交信息是否符合规范
if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${colors.bgRed(colors.white(" ERROR "))} ${colors.red(
      `invalid commit message format.`,
    )}\n\n` +
      colors.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      ) +
      `    ${colors.green(`feat: add 'comments' option`)}\n` +
      `    ${colors.green(`fix: handle events on blur (close #28)`)}\n\n` +
      colors.red(`  See .github/commit-convention.md for more details.\n`),
  );
  process.exit(1);
}
