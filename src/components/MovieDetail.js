import React from "react";
import { Badge, Button, Modal } from "react-bootstrap";
import { ImStarFull } from "react-icons/im";
import { IconContext } from "react-icons";
import YouTube from "@u-wave/react-youtube"

const MovieDetail = (props) => {
  let urlImage = `https://image.tmdb.org/t/p/w500/${props.path}`;
  return (
    <div className="movie-card-container">
      <div className="image-container">
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${urlImage})` }}
        />
      </div>
      <div className="movie-info">
        <h2>Movie</h2>
        <div>
          <h1>{props.title}</h1>
          <small>Date: {props.date}</small>
        </div>
        <IconContext.Provider
          value={{ color: "red", size: "1.5em", className: "react-icons" }}
        >
          <div>
            <ImStarFull />
            <span className="m-2">{props.vote} </span>
          </div>
        </IconContext.Provider>
        <p>{props.overview}</p>
        <div>
          <Button variant="outline-primary" onClick={props.handleShow}>▶ Play Trailer</Button>
          <Modal
                    show={props.show}
                    onHide={props.handleClose}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <YouTube
                        video={props.youtubeKey}
                        autoplay
                        width="100%"
                        height="400px"
                      />
                    </Modal.Body>
                  </Modal>
          <Button variant="outline-primary" onClick={props.clicked}>
            View Reviews
          </Button>
        </div>

        <div>
          {props.genres &&
            props.genres.map((g) => (
              <Badge variant="info" className="mx-1">
                {g.name}
              </Badge>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
