import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function Play() {
  return (
    <>
      <section className="section_swiping">
        <div className="section_film_info">
          <div className="section_film_info--title film_info">Tytuł filmu</div>
          <div className="section_film_info--poster film_info">
            Plakat filmu
          </div>
          <div className="section_film_info--description film_info">
            Opis filmu
          </div>
        </div>
        <div className="section_swipe_buttons">
          <button className="swipe_button--pass swipe-button">
            <span className="icon_xmark icon">
              <FontAwesomeIcon icon={faXmark} size={"2xl"} />
            </span>
          </button>
          <button className="swipe_button--catch swipe-button">
            <span className="icon_check icon">
              <FontAwesomeIcon icon={faCheck} size={"2xl"} />
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
