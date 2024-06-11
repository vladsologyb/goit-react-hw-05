import { getMovieReview } from '../../movies-API'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import css from './MovieReviews.module.css'

export default function MoviesReviews( ) {
   const {movieId} = useParams()
  const [reviews, setReviews]= useState([])
  const [fetchError, setFetchError] = useState(false)
 
  useEffect(()=>{
    async function fetchMovieReviews(){
      try {
        const data = await getMovieReview(movieId);
        setReviews(data.results);
        console.log(data.results);
      } catch (error) {
        setFetchError(true);
      }
    }
    fetchMovieReviews()
  },[movieId])

  return (
      <ul className={css.reviewList}>
        { fetchError ? 
        <p>Reload the page</p>
        :
        (reviews.length>0 
          ?
          reviews.map(({author, content, id})=>
          <li key={id} className={css.reviewItem}>
            <p><strong>{author}</strong></p>
            <p>{content}</p>
          </li>)
          :
          (<p className={css.notFoundTitle}>No reviews found for this movie</p>)
        )
        }
      </ul>
  )
}