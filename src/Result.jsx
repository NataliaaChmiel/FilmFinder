import LinkButton from "./LinkButton";

export function Result() {
  // 1. porównać obie tablice
  // - wziąć z ls
  // - rozkodować
  // - wspólne numery filmów zamienic na filmy
  // - wczyttać z ls wylosowane filmy
  // - rozkodować
  // 2. zrobić trzecią ze wpólnymi filmami i ją wyświetlić w result
  const savedFilms1 = localStorage.getItem(`selectedMoviesUser1`);
  const savedFilms2 = localStorage.getItem(`selectedMoviesUser2`);
  const selectedMoviesUser1 = JSON.parse(savedFilms1);
  const selectedMoviesUser2 = JSON.parse(savedFilms2);

  const matches = selectedMoviesUser1.filter((value) =>
    selectedMoviesUser2.includes(value)
  );
  const saved = localStorage.getItem("storedMovies");
  const storedMovies = JSON.parse(saved);
  const results = matches.map((num) => storedMovies[num - 1]);

  return (
    <>
      <section className="section_final_matches">
        <div className="final_matches--quote">
          <p className="final_matches--paragraph paragraph">Caught matches</p>
        </div>
        <div className="section_catched_matches--list">
          {results.map((movie) => (
            <li key={movie.id}>
              {" "}
              <img
                src={`/posters/${movie.id}` + ".jpg"}
                className="film-poster"
              ></img>
            </li>
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
