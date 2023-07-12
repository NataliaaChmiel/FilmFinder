import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// @ts-ignore
import logo from "./assets/logo_film_finder-svg.svg";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { StyledLayout } from "./StyledLayout";
import styled from "@emotion/styled";
import { theme } from "./theme";
import { AppFont } from "./AppFont";

enum SocialNetwork {
  Instagram,
  Twitter,
  Linkedin,
}

const LayoutSection = styled(StyledLayout)({
  maxWidth: "400px",
  minHeight: "100vh",
});

const LogoPadding = styled.div({
  padding: "2em",
});

const SocialMediaFooter = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "3em",
  justifyContent: "center",
  alignItems: "center",
});

const StyledSocialMediaIcon = styled.div({
  padding: "1em",
  marginTop: "1em",
  color: theme.colors.white,
});

const StyledFooterParagraph = styled(AppFont)({
  marginTop: "1em",
  color: theme.colors.white,
});

type SocialMediaIconProps = {
  name: SocialNetwork;
};

const SocialMediaIcon = ({ name }: SocialMediaIconProps) => {
  let icon;
  switch (name) {
    case SocialNetwork.Instagram:
      icon = faInstagram;
      break;
    case SocialNetwork.Twitter:
      icon = faTwitter;
      break;
    case SocialNetwork.Linkedin:
      icon = faLinkedin;
      break;
  }

  return (
    <StyledSocialMediaIcon>
      <FontAwesomeIcon icon={icon} size={"2xl"} />
    </StyledSocialMediaIcon>
  );
};

export function Layout(props: React.PropsWithChildren) {
  return (
    <>
      <LayoutSection>
        <LogoPadding>
          <img src={logo} />
        </LogoPadding>

        {props.children}

        <SocialMediaFooter>
          <SocialMediaIcon name={SocialNetwork.Instagram} />
          <SocialMediaIcon name={SocialNetwork.Twitter} />
          <SocialMediaIcon name={SocialNetwork.Linkedin} />
        </SocialMediaFooter>

        <StyledFooterParagraph fontSize={"1.5em"}>
          Find us
        </StyledFooterParagraph>
      </LayoutSection>
    </>
  );
}
