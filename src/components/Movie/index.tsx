import React, { useState, useRef } from 'react'
import { NoRating } from '../../common/NoRating'
import { IMAGE_URL_PREFIX } from '../../constants'
import { SearchMovieResult } from '../../types/SearchMovie'
import { isRatingAvailable } from '../../utils/isRatingAvailable'
import Info from '../Info'
import Modal from '../Modal'

import './styles.scss'

interface MovieProps {
    searchMovieData: SearchMovieResult
}

export const Movie: React.FC<MovieProps> = ({ searchMovieData }) => {
    const [showDetails, setShowDetails] = useState(false)
    const [infoHeight, setInfoHeight] = useState('0px')
    const [isOpen, setIsOpen] = useState(false)
    const inputEl = useRef<HTMLDivElement>(null)
    const {
        original_title: originalTitle,
        poster_path: posterPath,
        backdrop_path: backdropPath,
        release_date: releaseDate,
        vote_average: rating,
        vote_count: totalVotes,
        overview,
        adult,
        original_language: originalLanguage,
        popularity,
    } = searchMovieData

    const toggle = (): void => {
        setShowDetails(!showDetails)
        if (inputEl && inputEl.current) {
            setInfoHeight(
                showDetails ? '0px' : `${inputEl.current.scrollHeight}px`
            )
        }
    }

    const handleInfoClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
        e.preventDefault()
        e.stopPropagation()
        setIsOpen(true)
    }

    return (
        <div className="movie" onClick={toggle} role="presentation">
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
                {!isRatingAvailable(rating, totalVotes) ? (
                    <NoRating />
                ) : (
                    <div className="rating">
                        <b>Rating: {rating}</b>/10 from <b>{totalVotes}</b>{' '}
                        votes
                    </div>
                )}
                <div
                    // href="#!"
                    role="presentation"
                    className="more-info"
                    onClick={handleInfoClick}
                >
                    Click for more info
                </div>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <Info
                        adult={adult}
                        backdropPath={backdropPath}
                        originalLanguage={originalLanguage}
                        originalTitle={originalTitle}
                        overview={overview}
                        popularity={popularity}
                        rating={rating}
                        totalVotes={totalVotes}
                    />
                </Modal>
            </div>
            <br />
            <div
                ref={inputEl}
                style={{
                    maxHeight: `${infoHeight}`,
                }}
                className="info"
            >
                {overview}
            </div>
        </div>
    )
}
