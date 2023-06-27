import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { To, useNavigate, useParams } from "react-router-dom";
import LinkButton from "./LinkButton";

export function Play() {
  const { movieNumber: movieNumberString } = useParams();
  const movieNumber = Number(movieNumberString);
  const { userNumber} = useParams();
  const parsedUserNumber = parseInt(userNumber || "");

  const [storedMovies] = useState(() => {
    const saved = localStorage.getItem("storedMovies") ;
    const initialValue = JSON.parse(saved || "[]");
    return initialValue;
  });

  const currentMovie = storedMovies[movieNumber - 1];

  let nextPage: To;

  const hasNextMovie = movieNumber !== storedMovies.length;
  const isLastUser = parsedUserNumber === 2;
  if (hasNextMovie) {
    nextPage = `/user/${parsedUserNumber}/movie/${movieNumber + 1}`;
  } else if (!isLastUser) {
    nextPage = `/user/${parsedUserNumber + 1}`;
  } else {
    nextPage = `/result`;
  }

  const navigate = useNavigate();
  const clickHandler = () => {
    console.log(`${userNumber} polubil film ${movieNumber}`);

    const saved = localStorage.getItem(`selectedMoviesUser${userNumber}`);
    const selectedMovies = JSON.parse(saved || "[]");
    selectedMovies.push(movieNumber);
    const json = JSON.stringify(selectedMovies);
    localStorage.setItem(`selectedMoviesUser${userNumber}`, json);
    navigate(nextPage);
  };

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
          <button
            onClick={clickHandler}
            className="swipe_button--catch swipe-button"
          >
            <span className="icon_check icon">
              <FontAwesomeIcon icon={faCheck} size={"2xl"} />
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
