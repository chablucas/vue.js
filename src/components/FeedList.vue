<script setup>
defineProps(['feeds']);
</script>

<template>
  <ul>
    <li v-for="feed in feeds" :key="feed.url">
      <router-link :to="`/feed/${encodeURIComponent(feed.url)}`">{{ feed.url }}</router-link>
    </li>
  </ul>
</template>
