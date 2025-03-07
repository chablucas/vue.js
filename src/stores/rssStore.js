import { defineStore } from 'pinia';

export const useRssStore = defineStore('rss', {
  state: () => ({
    feeds: JSON.parse(localStorage.getItem('feeds')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
  }),

  actions: {
    addFeed(title, url) {
      this.feeds.push({ title, url });
      this.saveFeeds();
    },

    removeFeed(url) {
      this.feeds = this.feeds.filter(feed => feed.url !== url);
      this.favorites = this.favorites.filter(news => news.feedUrl !== url);
      this.saveFeeds();
      this.saveFavorites();
    },

    updateFeed(url, newTitle) {
      const feed = this.feeds.find(feed => feed.url === url);
      if (feed) {
        feed.title = newTitle;
        this.saveFeeds();
      }
    },

    addToFavorites(feed) {
      if (!this.favorites.some(fav => fav.url === feed.url)) {
        this.favorites.push(feed);
        this.saveFavorites();
      }
    },

    addMultipleToFavorites(feeds) {
      feeds.forEach(feed => {
        if (!this.favorites.some(fav => fav.url === feed.url)) {
          this.favorites.push(feed);
        }
      });
      this.saveFavorites();
    },

    saveFeeds() {
      localStorage.setItem('feeds', JSON.stringify(this.feeds));
    },

    saveFavorites() {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }
});
