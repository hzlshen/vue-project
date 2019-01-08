import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n); // 全局挂载

export const i18n = new VueI18n({
  locale: localStorage.getItem("locale") || "en", // 从localStorage中获取 默认英文
  messages: {
    zh: require("./lan/zh"), // 中文语言包
    en: require("./lan/en") // 英文语言包
  }
});

export default i18n;