<template>
    <div>
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

</style>
