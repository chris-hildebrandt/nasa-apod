import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const APODApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 4000,
  params: {
    api_key: 'QShafLJ9D3b3cNUdHe4dPcilGD9moeVSAQ7TLDKQ'
  }
})

// export const APODApi = Axios.create({
//   baseURL: 'https://bcw-getter.herokuapp.com',
//   timeout: 4000,
//   params: {
//     url: 'https://api.nasa.gov/planetary/apod',
//     api_key: 'QShafLJ9D3b3cNUdHe4dPcilGD9moeVSAQ7TLDKQ'
//   }
// })