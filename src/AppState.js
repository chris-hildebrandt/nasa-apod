import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
const date = new Date()
export const AppState = reactive({
  user: {},

  account: {},

  /**@type {import('./models/APOD.js').APOD} */
  APOD: null,

  date: date.toISOString().split('T')[0]
})
