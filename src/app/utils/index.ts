export const randomMovieKeyword = () => {
    const movieKeyword = [
        'action hero', 
        'bollywood', 
        'comedy', 
        'drama', 
        'horror', 
        'romance', 
        'thriller'
    ];
    return movieKeyword[Math.floor(Math.random() * movieKeyword.length)]
}