<script setup>
defineProps({
  news: Object
});
</script>

<template>
  <div class="news-item">
    <h3>{{ news.title }}</h3>
    <p>{{ news.content }}</p>
  </div>
</template>

<style scoped>
.news-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
