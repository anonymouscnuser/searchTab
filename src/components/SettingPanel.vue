<script setup>
import {settings} from "../GlobalSetting.vue";

import SearchConfigPanel from "@/components/SearchConfigPanel.vue";
import OtherSettingPanel from "@/components/OtherSettinsPanel.vue";

</script>

<template>
    <div v-show="settings.isEditing">
        <SearchConfigPanel />
        <OtherSettingPanel class="other-setting-panel"/>
    </div>
</template>

<style scoped>
.other-setting-panel {
    margin-top: 20px;
}
</style>