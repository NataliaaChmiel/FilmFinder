import { useParams } from "react-router-dom";
import LinkButton from "./LinkButton";

export function User() {
  const { userNumber } = useParams();

  return (
    <>
      <section className="section_choose_user">
        <p className="choose_user--paragraph paragraph">Player {userNumber}</p>
        <div className="choose_user_buttons">
          <LinkButton
            to={`/user/${userNumber}/movie/1`}
            className="choose_user_button--first user_button"
          >
            Play
          </LinkButton>
        </div>
      </section>
    </>
  );
}
