<script setup>
import {settings} from "./GlobalSetting.vue";
import SearchBar from "@/components/SearchBar.vue";
import EditButton from "@/components/EditButton.vue";
import SearchConfigPanel from "@/components/SearchConfigPanel.vue";
import OpenInNewTabSection from "@/components/OpenInNewTabSection.vue";
import LocaleSelector from "@/components/LocaleSelector.vue";
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
                       :key="data.hint"/>
        </div>

        <!-- 分割线 -->
        <div id="split-line"></div>

        <div class="settings-container">
            <div class="settings-title">
                <div class="edit-container">
                    <EditButton
                            @onCompleteEdit="$refs.searchPanel.updateConfig()"
                            @onAdd="$refs.searchPanel.addOneItem()"
                            @onReset="$refs.searchPanel.resetConfig()"/>
                </div>

                <div class="locale-container">
                    <LocaleSelector/>
                </div>

                <div class="new-tab-setting-container">
                    <OpenInNewTabSection/>
                </div>
            </div>

            <SearchConfigPanel ref="searchPanel" v-if="settings.isEditing"/>
        </div>
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

.settings-title {
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 20px;
}

.locale-container {
    margin-left: auto;
    margin-right: 10px;
}

.new-tab-setting-container {
    width: 150px;
    text-align: right;
    margin-left: 10px;
    
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
