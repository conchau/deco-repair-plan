// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const axiosConfig = axios.create({
// .. where we make our configurations
    baseURL: "https://deco-repair-plan.herokuapp.com/"
});

export default axiosConfig;