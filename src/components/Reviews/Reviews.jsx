import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetReviews } from '../../services/Api';
import PropTypes from 'prop-types';
import {Review, Text, List} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await GetReviews(movieId);
        setMoviesData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  const noReviews = (
    <Review>
      <Text>We don't have any reviews for this movie</Text>
    </Review>
  );

  return (
    <main>
      {moviesData && (
        <List>
          {moviesData.results.length === 0
            ? noReviews
            : moviesData.results.map(e => (
                <li key={e.id}>
                  <h3>Author: {e.author}</h3>
                  <p>{e.content}</p>
                </li>
              ))}
        </List>
      )}
    </main>
  );
};

Reviews.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default Reviews;
