import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

export function Start() {
  return (
    <>
      <section className="section_choose_user">
        <div className="section_choose_user--quote">
          <p className="choose_user--quote paragraph">
            Let's catch some movie matches!
          </p>
        </div>
        {/* <div className="section_choose_user--photo">Zdjęcie</div> */}
        <div className="user_buttons_container">
          <LinkButton to="/play" className="user_button--first user_button">Let's go!</LinkButton>
        </div>
      </section>
    </>
  );
}
