import React from 'react'
import { useFetch } from './hooks/useFetch'

import './App.scss'
import { MovieList } from './components/MovieList'

const App: React.FC = () => {
    const { status, data: searchMovieList } = useFetch()
    console.log('data:', searchMovieList)

    if (status === 'fetching' && !searchMovieList) {
        return <div>Loading ...</div>
    }
    return (
        <div className="app">
            <h2>Movie List for Outside Tech</h2>
            <MovieList searchMovieList={searchMovieList} />
        </div>
    )
}

export default App
