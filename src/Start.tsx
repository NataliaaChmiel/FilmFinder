import { useNavigate } from "react-router-dom";
// @ts-ignore
import picture from "./assets/pexels-lucas-pezeta-2398354.jpg";
// @ts-ignore
import movies from "./assets/movies.json";
import { RoundedButton } from "./LinkButton";
import { StyledSection } from "./StyledSection";
import { StyledPicture } from "./StyledPicture";
import { AppFont } from "./AppFont";
import styled from "@emotion/styled";


const StartParagraph = styled(AppFont)({
  display: "flex",
  justifyContent: "center",
})

export function Start() {
  const navigate = useNavigate();

  const clickHandler = () => {
    const selectedMovies = movies.sort(() => 0.5 - Math.random()).splice(0, 10);
    const json = JSON.stringify(selectedMovies);
    localStorage.setItem("storedMovies", json);
    localStorage.setItem("selectedMoviesUser1", JSON.stringify([]));
    localStorage.setItem("selectedMoviesUser2", JSON.stringify([]));
    navigate("/user/1");
  };

  return (
    <>
      <StyledSection>
        <StyledPicture src={picture} />
        <StartParagraph fontSize={"1.5em"}>
            <p></p>Let's catch some movie matches!
        </StartParagraph>
          <RoundedButton onClick={clickHandler}>Let's go!</RoundedButton>
      </StyledSection>
    </>
  );
}
