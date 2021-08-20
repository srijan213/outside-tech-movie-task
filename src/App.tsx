import React from 'react'
import { useFetch } from './hooks/useFetch'
import { MovieList } from './components/MovieList'

import './App.scss'
import Container from './common/Container'

const App: React.FC = () => {
    const { status, data: searchMovieList } = useFetch()
    console.log('data:', searchMovieList)

    if (status === 'fetching' && !searchMovieList) {
        return <div>Loading ...</div>
    }
    return (
        <div className="app">
            <Container>
                <h2 style={{ textAlign: 'center' }}>
                    Movie List for Outside Tech
                </h2>
                <MovieList searchMovieList={searchMovieList} />
            </Container>
        </div>
    )
}

export default App
