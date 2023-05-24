import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '89c47b4059eaa0549c29c88014fa56ba';

export const GetTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const MoviesId = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const SearchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};

export const GetCredits = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
  return data;
};

export const GetReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
  return data;
};
