import * as React from 'react';

const MovieCard = ( {movie, index, onClick} : any ) => {
    return (
        <div className="Movie-card" onClick={() => onClick(index)}>
            <div className="Movie-card__img">
                <img src={movie.Poster} alt={movie.Title}/>
            </div>
            <div className="Movie-card__info">
                {movie.Title}
            </div>
        </div>
    )
}

export default MovieCard;