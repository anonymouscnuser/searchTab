import {createI18n} from "vue-i18n";
// import {createI18n} from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";

const messages = {
    en: {
        editSearch: "Edit search bars",
        save: "Save",
        add: "Add",
        reset: "Reset",
        buttonText: "Button Text",
        url: "URL:",
        openInNewTab: "Open in new tab",
        syncSearchBar: "Same input in all search bars",
    },
    zh: {
        editSearch: "编辑搜索栏",
        save: "完成",
        add: "添加",
        reset: "重置",
        buttonText: "按钮的文字",
        url: "网址：",
        openInNewTab: "在新标签页打开",
        syncSearchBar: "输入同步",
    }
}

function getLanguage() {
    const chosenLanguage = localStorage.getItem('lang');
    if (chosenLanguage) return chosenLanguage;

    const language = navigator.language.split(/[-_]/)[0];

    // save language to local storage
    localStorage.setItem('lang', language);

    return language;
}

const lang = getLanguage();

function setLanguage(language) {
    localStorage.setItem('lang', language);
    i18n.global.locale.value = language;
}

export const i18n = createI18n({
    locale: lang,
    fallbackLocale: 'en',
    messages,
});

export {setLanguage};
