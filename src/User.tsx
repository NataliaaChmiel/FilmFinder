import { useParams } from "react-router-dom";
import { StyledLinkButton } from "./LinkButton";
import { useState } from "react";
import { StyledSection } from "./StyledSection";
import styled from "@emotion/styled";
import { AppFont } from "./AppFont";
import { theme } from "./theme";

const UserParagraph = styled(AppFont)({
  display: "flex",
  justifyContent: "center",
  padding: "1em",
  marginBottom: "1em",
});

const UserForm = styled.div({
  display: "flex",
  justifyContent: "center",
});

const UserNameParagraph = styled(AppFont)({
  display: "flex",
  padding: "1em",
  justifyContent: "center",
  marginBottom: "1em",
});

const UserInput = styled.input({
  marginBottom: "3em",
  border: "0",
  textAlign: "center",
  justifyContent: "center",
  color: theme.colors.black,
  fontFamily: theme.fonts.fontPlayfair,
  padding: "1em",
  fontSize: "1.2em",
});

const UserLabel = styled.label({
  display: "flex",
  flexDirection: "column",
});

export function User() {
  const { userNumber } = useParams();
  const [firstName, setFirstName] = useState("");

  return (
    <>
      <StyledSection>
        <UserParagraph fontSize={"1.5em"}>Player {userNumber}</UserParagraph>
        <UserForm>
          <UserLabel>
            <UserNameParagraph fontSize={"1.5em"}>
              What's your name?
            </UserNameParagraph>
            <UserInput
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </UserLabel>
        </UserForm>
        <StyledLinkButton
          to={`/user/${userNumber}/movie/1`}
          disabled={firstName === ""}>
          Play as {firstName}
        </StyledLinkButton>
      </StyledSection>
    </>
  );
}
