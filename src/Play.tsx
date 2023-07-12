import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { To, useNavigate, useParams } from "react-router-dom";
import { getLocalStorageItemAndParse } from "./getLocalStorageItemAndParse";
import { MovieDetails } from "./MovieDetails";
import styled from "@emotion/styled";
import { theme } from "./theme";
import { StyledSection } from "./StyledSection";

const SwipingSection = styled(StyledSection)({
  justifyContent: "center",
  display: "block",
});

const FilmInfo = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "3em",
  fontSize: "1em",
  fontFamily: theme.fonts.fontMontserrat,
  textAlign: "center",
});

const SwipeButtonsContainer = styled.div({
  display: "flex",
  gap: "8em",
  justifyContent: "center",
  paddingBottom: "5em",
});

type CurrentMovieDetailsProps = {
  details: MovieDetails;
};

const CurrentMovieDetails = ({ details }: CurrentMovieDetailsProps) => {
  return (
    <>
      <FilmInfo>{details.title}</FilmInfo>
      <img src={`/posters/${details.id}.jpg`}></img>
      <FilmInfo>{details.plot}</FilmInfo>
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
          <FontAwesomeIcon icon={faXmark} size={"2xl"} />
      </SwippingLinkButton>
      <SwippingButton onClick={clickHandler}>
          <FontAwesomeIcon icon={faCheck} size={"2xl"} />
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
    console.log(`${userNumber} liked movie ${movieNumber}`);

    const saved = localStorage.getItem(`selectedMoviesUser${userNumber}`);
    const selectedMovies = JSON.parse(saved || "[]");
    selectedMovies.push(movieNumber);
    const json = JSON.stringify(selectedMovies);
    localStorage.setItem(`selectedMoviesUser${userNumber}`, json);
    navigate(nextPage);
  };

  return (
    <>
      <SwipingSection>
        <FilmInfo>
          <CurrentMovieDetails details={currentMovie} />
        </FilmInfo>
        <SwipeButtonsContainer>
          <SwipeButtons nextPage={nextPage} clickHandler={clickHandler} />
        </SwipeButtonsContainer>
      </SwipingSection>
    </>
  );
}
