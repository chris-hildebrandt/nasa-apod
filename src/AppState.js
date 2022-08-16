import { reactive } from 'vue'
import { APOD } from "./models/APOD.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},

  account: {},

  /**@type {import('./models/APOD.js').APOD} */
  APOD: null,

  date: new Date()
})
