import { defineStore } from 'pinia';

const initialHistory = [];
const initialUser = {};

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
    async saveEntry(entry) {
      const { date, amount, source, title, category, subCategory } = entry;

      const response = await fetch(`http://localhost:8000/users/${0}/items`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source,
          title,
          epoch_date: date.valueOf(),
          amount: amount * 100, // convert to cents
          category: category,
          sub_category: subCategory,
        }),
      });
      const data = await response.json();

      this.history.push({
        ...data,
        date: new Date(data.epoch_date),
      });
    },
  },
});

export const useUserStore = defineStore('user', {
  state: () => ({
    user: initialUser,
  }),
});
