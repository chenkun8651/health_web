<template>
  <div :class="classMeanBox">
    <nav :class="classNav">
      <ul :class="classUl">
        <li
          class="mx-2 p-2 text-black cursor-pointer"
          v-for="item in meanList"
          @click="router"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, useRouter } from "#imports";

const meanList = ref([]);
meanList.value = [
  { name: "add record", router: "/addRecord" },
  { name: "data statistics", router: "/dataStatistics" },
];
//show type top left bottom
const meanShowType = ref("top");
const classMeanBox = reactive({
  "w-full flex": meanShowType.value === "top",
  "w-[200px] h-screen flex flex-col": meanShowType.value === "left",
});

const classNav = reactive({
  "w-full": meanShowType.value === "top",
  "": meanShowType.value === "left",
});

const classUl = reactive({
  "w-full flex justify-center items-center": meanShowType.value === "top",
  "": meanShowType.value === "left",
});
</script>
