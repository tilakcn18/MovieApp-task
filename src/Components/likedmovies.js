import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Likedmovies = () => {
  const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];

  const handleRemoveFromLikedMovies = (movieId) => {
    // Filtering the movie with the specified id from the liked movies list
    const updatedLikedMovies = likedMovies.filter(
      (movie) => movie.id !== movieId
    );

    // Update the liked movies in local storage
    localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));

    window.location.reload(); //used to refresh the page to see the upadted list
  };

  return (
    <div>
      <h3 className="ms-4">Liked Movies</h3>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 p-4">
        {likedMovies.map((movie) => (
          <Col key={movie.id}>
            <Card className="bg-dark text-light" style={{ height: "100%" }}>
              <Card.Img
                variant="top"
                src={movie.poster}
                style={{
                  borderRadius: "5px",
                  objectFit: "cover",
                  height: "380px",
                }}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>IMDb Rating: {movie.imdb_rating}</Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => handleRemoveFromLikedMovies(movie.id)}
                >
                  Remove from Liked
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Likedmovies;
