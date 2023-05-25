import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Moviedetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({}); // Initialize with an empty object

  useEffect(() => {
    // Fetch movie details from the API and update the state
    fetch(`https://wookie.codesubmit.io/movies/${id}`, {
      headers: {
        'Authorization': 'Bearer Wookie2019'
      }
    })
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [id]);

  const handleAddToLikedMovies = () => {
    // Get the liked movies from local storage
    const likedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];

    // Check if the movie is already in the liked movies list
    const isMovieLiked = likedMovies.some(likedMovie => likedMovie.id === movie.id);

    if (!isMovieLiked) {
      // Add the movie to the liked movies list
      likedMovies.push(movie);

      // Update the liked movies in local storage
      localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
     
    }

    //Redirect to the Liked Movies page
    navigate('/');
  };

  return (
    <Card className='text-light p-4 bg-dark mt-4 ms-4 me-4'>
      <Row>
        <Col md={3}>
          <Card.Img src={movie.poster} />
        </Col>
        <Col md={4}>
          <Card.Body>
            <Card.Title className='fs-2'>{movie.title}</Card.Title>
            <Card.Text>
              <strong>Genres: </strong>
              {movie.genres && movie.genres.join(', ')}
            </Card.Text>
            <Card.Text>
              <strong>Description: </strong>
              {movie.description}
            </Card.Text>
            <Button variant="outline-warning" onClick={handleAddToLikedMovies}>
              Add to Liked Movies
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Moviedetails;
