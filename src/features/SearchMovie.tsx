import * as React from 'react';
import { useGetMoviesQuery } from '../services/movie';
import { useDebounce } from '../app/hooks';
import MovieList from './MovieList';
import Message from '../components/Message';
import { randomMovieKeyword } from '../app/utils';

const SearchMovie = () => {
    const [search, setSearch] = React.useState<string>(randomMovieKeyword());
    const [searchTerm, setSearchTerm] = React.useState<string | null>(null);
    const { data } = useGetMoviesQuery(searchTerm);
    const debouncedSearch = useDebounce(search, 500);

    React.useEffect(() => {
        debouncedSearch.length > 0 ? setSearchTerm(debouncedSearch) : setSearchTerm(randomMovieKeyword());
    }, [debouncedSearch]);

    return (
        <div className="Search-movie">
            <div className="Container">
                <div className="Search-movie__input">
                    <div className="Container">
                        <input
                            type="search"
                            placeholder="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                {data?.Error && <Message message={data.Error} />}
                {data && data.Search && <MovieList movies={data.Search} />}
            </div>
        </div>
    );
}

export default SearchMovie;