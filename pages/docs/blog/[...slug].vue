<template>
  <div>
    <div v-if="showMode === 'list'">
      <h1>文章列表</h1>
      <div v-for="item in articles" @click="toArticleDetails(item.title)">
        {{ item.title }}
      </div>
    </div>
    <div v-if="showMode === 'details'">
      <ContentRenderer :value="article">
        <h1>{{ article.title }}</h1>
        <div class="markdown-body">
          <ContentRendererMarkdown :value="article.body" />
        </div>
      </ContentRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryContent, useRoute, useRouter, ref, navigateTo } from "#imports";
import type { Ref } from "#imports";

const route = useRoute();

const showMode: Ref<string> = ref("list"); // mode list-全部文章的列表视图 details-某一篇文章的详情视图
const articles: Ref<any> = ref(); // 文章列表
const article: Ref<any> = ref(); // 文章详情

if (route.params.slug) {
  // 有slug是文章详情
  showMode.value = "details";
  article.value = await queryContent("articles").where({ title: route.params.slug[0] }).findOne();
} else {
  // 没有slug不是文章列表
  showMode.value = "list";
  articles.value = await queryContent("articles").find();
}

// 跳转到文章详情
const toArticleDetails = (title: string) => {
  navigateTo(`/docs/blog/${title}`);
};
</script>
