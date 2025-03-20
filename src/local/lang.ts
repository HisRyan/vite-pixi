import { createI18n } from "vue-i18n";
import zhCNJSON from '../locales/zh_CN.json';
import enGBJSON from '../locales/en_GB.json';

const messages = {
  zh_CN: {
    ...zhCNJSON
  },
  en_GB: {
    ...enGBJSON
  },
};

const i18n = createI18n({
  locale: "en_GB",
  messages,
});

const setNewLangMessage = (lang:'zh_CN' | 'en_GB', newMessages: Object) => {
  i18n.global.setLocaleMessage(lang, {
    ...messages[lang],
    ...newMessages
  })
}

export { setNewLangMessage };
export default i18n;
