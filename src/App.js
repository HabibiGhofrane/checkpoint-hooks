import './App.css';
import React, { useState } from 'react'
import {MovieList } from './Components/MovieList';
import { movieData } from './Components/Data';
import AddMovie from './Components/AddMovie';
import {Navbar, Nav, Container} from 'react-bootstrap'
import FilterByName from './Components/FilterByName';
import RatingStarFilter from './Rating'
import Description from './Components/Description';
import {Route, Routes } from 'react-router-dom';






function App() {
  const [movies, setMovies] = useState(movieData);
  const [inputSearch, setInputSearch] = useState("");
  const [starRate, setStarRate] = useState(0);

    const add = (newMovie) => {
      setMovies ([...movies, newMovie])
    }

  return (
    <div className="App">
      
      
      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">MOVIE APP</Navbar.Brand>
    <Nav className="me-auto">
    <AddMovie className= "addBtn" add= {add}/>
    <FilterByName  inputSearch={inputSearch} setInputSearch={setInputSearch}/>
              <div className="StarsFilter">
              <RatingStarFilter isMovieRating={false} starRate={starRate} setStarRate={setStarRate} />
              </div>
    </Nav>
    </Container>
  </Navbar>

          <Routes>
          <Route exact path = "/" element ={<MovieList className="MovieList" movies={movies} inputSearch={inputSearch} starRate={starRate}/>}/>
            
            
          
         
          <Route path = "/description/:id" element ={<Description  movies={movies} />} />
          
          
          </Routes>
          
    </div>
  );
}

export default App;