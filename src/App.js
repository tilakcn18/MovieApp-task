import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/home';
import Likedmovies from './Components/likedmovies';
import NavigationBar from './Components/navbar';
import Footer from './Components/footer';
import Moviedetails from './Components/moviedetails';
import TopRatedMovies from './Components/toprated';

const App = () => {
  return (
    <Router>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={ <div> < Homepage /> <Routes><Route path="/" element={<Likedmovies />} /></Routes><TopRatedMovies/></div>} />
      <Route path="/movie/:id" element={<Moviedetails />} />
      {/* <Route path="/liked" element={} /> */}
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
