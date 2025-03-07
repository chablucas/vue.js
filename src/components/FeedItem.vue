<script setup>
defineProps({
  feed: Object,
  onDelete: Function,
  onEdit: Function,
  onAddToFavorites: Function
});
</script>

<template>
  <div class="feed-item">
    <h3>{{ feed.title }}</h3>
    <p>{{ feed.url }}</p>
    <button @click="onEdit(feed)">Modifier</button>
    <button @click="onDelete(feed.url)">Supprimer</button>
    <button @click="onAddToFavorites(feed)">Ajouter aux préférences</button>
  </div>
</template>

<style scoped>
.feed-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
button {
  margin-right: 5px;
}
</style>
