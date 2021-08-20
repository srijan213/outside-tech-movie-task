import React from 'react'
import { SearchMovieResult } from '../../types/SearchMovie'
import { Movie } from '../Movie'

interface MovieListProps {
    searchMovieList: SearchMovieResult[]
}

export const MovieList: React.FC<MovieListProps> = ({ searchMovieList }) => {
    return (
        <div className="movieList">
            {searchMovieList.map((movie) => (
                <Movie key={movie.id} searchMovieData={movie} />
            ))}
        </div>
    )
}
