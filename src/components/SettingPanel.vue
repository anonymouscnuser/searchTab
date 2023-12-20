<script setup>
import {settings} from "../GlobalSetting.vue";

import LocaleSelector from "@/components/LocaleSelector.vue";
import SearchConfigPanel from "@/components/SearchConfigPanel.vue";
import OpenInNewTabSection from "@/components/OpenInNewTabSection.vue";
import EditButtonGroup from "@/components/EditButton.vue";

</script>

<template>
    <div>
        <div class="settings-title" v-show="settings.isEditing">
            <div class="edit-container">
                <EditButtonGroup
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
</template>

<style scoped>

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