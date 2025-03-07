<template>
  <nav>
    <router-link to="/">🏠 Liste des flux</router-link>
    <router-link to="/add">➕ Enregistrer un flux</router-link>
    <router-link to="/preferences">⭐ Préférences</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  background: #eee;
  padding: 10px;
}
</style>
