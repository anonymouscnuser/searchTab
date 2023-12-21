<script setup>
import {settings} from "./GlobalSetting.vue";
import SearchBar from "@/components/SearchBar.vue";
import BottomPanel from "@/components/BottomPanel.vue";
import {ref} from "vue";

// shared search bar text
const sharedSearchText = ref("");

function onSearchBarUpdateSearchText(newText) {
    if (settings.syncSearchBar) {
        sharedSearchText.value = newText;
    }
}

</script>
<template>
    <div class="padding-element"/>

    <div class="container-center">

        <div class="search-bars-container">
            <SearchBar v-for="data in settings.searchBarData"
                       :enabled="data.enabled"
                       :hint="data.hint"
                       :buttonText="data.buttonText"
                       :query="data.query"
                       :search-text="sharedSearchText"
                       @update:searchText="onSearchBarUpdateSearchText"
                       :key="data.hint"/>
        </div>

        <!-- 分割线 -->
        <div id="split-line"></div>

        <BottomPanel class="settings-container"/>

    </div>

    <div class="padding-element"/>

</template>


<style scoped>
.search-bars-container {
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#split-line {
    width: 80%;
    max-width: 1000px;
    height: 1px;
    background-color: #ccc;
    margin: 20px auto;
}

.settings-container {
    width: 70%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    justify-content: start;
}

.padding-element {
    height: 20vh;
    flex: 1;
}

.container-center {
    min-height: 60vh;
}
</style>

<style>
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}
#app {
    height: 100vh;

    display: flex;
    flex-direction: column;
}
</style>
