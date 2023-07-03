import LinkButton from "./LinkButton";
import { MovieDetails } from "./MovieDetails";
import { getLocalStorageItemAndParse } from "./getLocalStorageItemAndParse";

type MatchedMovieListItemProps = {
  movie: MovieDetails;
};

const MatchedMovieListItem = ({ movie }: MatchedMovieListItemProps) => {
  return (
    <li>
      <img src={`/posters/${movie.id}.jpg`} className="film-poster"></img>
    </li>
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
      <section className="section_final_matches">
        <div className="final_matches--quote">
          <p className="final_matches--paragraph paragraph">Caught matches</p>
        </div>
        <div className="section_catched_matches--list">
          {results.map((movie) => (
            <MatchedMovieListItem key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="section_catched_matches--percentage">
          <p className="matches_percentage--paragraph paragraph">
            You got {results.length} matches!
          </p>
        </div>
        <div className="section_try_again_button">
          <LinkButton to="/start" className="try_again--button basic_button">
            Try again!
          </LinkButton>
        </div>
      </section>
    </>
  );
}
