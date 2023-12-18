<template>
    <div class="search-config-panel-container">
        <SearchConfigItem v-for="(item, index) in configs"
                          :key="index"
                          :item="item"
                          @move-up="onItemMoveUp"
                          @move-down="onItemMoveDown"
                          @item-delete="onItemDelete"/>
    </div>
</template>

<script>
import SearchConfigItem from "@/components/SearchConfigItem.vue";
import {settings, getConfigCopy} from "@/GlobalSetting.vue";
import {reactive} from "vue";

function validateConfig(configs) {
    let errorMsgs = [];
    for (let i = 0; i < configs.length; i++) {
        const config = configs[i];
        if (config.query.indexOf("{}") === -1) {
            errorMsgs.push(`第${i + 1}个配置的网址中没有“{}”`);
        }
    }
    if (errorMsgs.length > 0) {
        alert(errorMsgs.join("\n"));
        return false;
    }
    return true;
}

export default {
    name: "SearchConfigPanel",
    components: {SearchConfigItem},
    data() {
        const configs = getConfigCopy(settings.searchBarData);
        return {
            configs: reactive(configs),
        };
    },
    methods: {
        updateConfig() {
            const newConfigs = this.configs.map((item) => {
                const newItem = {...item};
                newItem.hint = `Search ${newItem.buttonText}`;
                return newItem;
            });
            if (!validateConfig(newConfigs)) {
                return false;
            }
            settings.searchBarData.splice(0, settings.searchBarData.length, ...newConfigs);

            // Save config to localStorage
            localStorage.setItem("searchBarData", JSON.stringify(settings.searchBarData));

            settings.isEditing = false;
            return true;
        },
        addOneItem() {
            this.configs.push({
                hint: "",
                buttonText: "",
                query: "",
                enabled: true,
            });
        },
        resetConfig() {
            settings.resetSearchBarData();
            this.configs.splice(0, this.configs.length, ...getConfigCopy(settings.searchBarData));
        },

        onItemMoveUp(index) {
            if (index === 0) {
                return;
            }
            const swap = [this.configs[index], this.configs[index - 1]];
            this.configs.splice(index - 1, 2, ...swap);
        },
        onItemMoveDown(index) {
            if (index === this.configs.length - 1) {
                return;
            }
            const swap = [this.configs[index + 1], this.configs[index]];
            this.configs.splice(index, 2, ...swap);
        },
        onItemDelete(index) {
            this.configs.splice(index, 1);
        },
    },
}
</script>

<style scoped>

</style>
