import axios from "axios";

const baseURL = 'https://api.le-systeme-solaire.net';

const SolarSystemService = axios.create({
    baseURL: baseURL
});

export default SolarSystemService;

export { SolarSystemService };