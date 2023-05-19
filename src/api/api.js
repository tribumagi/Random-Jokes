import axios from "axios";

const instance = axios.create({
    baseURL: "https://v2.jokeapi.dev/joke/"
})

export const API = {
    getJokes() {
        return instance
            .get("Any?type=single&amount=10",)

    }
}