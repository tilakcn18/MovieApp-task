import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../CSS/home.css";

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from the api and update the state
    fetch("https://wookie.codesubmit.io/movies", {
      headers: {
        Authorization: "Bearer Wookie2019",
      },
    })
      .then((response) => response.json())
      .then((data) => setMovies(data.movies))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
        <h3 className="ms-4 mt-3">All Movies</h3>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 p-3">
      {movies.map((movie) => (
        <Col key={movie.id}>
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card
              className={classNames("bg-dark", "text-light", {
                "card-hover": true,
              })}
              style={{ height: "100%" }}
            >
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
              </Card.Body>
              
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default Homepage;
