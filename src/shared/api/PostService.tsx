import axios from "axios"

// export default class PostService {
//     static async getAll(url: string, page: number = 1,) {
//         const response = await axios.get(`https://swapi.dev/api/${url}?page=${page}`);
//         return response
//     }
//     static async getById(id: string, url: string,) {
//         const response = await axios.get(`https://swapi.dev/api/${url}/${id}/`)
//         return response
//     }
// }

const cache: Record<string, any> = {};

export default class PostService {
    static async getAll(url: string, page: number = 1) {
        const cacheKey = `${url}?page=${page}`

        if (cache[cacheKey]) {
            return cache[cacheKey];
        }

        const response = await axios.get(`https://swapi.dev/api/${url}?page=${page}`);
        cache[cacheKey] = response;
        return response;
    }

    static async getById(id: string, url: string) {
        const cacheKey = `${url}/${id}`;

        if (cache[cacheKey]) {
            return cache[cacheKey];
        }

        const response = await axios.get(`https://swapi.dev/api/${url}/${id}/`);
        cache[cacheKey] = response;
        return response;
    }
}