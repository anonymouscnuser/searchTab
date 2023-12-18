<template>
    <div class="search-bar-container" v-if="enabled">
        <input class="search-input" type="text" v-bind:placeholder="hint" @keydown="onKD()" />
        <button class="search-button" @click="search()">{{ buttonText }}</button>
    </div>
</template>

<script>
import {settings} from "@/GlobalSetting.vue";

export default {
    name: "SearchBar",
    props: {
        hint: {
            type: String,
        },
        buttonText: {
            type: String,
        },
        query: {
            type: String,
        },
        enabled: {
            type: Boolean,
        },
    },
    methods: {
        search() {
            const input = this.$el.querySelector(".search-input");
            if (input.value.trim() === "") {
                return;
            }
            const query = this.query.replace("{}", input.value);
            if (settings.openInNewTab) {
                window.open(query, "_blank");
            } else {
                window.open(query, "_self");
            }
        },
        onKD() {
            if (event.key === "Enter") {
                this.search();
                return false;
            }
            if (event.key === "Tab") {
                event.preventDefault();
                const parent = this.$el.parentElement;
                const inputs = parent.querySelectorAll(".search-input");
                const index = Array.from(inputs).indexOf(this.$el.querySelector(".search-input"));
                if (index === inputs.length - 1) {
                    inputs[0].focus();
                } else {
                    inputs[index + 1].focus();
                }
                return false;
            }
        },
    },
};
</script>

<style scoped>
.search-bar-container {
    width: 100%;
    text-align: center;
    margin: 12px;
    display: flex;
}

.search-input {
    padding: 10px;
    width: 100%;
    font-size: 18px;
}

.search-button {
    width: 166px;
    margin-left: 20px;
    padding: 10px 20px;
    background-color: #4285F4;
    color: white;
    font-size: 18px;
    border: none;
    cursor: pointer;
}
</style>
