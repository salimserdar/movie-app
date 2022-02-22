import * as React from 'react';

const MovieModal = ( {movies, index} : any ) => {
    
    return (<>{movies[index].title}</>)
}

export default MovieModal;