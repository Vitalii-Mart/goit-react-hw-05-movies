import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackLink from '../../components/BackLink';
import MovieInfo from '../../components/MovieInfo';
import { MoviesId } from '../../services/Api';
import Loader from '../../components/Loader';
import  { Ring } from './MovieDetails.styled';

const MovieDetails = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      setIsLoading(true);
      try {
        const data = await MoviesId(movieId);
        setMoviesData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  }, [movieId]);
  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading && <Ring><Loader /></Ring> }
      {moviesData && (
        <MovieInfo
          title={moviesData.title}
          vote_average={moviesData.vote_average}
          overview={moviesData.overview}
          poster_path={moviesData.poster_path}
          genres={moviesData.genres}
          release_date={moviesData.release_date}
        />
      )}
    </main>
  );
};

export default MovieDetails;
