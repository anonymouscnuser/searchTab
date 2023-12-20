<template>
    <div id="openInNewTabCheckboxContainer">
        <input id="openInNewTabCheckbox" type="checkbox" v-model="settings.openInNewTab">
        <label for="openInNewTabCheckbox">{{$t("openInNewTab")}}</label>
    </div>
</template>

<script>
import {settings} from "@/GlobalSetting.vue";

export default {
    name: "OpenInNewTabSection",
    data() {
        return {
            settings,
        };
    },
}
</script>

<style scoped>
#openInNewTabCheckboxContainer {
    display: flex;
    align-items: center;
    justify-content: end;
}
</style>
