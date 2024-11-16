import {useEffect, useState} from 'react'
import './App.css'
import  searchIcon from './search.svg'
import MovieCard from './MovieCard'
const API_URL = 'http://www.omdbapi.com/?apikey=1f53b3ab'



function App() {

  const [movies, setMovies] = useState([])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }


  return (
    <div className='app'>
      
      <h1>FilmPire</h1>
      
      <div className="search">
        <input placeholder='Search a Movie' value='Superman' onChange={() => {}} />
        <img src={searchIcon} alt='search' onClick={() => {}}/>
      </div>

      {
          movies?.length > 0 ?  (
         <div className='container'>
            {
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        
        ):(
        
        <div className='empty'><h2>No movie found</h2></div>

        )}

    

    </div>
  )
}



export default App
