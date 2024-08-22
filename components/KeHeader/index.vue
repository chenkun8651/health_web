<template>
  <div class="px-4 max-auto flex flex-nowrap items-center">
    <div class="">
      <!-- <img src="/public/images/avatar.png" alt="avatar" srcset="avatar" /> -->
      <span>ChenKun</span>
      <span>8651</span>
    </div>
    <ul class="flex">
      <li class="mx-2 p-2 text-black" v-for="item in headerMean" @click="goToPage(item.path)">
        {{ item.label }}
      </li>
    </ul>
    <div class="flex"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, useRouter } from "#imports";

const headerMean = ref();
headerMean.value = [
  {
    label: "docs",
    path: "/docs",
  },
  {
    label: "healthy",
    path: "/healthy",
  },
];

const goToPage = (path: string) => {
  const router = useRouter();
  router.push(path);
};
</script>
