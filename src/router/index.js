import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AddFeed from '@/views/AddFeed.vue';
import Preferences from '@/views/Preferences.vue';
import FeedDetails from '@/views/FeedDetails.vue';
import NewsDetails from '@/views/NewsDetails.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddFeed },
  { path: '/preferences', component: Preferences },
  { path: '/feed/:url', component: FeedDetails },
  { path: '/news/:id', component: NewsDetails },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
