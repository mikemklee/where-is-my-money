import { defineStore } from 'pinia';

const initialHistory = [];

export const useHistoryStore = defineStore('history', {
  state: () => ({
    history: initialHistory,
  }),
  actions: {
    async getHistory() {
      const response = await fetch('http://localhost:8000/items/');
      const data = await response.json();

      const formattedHistory = data.map((item) => ({
        ...item,
        date: new Date(item.epoch_date),
      }));

      this.history = formattedHistory;
    },
    async saveEntry(title) {
      const response = await fetch(`http://localhost:8000/users/${0}/items`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'Uber',
          title,
          epoch_date: Date.now(),
          amount: 1679,
          category: 'income',
          sub_category: 'something',
        }),
      });
      const data = await response.json();
      this.history.push(data);
    },
  },
});
