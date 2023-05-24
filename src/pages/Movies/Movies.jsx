import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { SearchMovies } from '../../services/Api';
import MovieList from '../../components/MovieList';
import Loader from '../../components/Loader';
import SearchBar from '../../components/SearchBar';
import { Ring, Div } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('query') ?? '';

  const handleSearch = useCallback(
    query => {
      const nextParams = query !== '' ? { query } : {};
      setSearchParams(nextParams);
    },
    [setSearchParams]
  );

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await SearchMovies(searchName);
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [searchName]);

  return (
    <main>
      <SearchBar value={searchName} onChange={handleSearch} />
      {isLoading && <Ring><Loader /></Ring> }
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <Div>There is no data to display</Div>
      )}
    </main>
  );
};
export default Movies;
