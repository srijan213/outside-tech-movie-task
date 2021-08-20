import { useState, useEffect } from 'react'
import { SearchMovieResponse, SearchMovieResult } from '../types/SearchMovie'
import { getApiURL } from '../utils/getApiURL'

type Status = 'idle' | 'fetching' | 'fetched'

interface FetchData {
    status: Status
    data: SearchMovieResult[]
}

const defaultURL = getApiURL()
export const useFetch = (url?: string): FetchData => {
    const [status, setStatus] = useState<Status>('idle')
    const [data, setData] = useState<SearchMovieResult[]>([])

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            setStatus('fetching')
            const response = await fetch(url || defaultURL)
            const apiResponse: SearchMovieResponse = await response.json()
            setData(apiResponse.results)
            setStatus('fetched')
        }
        fetchData()
    }, [url])

    return { status, data }
}
