import LinkButton from "./LinkButton";

export function Result() {
  return (
    <>
      <section className="section_final_matches">
        <div className="final_matches--quote">
          <p className="final_matches--paragraph paragraph">Caught matches</p>
        </div>
        <div className="section_catched_matches--list">
          <ul className="catched_matches--list">
            <li className="single_match">
              <div className="single_match--poster">Poster</div>
              <div className="single_match--title">Title</div>
            </li>
          </ul>
        </div>
        <div className="section_catched_matches--percentage">
          <p className="matches_percentage--paragraph paragraph">
            You got [x] matches!
          </p>
        </div>
        <div className="section_try_again_button">
          <LinkButton to="/start" className="try_again--button basic_button">
            Let's go!
          </LinkButton>
        </div>
      </section>
    </>
  );
}
