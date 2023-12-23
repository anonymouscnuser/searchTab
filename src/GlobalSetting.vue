<script>

import {reactive, watch} from "vue";

const defaultSettings = {
    searchBarData: [
        {
            buttonText: "百度一下",
            hint: "Search 百度一下",
            query: "https://www.baidu.com/s?wd={}",
            enabled: true,
        },
        {
            buttonText: "Google",
            hint: "Search Google",
            query: "https://www.google.com/search?q={}",
            enabled: true,
        },
        {
            buttonText: "Bing",
            hint: "Search Bing",
            query: "https://www.bing.com/search?q={}",
            enabled: false,
        },
        {
            buttonText: "YouTube",
            hint: "Search YouTube",
            query: "https://www.youtube.com/results?search_query={}",
            enabled: false,
        },
        {
            buttonText: "Wikipedia",
            hint: "Search Wikipedia",
            query: "https://en.wikipedia.org/w/index.php?search={}",
            enabled: false,
        },
        {
            buttonText: "学术搜索",
            hint: "Search 百度学术",
            query: "https://xueshu.baidu.com/s?wd={}",
            enabled: false,
        },
        {
            buttonText: "Scholar",
            hint: "Search Google Scholar",
            query: "https://scholar.google.com/scholar?q={}",
            enabled: false,
        },
        {
            buttonText: "Github",
            hint: "Search Github",
            query: "https://github.com/search?q={}",
            enabled: false,
        },
        {
            buttonText: "Stack Overflow",
            hint: "Search Stack Overflow",
            query: "https://stackoverflow.com/search?q={}",
            enabled: false,
        },
        {
            buttonText: "知乎",
            hint: "Search 知乎",
            query: "https://www.zhihu.com/search?type=content&q={}",
            enabled: false,
        },
        {
            buttonText: "豆瓣",
            hint: "Search 豆瓣",
            query: "https://www.douban.com/search?q={}",
            enabled: false,
        },
        {
            buttonText: "微博",
            hint: "Search 微博",
            query: "https://s.weibo.com/weibo/{}",
            enabled: false,
        },
        {
            buttonText: "Twitter",
            hint: "Search Twitter",
            query: "https://twitter.com/search?q={}",
            enabled: false,
        },
        {
            buttonText: "Facebook",
            hint: "Search Facebook",
            query: "https://www.facebook.com/search/top/?q={}",
            enabled: false,
        },
        {
            buttonText: "Instagram",
            hint: "Search Instagram",
            query: "https://www.instagram.com/explore/tags/{}",
            enabled: false,
        },
        {
            buttonText: "Reddit",
            hint: "Search Reddit",
            query: "https://www.reddit.com/search?q={}",
            enabled: false,
        },
    ],
};

function getConfigCopy(config) {
    return config.map((item) => {
        return {
            ...item,
        };
    });
}

function getDefaultConfigCopy() {
    return getConfigCopy(defaultSettings.searchBarData);
}

function loadSearchBarData() {
    const data = localStorage.getItem("searchBarData");
    if (data) {
        return JSON.parse(data);
    } else {
        // copy defaultSettings.searchBarData
        return getDefaultConfigCopy();
    }
}

function loadIsOpenInNewTab() {
    const data = localStorage.getItem("openInNewTab");
    if (data) {
        return JSON.parse(data);
    } else {
        return true;
    }
}

function loadIsSyncSearchBar() {
    const data = localStorage.getItem("syncSearchBar");
    if (data) {
        return JSON.parse(data);
    } else {
        return true;
    }
}

const settings = reactive({
    openInNewTab: loadIsOpenInNewTab(),
    searchBarData: loadSearchBarData(),
    syncSearchBar: loadIsSyncSearchBar(),
    isEditing: false,

    resetSearchBarData() {
        settings.searchBarData.splice(0, settings.searchBarData.length, ...getDefaultConfigCopy());

        localStorage.removeItem("searchBarData");
    },
});

// watch openInNewTab and save to localStorage
watch(() => settings.openInNewTab, (newValue) => {
    localStorage.setItem("openInNewTab", JSON.stringify(newValue));
});
watch(() => settings.syncSearchBar, (newValue) => {
    localStorage.setItem("syncSearchBar", JSON.stringify(newValue));
});

export {settings, getConfigCopy};

</script>
