import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import LinkButton from "./LinkButton";

export function Play() {
  const { movieNumber: movieNumberString } = useParams();
  const movieNumber = Number(movieNumberString);
  const { userNumber } = useParams();

  const [storedMovies, setStoredMovies] = useState(() => {
    const saved = localStorage.getItem("storedMovies");
    const initialValue = JSON.parse(saved);
    return initialValue;
  });

  let currentMovie = storedMovies[movieNumber - 1];

  let nextPage;

  const hasNextMovie = movieNumber !== storedMovies.length;
  const isLastUser = parseInt(userNumber) === 2;
  if (hasNextMovie) {
    nextPage = `/user/${userNumber}/movie/${movieNumber + 1}`;
  } else if (!isLastUser) {
    nextPage = `/user/${parseInt(userNumber) + 1}`;
  } else {
    nextPage = `/result`;
  }

  return (
    <>
      <section className="section_swiping">
        <div className="section_film_info">
          <div className="section_film_info--title film_info">
            {currentMovie.title}
          </div>
          <div className="section_film_info--poster film_info">
            <img
              src={`/posters/${currentMovie.id}` + ".jpg"}
              className="film-poster"
            ></img>
          </div>
          <div className="section_film_info--description film_info">
            {currentMovie.plot}
          </div>
        </div>
        <div className="section_swipe_buttons">
          <LinkButton to={nextPage} className="swipe_button--pass swipe-button">
            <span className="icon_xmark icon">
              <FontAwesomeIcon icon={faXmark} size={"2xl"} />
            </span>
          </LinkButton>
          <LinkButton
            to={nextPage}
            className="swipe_button--catch swipe-button"
          >
            <span className="icon_check icon">
              <FontAwesomeIcon icon={faCheck} size={"2xl"} />
            </span>
          </LinkButton>
        </div>
      </section>
    </>
  );
}
