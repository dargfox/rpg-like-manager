import { defineStore } from "pinia";

const useGlobalStore = defineStore({
    id: 'global',
    state: () => ({
        test: 1,
    }),
    actions: {
        add() {
            this.test += 1;
        },
    }
});

export {
    useGlobalStore,
}