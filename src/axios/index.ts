import axios from "axios";


const instanse = axios.create({
    baseURL: "https://kinopoiskapiunofficial.tech/api/",
    headers: {
        'X-API-KEY': '13bfdf5a-88fa-4919-9283-89a73f7a5585',
        'Content-Type': 'application/json',
    },
})

export type IAll = {
    year: string
    month: string
}

export const filmsAPI = {
    getAllFilms() {
        return instanse.get('v2.2/films')
    },
    getFilmById(id: string) {
        return instanse.get(`v2.2/films/${id}`)
    },

    getFilmByName(value: string) {
        return instanse.get(`v2.1/films/search-by-keyword?keyword=${value}`)
    },
    getFilterByYear(all: IAll) {
        return instanse.get(`v2.2/films/premieres?year=${all.year}&month=${all.month}`)
    },
}