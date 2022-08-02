import { defineStore } from 'pinia';

const initialTodos = [];

export const useTodos = defineStore('todos', {
  state: () => ({
    todos: initialTodos,
    filter: 0,
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos() {
      if (this.filter === 1) {
        // call other getters with autocompletion ✨
        return this.finishedTodos;
      } else if (this.filter === 0) {
        return this.unfinishedTodos;
      }
      return this.todos;
    },
  },
  actions: {
    async addTodo(title) {
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
      this.todos.push(data);
    },
  },
});
