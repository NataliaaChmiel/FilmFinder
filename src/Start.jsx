import { Link, useNavigate } from "react-router-dom";
import LinkButton from "./LinkButton";
// @ts-ignore
import movies from "./assets/movies.json";

export function Start() {
  const navigate = useNavigate();

  const clickHandler = () => {
    const selectedMovies = movies.sort(() => 0.5 - Math.random()).splice(0, 10);
    const json = JSON.stringify(selectedMovies);
    localStorage.setItem("storedMovies", json);
    navigate("/user/1");
  };

  return (
    <>
      <section className="section_start_game">
        <div className="section_start_game--quote">
          <p className="start_game--quote paragraph">
            Let's catch some movie matches!
          </p>
        </div>
        <div className="start_buttons_container">
          <button onClick={clickHandler} className="start_game_button">
            Let's go
          </button>
        </div>
      </section>
    </>
  );
}
