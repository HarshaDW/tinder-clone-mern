import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export const getCards = () => {
    return instance.get('/cards/all')
}

export default instance;
