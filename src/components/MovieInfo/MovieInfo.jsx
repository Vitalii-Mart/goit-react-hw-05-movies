import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import {MovieBlock, MovieBox, ButtonBlock, Link} from './MovieInfo.styled'


const MovieInfo = ({
  title,
  vote_average,
  overview,
  poster_path,
  genres,
  release_date,
}) => {
  return (
    <>
      <MovieBlock>
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
        />
        <MovieBox>
          <h2>
            {title} <span>({Number.parseInt(release_date)})</span>
          </h2>
          <p>User Score:{Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <div>{genres.map(genre => genre.name).join(', ')}</div>
        </MovieBox>
      </MovieBlock>
      <div>
        <h3>Additional information</h3>
        <Suspense fallback={<Loader />}>
          <ButtonBlock>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </ButtonBlock>
        </Suspense>
      </div>
      <Outlet />
    </>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};

