<script setup>
import { ref, computed } from 'vue';
import { useRssStore } from '@/stores/rssStore';
import FeedItem from '@/components/FeedItem.vue';

const rssStore = useRssStore();
const searchQuery = ref('');
const tempQuery = ref(''); // Variable temporaire pour la recherche

// Filtrer les flux enregistrés en fonction de la recherche
const filteredFavorites = computed(() => {
  return rssStore.favorites.filter(feed =>
    feed.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Déclencher la recherche
const searchFeeds = () => {
  searchQuery.value = tempQuery.value;
};
</script>

<template>
  <div>
    <h1>Flux Enregistrés</h1>

    <div class="search-container">
      <input v-model="tempQuery" placeholder="Rechercher un flux enregistré..." />
      <button @click="searchFeeds">Rechercher</button>
    </div>

    <FeedItem 
      v-for="feed in filteredFavorites" 
      :key="feed.url" 
      :feed="feed"
      :onDelete="rssStore.removeFeed"
    />
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
