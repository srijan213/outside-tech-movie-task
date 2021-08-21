import React from 'react'
import { NoRating } from '../../common/NoRating'
import { BACKDROP_IMAGE_URL_PREFIX, IMAGE_URL_PREFIX } from '../../constants'
import { isRatingAvailable } from '../../utils/isRatingAvailable'

import './styles.scss'

interface InfoProps {
    originalTitle: string
    backdropPath: string
    overview: string
    adult: boolean
    originalLanguage: string
    popularity: number
    rating: number
    totalVotes: number
}

const Info: React.FC<InfoProps> = ({
    adult,
    backdropPath,
    originalLanguage,
    originalTitle,
    overview,
    popularity,
    rating,
    totalVotes,
}) => {
    return (
        <div className="info">
            <div className="title">{originalTitle}</div>
            <img
                src={`${BACKDROP_IMAGE_URL_PREFIX}${backdropPath}`}
                alt="movie poster"
            />
            <div className="popularity">
                <span className="key">Popularity Score:</span> {popularity}
            </div>
            <div className="language">
                <span className="key">Original Language:</span>
                <span className="upper">{originalLanguage}</span>
            </div>
            <div className="adult">
                <span className="key">Is Adult?:</span> {adult ? 'Yes' : 'No'}
            </div>
            {!isRatingAvailable(rating, totalVotes) ? (
                <NoRating />
            ) : (
                <div className="rating">
                    <span className="key">Rating:</span>
                    <b>{rating}</b>/10 from <b>{totalVotes}</b> votes
                </div>
            )}
            <div className="overview">{overview}</div>
        </div>
    )
}

export default Info
