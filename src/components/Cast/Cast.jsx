import { useParams, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { GetCredits } from '../../services/Api';
import Loader from "components/Loader";
import PropTypes from 'prop-types';
import { List } from "./Cast.styled";

const Cast = () => {
    const {movieId} = useParams();
    const [moviesData, setMoviesData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchMovieDetails(){
            setIsLoading(true);
            try {
                const data = await GetCredits(movieId);
                setMoviesData(data);
            } catch (error) {
                console.log(error);
            }finally {
                setIsLoading(false)
            }
        }
        fetchMovieDetails();
    }, [movieId]);

    return (
        <main>
          {isLoading && <Loader />}
          {moviesData && (
            <List>
              {moviesData.cast.map(e => (
                 <li key={e.cast_id}>
                 {!e.profile_path ? (
                   <span>No photo</span>
                 ) : (
                   <img
                     src={`https://image.tmdb.org/t/p/w500${e.profile_path}`}
                     alt={e.name}
                     width="100"
                   />
                 )}
                  <div>
                    <h3>{e.name}</h3>
                    <p>Character: {e.character}</p>
                  </div>
                  <Suspense fallback={<Loader />}>
                                <Outlet />
                            </Suspense>
                </li>
              ))}
            </List>
          )}
        </main>
      );
    };
    
    Cast.propTypes = {
      moviesData: PropTypes.shape({
        cast: PropTypes.arrayOf(
          PropTypes.shape({
            cast_id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired,
            profile_path: PropTypes.string,
          })
        ).isRequired,
      }),
    };
    
    
    
    export default Cast;