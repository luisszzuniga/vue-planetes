const axios = require('axios');

const baseURL = 'https://api.example.com';

const NASAService = axios.create({
    baseURL: baseURL
});

export default NASAService;