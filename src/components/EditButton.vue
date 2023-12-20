<template>
    <div class="edit-button-container">
        <div>
            <button class="edit-text-clickable" @click="completeEdit()">{{$t("save")}}</button>
            <button class="edit-text-clickable" @click="$emit('onAdd')">{{$t("add")}}</button>
            <button class="edit-text-clickable" @click="$emit('onReset')">{{$t("reset")}}</button>
        </div>
    </div>
</template>

<script>
import {settings} from "@/GlobalSetting.vue";

export default {
    name: "EditButton",
    data() {
        return {
            settings,
        };
    },
    methods: {
        completeEdit() {
            this.$emit("onCompleteEdit");
        },
    },
    emits: ["onCompleteEdit", "onAdd", "onReset"],
};
</script>

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
</style>
