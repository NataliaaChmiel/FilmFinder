import { useParams } from "react-router-dom";
import LinkButton from "./LinkButton";
import { useState } from "react";

export function User() {
  const { userNumber } = useParams();
  const [firstName, setFirstName] = useState("");

  return (
    <>
      <section className="section_choose_user">
        <p className="choose_user--paragraph paragraph">Player {userNumber}</p>
        <div className="choose_user-form">
          <label>
            <p className="choose_user--paragraph paragraph">What's your name?</p>
            <input
              type="text"
              className="choose_user-input"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        <div className="choose_user_buttons">
          <LinkButton
            to={`/user/${userNumber}/movie/1`}
            className="choose_user_button--first user_button"
            disabled={firstName === ""}
          >
            Play as {firstName}
          </LinkButton>
        </div>
      </section>
    </>
  );
}
