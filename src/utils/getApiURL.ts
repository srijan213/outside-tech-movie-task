import { generateChar } from './generateChar'

export const getApiURL = (): string => {
    const queryString = generateChar()
    const API_KEY = 'f145d1047a7b73557f3374690ab340cc'
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&query=${queryString}`
    return URL
}
