import React from 'react'
import { NoRating } from '../../common/NoRating'
import { IMAGE_URL_PREFIX } from '../../constants'
import { SearchMovieResult } from '../../types/SearchMovie'

import './styles.scss'

interface MovieProps {
    searchMovieData: SearchMovieResult
}

const isRatingAvailable = (rating: number, totalVotes: number): boolean => {
    return rating === 0 && totalVotes < 5
}

export const Movie: React.FC<MovieProps> = ({ searchMovieData }) => {
    const {
        original_title: originalTitle,
        poster_path: posterPath,
        id: movieId,
        release_date: releaseDate,
        vote_average: rating,
        vote_count: totalVotes,
    } = searchMovieData
    return (
        <div className="movie">
            <div className="left">
                <img
                    src={`${IMAGE_URL_PREFIX}${posterPath}`}
                    alt="movie poster"
                />
            </div>
            <div className="right">
                <div className="title">
                    <u>{originalTitle}</u>
                </div>
                <div className="release-date">
                    <b>Release Date:</b> {releaseDate}
                </div>
                {!isRatingAvailable ? (
                    <NoRating />
                ) : (
                    <div className="rating">
                        <b>Rating: {rating}</b>/10 from <b>{totalVotes}</b>{' '}
                        votes
                    </div>
                )}
                <div className="info" />
            </div>
        </div>
    )
}
