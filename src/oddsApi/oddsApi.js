// js for queries to oddsApi

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.the-odds-api.com/v3/odds',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    params: {
    },
    responseType: 'json',
    timeout: 10000,
    withCredentials: false
})

export default {
    getOdds: (params) => api.get('', { params })
}

