<template>
    <div class="search-config-item-container">
        <input class="search-config-item-input-enable" type="checkbox" v-model="item.enabled"/>
        <input class="search-config-item-input-button" type="text" v-model="item.buttonText"
               v-bind:placeholder="$t('buttonText')"/>
        <label class="search-config-item-label">{{ $t("url") }}</label>
        <input class="search-config-item-input-query" type="text" v-model="item.query"
               placeholder="必须要带有“{}”，表示替换的字符"/>
        <button class="config-item-button search-config-item-move-up" @click="moveUp()"></button>
        <button class="config-item-button search-config-item-delete" @click="deleteItem()"></button>
        <button class="config-item-button search-config-item-move-down" @click="moveDown()"></button>
    </div>
</template>

<script>
export default {
    name: "SearchConfigItem",
    props: {
        item: {
            type: Object,
        },
    },
    methods: {
        moveUp() {
            const parent = this.$el.parentElement;
            const index = Array.from(parent.children).indexOf(this.$el);
            this.$emit("move-up", index);
        },
        moveDown() {
            const parent = this.$el.parentElement;
            const index = Array.from(parent.children).indexOf(this.$el);
            this.$emit("move-down", index);
        },
        deleteItem() {
            const parent = this.$el.parentElement;
            const index = Array.from(parent.children).indexOf(this.$el);
            this.$emit("item-delete", index);
        },
    },
    emits: ["move-up", "move-down", "item-delete"],
}
</script>

<style scoped>

.search-config-item-container {
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.search-config-item-container > * {
    margin: 0 5px;
}

.search-config-item-input-button {
    width: 75px;
}

.search-config-item-input-query {
    flex: 1;
}

.config-item-button {
    width: 20px;
    height: 20px;
}

.config-item-button:hover {
    background-color: #ccc;
    cursor: pointer;

}

.search-config-item-move-up {
    background: url("../assets/up.svg") no-repeat;
    background-size: 100%;
}

.search-config-item-delete {
    background: url("../assets/delete.svg") no-repeat;
    background-size: 100%;
}

.search-config-item-move-down {
    background: url("../assets/up.svg") no-repeat;
    transform: rotate(180deg);
    background-size: 100%;
}
</style>
