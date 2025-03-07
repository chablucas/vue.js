<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useRssStore } from '@/stores/rssStore';
import NewsItem from '@/components/NewsItem.vue';

const route = useRoute();
const rssStore = useRssStore();
const feed = rssStore.feeds.find(f => f.url === decodeURIComponent(route.params.url));
const limit = ref('Tout');

const filteredNews = computed(() => {
  if (!feed) return [];
  const limitValue = limit.value === 'Tout' ? feed.items.length : parseInt(limit.value);
  return feed.items.slice(0, limitValue);
});
</script>

<template>
  <div v-if="feed">
    <h1>Articles de {{ feed.title }}</h1>

    <label for="limit">Afficher :</label>
    <select v-model="limit">
      <option>10</option>
      <option>50</option>
      <option>100</option>
      <option>Tout</option>
    </select>

    <NewsItem v-for="article in filteredNews" :key="article.link" :news="article" />
  </div>
</template>
