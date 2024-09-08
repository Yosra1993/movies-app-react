import "./MoviesTableComponent.css";

import { FC, useEffect, useState } from "react";
import { getMoviesByPage } from "../../services/movieService";
import { Movie } from "../../types/movie";
import PersonComponent from "../PersonComponent";

const MoviesTableComponent: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMoreMovies, setHasMoreMovies] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMoviesByPage(currentPage, 3);
        if (moviesData.content.length > 0) {
          setMovies(moviesData.content);
        } else {
          setHasMoreMovies(false);
        }
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const loadMoreMovies = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="movies-table">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genres</th>
            <th>Year</th>
            <th>Actors</th>
            <th>Directors</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.genres.join(" - ")}</td>
              <td>{movie.year}</td>
              <td>
                {movie.actors.map((actorId) => (
                  <PersonComponent key={movie.id} id={actorId} />
                ))}
              </td>
              <td>
                {movie.directors.map((directorId) => (
                  <PersonComponent id={directorId} />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {hasMoreMovies && (
        <button onClick={loadMoreMovies}>Load the Next 3 Movies</button>
      )}
    </div>
  );
};

export default MoviesTableComponent;
