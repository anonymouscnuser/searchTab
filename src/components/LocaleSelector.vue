<script setup>
import {setLanguage} from "@/locales";

</script>

<template>
    <div>
        <button v-if="$i18n.locale==='zh'" class="edit-text-clickable" @click="setLanguage('en')">English</button>
        <button v-else class="edit-text-clickable" @click="setLanguage('zh')">中文</button>
    </div>
</template>

<style scoped>
.edit-text-clickable {
    margin-right: 10px;
    color: #0000ee;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    padding: 0;
}
</style>
