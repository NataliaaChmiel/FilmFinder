import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { To, useNavigate, useParams } from "react-router-dom";
import { getLocalStorageItemAndParse } from "./getLocalStorageItemAndParse";
import { MovieDetails } from "./MovieDetails";
import styled from "@emotion/styled";
import { theme } from "./theme";


type CurrentMovieDetailsProps = {
  details: MovieDetails;
};

const CurrentMovieDetails = ({ details }: CurrentMovieDetailsProps) => {
  return (
    <>
      <div className="section_film_info--title film_info">{details.title}</div>
      <div className="section_film_info--poster film_info">
        <img src={`/posters/${details.id}.jpg`} className="film-poster"></img>
      </div>
      <div className="section_film_info--description film_info">
        {details.plot}
      </div>
    </>
  );
};

type SwipeButtonsProps = {
  nextPage: string;
  clickHandler: () => void;
};

const SwippingButton = styled.button({
  display: "flex",
  marginBottom: "2em",
  borderRadius: "50%",
  borderColor: theme.colors.blueMain,
  width: "4em",
  height: "4em",
  padding: "1em",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.colors.blueMain,
  fontSize: "1em",
  fontFamily: theme.fonts.fontMontserrat,
  color: theme.colors.white,
});

type LinkButtonProps = {
  to: To;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

 function SwippingLinkButton({ to, children, ...rest }: LinkButtonProps) {
  const navigate = useNavigate();

  return (
    <SwippingButton onClick={() => navigate(to)} {...rest}>
      {children}
    </SwippingButton>
  );
}
//do naprawy
const SwipeButtons = ({ nextPage, clickHandler }: SwipeButtonsProps) => {
  return (
    <>
      <SwippingLinkButton to={nextPage}>
        <span className="icon_xmark icon">
          <FontAwesomeIcon icon={faXmark} size={"2xl"} />
        </span>
      </SwippingLinkButton>
      <SwippingButton
        onClick={clickHandler}>
        <span className="icon_check icon">
          <FontAwesomeIcon icon={faCheck} size={"2xl"} />
        </span>
      </SwippingButton>
    </>
  );
};

export function Play() {
  const { movieNumber: movieNumberString } = useParams();
  const movieNumber = Number(movieNumberString);
  const { userNumber } = useParams();
  const parsedUserNumber = parseInt(userNumber || "");

  const [storedMovies] = useState<MovieDetails[]>(() => {
    const storedMovies: MovieDetails[] =
      getLocalStorageItemAndParse(`storedMovies`);
    return storedMovies;
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
          <CurrentMovieDetails details={currentMovie} />
        </div>
        <div className="section_swipe_buttons">
          <SwipeButtons nextPage={nextPage} clickHandler={clickHandler} />
        </div>
      </section>
    </>
  );
}
