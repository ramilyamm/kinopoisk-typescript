export type IFilms = {
    kinopoiskId: string
    nameEn: string
    nameOriginal: string
    nameRu: string
    posterUrl: string
    filmId: string
}

type country = {
    country: string
}

type genre = {
    genre: string
}


export type IDetail = IFilms & {
    description: string | undefined
    countries: country[]
    year: string
    genres: genre[]
    ratingKinopoisk: string
}
