import { Route, Routes } from 'react-router-dom';
import {lazy, Suspense } from 'react';
const HomePage = lazy (() => import ( './pages/homePage/HomePage'));
const MoviesPage = lazy (() => import ( './pages/moviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/movieDetailsPage/MovieDetailsPage'));
const Cast = lazy(()=> import( './components/movieCast/MovieCast'));
const Reviews = lazy(()=> import( './components/movieReviews/MovieReviews'));
const Navigation = lazy(() => import("./components/navigation/Navigation"))
const NotFoundPage = lazy(() => import('./pages/notFoundPage/NotFoundPage'));
import './App.css'

function App() {   
  
  return (
        
    <div>
      <Navigation />
      <Suspense fallback={<div>Please. wait...</div>}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies' element={<MoviesPage />} />
     
          <Route path='/movies/:movieId/' element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path='*' element={ <NotFoundPage/>} />
        </Routes>
        </Suspense>


   </div>
  )
}


 

export default App
