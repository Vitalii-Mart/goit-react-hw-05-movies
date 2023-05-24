import { useState, useEffect } from 'react';
import { GetTrending } from '../../services/Api';
import MovieList from '../../components/MovieList';
import Loader from '../../components/Loader';
import  { Ring } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await GetTrending();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      {isLoading ?<Ring><Loader /></Ring>  : <MovieList movies={movies} />}
    </main>
  );
};

export default Home;
