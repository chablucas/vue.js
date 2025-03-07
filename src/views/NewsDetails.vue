<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useRssStore } from '@/stores/rssStore';

const route = useRoute();
const router = useRouter();
const rssStore = useRssStore();

const feed = rssStore.feeds.find(feed =>
  feed.items.some(item => encodeURIComponent(item.link) === route.params.id)
);

const newsItem = feed ? feed.items.find(item => encodeURIComponent(item.link) === route.params.id) : null;

if (!newsItem) {
  router.push('/not-found');
}
</script>

<template>
  <div v-if="newsItem">
    <h1>{{ newsItem.title }}</h1>
    <img v-if="newsItem.thumbnail" :src="newsItem.thumbnail" alt="Image de la news">
    <p>{{ newsItem.description }}</p>
    <a :href="newsItem.link" target="_blank">Lire l'article</a>
  </div>
</template>
