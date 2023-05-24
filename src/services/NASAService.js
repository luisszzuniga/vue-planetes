const axios = require('axios').default;

const baseURL = 'https://api.example.com';

const NASAService = axios.create({
    baseURL: baseURL
});

export default NASAService;

export { NASAService };