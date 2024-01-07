import axios from 'axios';

export default axios.create({
    baseURL: 'https://064e-2804-1c2c-138-b500-8d3f-d8a2-c5d8-f005.ngrok-free.app',
    headers: {
        'ngrok-skip-browser-warning': 'true',
    }
});