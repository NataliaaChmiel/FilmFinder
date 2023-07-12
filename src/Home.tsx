import styled from "@emotion/styled";
import { StyledLinkButton } from "./LinkButton";
import { StyledSection } from "./StyledSection";
// @ts-ignore
import picture from "./assets/tech-daily-PGuCnUzsRSM-unsplash.jpg";
import { StyledPicture } from "./StyledPicture";
import { AppFont } from "./AppFont";

const CenteredAndFlex = styled.div({
  display: "flex",
  justifyContent: "center"
})

export function Home() {
  return (
    <>
      <StyledSection>
        <StyledPicture src={picture} />
        <CenteredAndFlex>
        <AppFont fontSize={"1.5em"}>
          Welcome to the world of film!
        </AppFont>
        </CenteredAndFlex>
        <div>
          <StyledLinkButton to="/start">Let's go!</StyledLinkButton>
          <StyledLinkButton to="/aboutus">About us</StyledLinkButton>
        </div>
      </StyledSection>
    </>
  );
}
