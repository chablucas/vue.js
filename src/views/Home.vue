<script setup>
import { ref, computed } from 'vue';
import { useRssStore } from '@/stores/rssStore';
import FeedItem from '@/components/FeedItem.vue';

const rssStore = useRssStore();
const searchQuery = ref('');

// Filtrer les flux enregistrés en fonction de la recherche
const filteredFavorites = computed(() => {
  return rssStore.favorites.filter(feed =>
    feed.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div>
    <h1>Flux Enregistrés</h1>

    <input v-model="searchQuery" placeholder="Rechercher un flux enregistré..." />

    <FeedItem 
      v-for="feed in filteredFavorites" 
      :key="feed.url" 
      :feed="feed"
      :onDelete="rssStore.removeFeed"
    />
  </div>
</template>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
}
</style>
