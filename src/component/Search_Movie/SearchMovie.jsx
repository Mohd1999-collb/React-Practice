import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovie } from '../redux/action/SearchAction'

const SearchMovie = () => {
  const movie = useSelector(state => state.movie)
  const dispatch = useDispatch();

  const [search, setSerach] = useState("");

  function search_Movie() {
    dispatch(searchMovie(search));
    setSerach("");
  }

  let filterAarr = movie.movies.filter((item) => {
    return movie.searchTerm === item.title;
  })


  return (
    <div>
      <input type="text" value={search} placeholder='Enter the movie name' onChange={(e) => setSerach(e.target.value)} />
      <br />
      <br />
      <button onClick={search_Movie}>Click me</button>
      <ul>
        {
          filterAarr.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SearchMovie