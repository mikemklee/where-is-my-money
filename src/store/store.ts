import { defineStore } from 'pinia'

interface ITodo {
    id: number
    text: string
    isFinished: boolean
}

enum Filter {
  All,
  Finished,
  Unfinished
}

const initialTodos: ITodo[] = []

export const useTodos = defineStore('todos', {
  state: () => ({
    todos: initialTodos,
    filter: Filter.All,
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state): ITodo[] {
      if (this.filter === Filter.Finished) {
        // call other getters with autocompletion ✨
        return this.finishedTodos
      } else if (this.filter === Filter.Unfinished) {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text: string) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})