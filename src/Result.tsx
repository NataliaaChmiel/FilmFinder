import { AppFont } from "./AppFont";
import { StyledLinkButton } from "./LinkButton";
import { MovieDetails } from "./MovieDetails";
import { StyledSection } from "./StyledSection";
import { getLocalStorageItemAndParse } from "./getLocalStorageItemAndParse";
import styled from "@emotion/styled";

const ResultSection = styled(StyledSection)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const ResultMatchedList = styled.div({
  justifyContent: "center",
});

const ListItemResult = styled.li({
  display: "flex",
  listStyleType: "none",
  width: "200px",
  height: "250px",
  padding: "1em",
  justifyContent: "center",
});

type MatchedMovieListItemProps = {
  movie: MovieDetails;
};

const MatchedMovieListItem = ({ movie }: MatchedMovieListItemProps) => {
  return (
    <ListItemResult>
      <img src={`/posters/${movie.id}.jpg`}></img>
    </ListItemResult>
  );
};

export function Result() {
  const selectedMoviesUser1: number[] =
    getLocalStorageItemAndParse(`selectedMoviesUser1`);
  const selectedMoviesUser2: number[] =
    getLocalStorageItemAndParse(`selectedMoviesUser2`);

  const matches = selectedMoviesUser1.filter((value) =>
    selectedMoviesUser2.includes(value)
  );

  const storedMovies: MovieDetails[] =
    getLocalStorageItemAndParse(`storedMovies`);
  const results = matches.map((num) => storedMovies[num - 1]);

  return (
    <>
      <ResultSection>
        <AppFont fontSize={"1.5em"}>Caught matches</AppFont>
        <ResultMatchedList>
          {results.map((movie) => (
            <MatchedMovieListItem key={movie.id} movie={movie} />
          ))}
        </ResultMatchedList>
        <AppFont fontSize={"1.5em"}>You got {results.length} matches!</AppFont>
        <StyledLinkButton to="/start">Try again!</StyledLinkButton>
      </ResultSection>
    </>
  );
}
