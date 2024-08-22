import { defineStore } from "pinia";
import { persistedState } from "#imports";

export const useUserStore = defineStore("user", () => {}, {
  persist: {
    storage: persistedState.localStorage,
  },
});
