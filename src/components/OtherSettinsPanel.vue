<script setup>
import {settings} from "@/GlobalSetting.vue";

</script>

<template>
    <div class="option-container">
        <div id="openInNewTabCheckboxContainer">
            <input class="option-checkbox" id="openInNewTabCheckbox" type="checkbox" v-model="settings.openInNewTab">
            <label for="openInNewTabCheckbox">{{$t("openInNewTab")}}</label>
        </div>

        <div id="syncSearchBarContainer">
            <input class="option-checkbox" id="syncSearchBarCheckbox" type="checkbox" v-model="settings.syncSearchBar">
            <label for="syncSearchBarCheckbox">{{$t("syncSearchBar")}}</label>
        </div>
    </div>
</template>

<style scoped>
.option-container > div {
    display: flex;
    align-items: center;
}
.option-checkbox {
    margin: 0 5px;
}
label {
    font-size: 16px;
}
/* three options per line */
.option-container {
    display: flex;
    flex-wrap: wrap;
}
.option-container > div {
    flex: 0 0 33%;
}
</style>