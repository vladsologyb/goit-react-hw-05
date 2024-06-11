import { useEffect, useState } from 'react'
import MovieList from '../../movieList/MovieList'
import { getMovies } from '../../../movies-API'

export default function HomePage() {
    const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
      useEffect(() => {
    async function fetchMovies() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
      }, []);
    const onClick = () => {
        
    }
    return (
        <div>
    {movies.length > 0 && <MovieList movies={movies}  />}
        </div>
    )
}