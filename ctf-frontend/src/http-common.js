import axios from 'axios';

export const HTTP = axios.create({
    baseURL: "http://dmitriyp.ru:2052/api/",
    headers: {
        Authorization: "Token" + token
    }
});