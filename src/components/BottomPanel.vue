<script setup>
import {settings} from "../GlobalSetting.vue";
import SettingPanel from "@/components/SettingPanel.vue";

function edit() {
    settings.isEditing = true;
}
</script>

<template>
    <div v-if="!settings.isEditing">
        <button class="edit-text-clickable" @click="edit()">
            <img src="@/assets/setting.svg" alt="setting" width="20px" height="20px">
        </button>
        <a class="author" href="https://github.com/xixiaxixi" target="_blank" title="github.com/xixiaxixi">Author: 晨曦</a>
    </div>
    <SettingPanel v-else/>
</template>

<style scoped>
.edit-text-clickable {
    margin-right: 20px;
    color: #0000ee;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    padding: 0;
}
.author {
    float: right;
    text-decoration: none;
    color: #0000ee;
    font-size: 16px;
}
.author:visited {
    color: #0000ee;
}
</style>