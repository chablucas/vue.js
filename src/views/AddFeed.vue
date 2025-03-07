<script setup>
import { ref, onMounted } from 'vue';
import { useRssStore } from '@/stores/rssStore';

const rssStore = useRssStore();
const title = ref('');
const url = ref('');
const errorMessage = ref('');

const validateForm = () => {
  errorMessage.value = '';
  if (!title.value.trim() || !url.value.trim()) {
    errorMessage.value = 'Le titre et le lien sont requis.';
    return false;
  }
  const urlPattern = /^(https?:\/\/)[\w.-]+(\.[a-z]{2,6})([\/\w .-]*)*\/?$/;
  if (!urlPattern.test(url.value)) {
    errorMessage.value = 'Le lien du flux RSS est invalide.';
    return false;
  }
  return true;
};

const addFeed = () => {
  if (validateForm()) {
    rssStore.addFeed({ title: title.value, url: url.value });
    title.value = '';
    url.value = '';
  }
};
</script>

<template>
  <div>
    <h1>Ajouter un Flux RSS</h1>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <input v-model="title" placeholder="Titre du flux" />
    <input v-model="url" placeholder="Lien du flux" />
    <button @click="addFeed">Enregistrer</button>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
