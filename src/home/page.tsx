import { NavLink } from 'react-router-dom';
import { Container } from '../shared/components/container';
import { HandleAsync } from '../shared/components/handleAsync';
import { TMDBImage } from '../shared/components/tmdbImg';
import { useFeed } from './hooks';

const Homepage = () => {
  const { movies, error, loading } = useFeed();
  return (
    <Container>
      <h1>Homepage</h1>
      <HandleAsync loading={loading} error={error}>
        <div
          className="grid grid-cols-2 md:grid-cols-4
        lg:grid-cols-6 xl:grid-cols-8 gap-2"
        >
          {movies !== undefined &&
            movies.map((movie) => (
              <NavLink
                to={`/movie/${movie.id}`}
                className="scale-100 hover:scale-110 transform
                transition-transform duration-300"
              >
                <TMDBImage
                  type="poster"
                  path={movie.poster_path}
                  key={movie.id}
                />
              </NavLink>
            ))}
        </div>
      </HandleAsync>
    </Container>
  );
};

export default Homepage;
