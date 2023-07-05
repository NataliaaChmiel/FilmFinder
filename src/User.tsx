import { useParams } from "react-router-dom";
import { StyledLinkButton } from "./LinkButton";
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
          <StyledLinkButton
            to={`/user/${userNumber}/movie/1`}
            disabled={firstName === ""}>
            Play as {firstName}
          </StyledLinkButton>
        </div>
      </section>
    </>
  );
}
