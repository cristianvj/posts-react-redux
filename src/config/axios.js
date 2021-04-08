import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: 'https://606d05d1603ded0017502e69.mockapi.io/vecindario/'
})

export default clienteAxios