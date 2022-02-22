import * as React from 'react';
import Modal from '../components/Modal';
import MovieCard from './MovieCard';
import './movie.css';
import { useLockedBody } from '../app/hooks';

const MovieList = ( {movies} : any ) => {
    const [lastIndex, setLastIndex] = React.useState<number>(movies.length - 1);
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const [isLocked, setIsLocked] = useLockedBody();
    
    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
        setIsLocked(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setIsLocked(false);
    }

    return (
        <div className="Movie-grid">
            {movies.map((movie : any, index : number) => (
                <MovieCard 
                    index={index}
                    key={`${movie.imdbID}-${index}`} 
                    movie={movie} 
                    onClick={openModal}
                />)
            )}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className='Movie-modal'>
                    <div className='Movie-modal__content'>
                        <div className="Movie-modal__content__left">
                            <button 
                                disabled={currentIndex === 0} 
                                onClick={() => setCurrentIndex(currentIndex - 1)}>
                                    Previous Movie
                            </button>
                        </div>
                        <div className="Movie-modal__content__center">
                            <div className='Movie-modal__image'>
                                <img src={movies[currentIndex].Poster} alt={movies[currentIndex].Title} />
                            </div>
                            <h2>{movies[currentIndex].Title}</h2>
                            <p>{movies[currentIndex].Type}</p>
                            <p>{movies[currentIndex].Year}</p>
                        </div>
                        <div className='Movie-modal__content__right'>
                            <button 
                                disabled={currentIndex === lastIndex} 
                                onClick={() => setCurrentIndex(currentIndex + 1)}>
                                Next Movie
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default MovieList;