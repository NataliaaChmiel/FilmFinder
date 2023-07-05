import styled from "@emotion/styled";
// import { theme } from "./theme";
import { StyledSection } from "./StyledSection";
import { AppFont } from "./AppFont";

const AboutUsSection = styled(StyledSection)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Quote = styled(AppFont) ({
  padding: "1em",
  textAlign: "justify",
})

export function AboutUs() {
  return (
    <>
      <AboutUsSection>
        <AppFont fontSize={"1.5em"}>About us</AppFont>
        <Quote fontSize={"1em"}>
          Welcome to our app! We're a team of movie lovers who believe that
          finding your next favorite film should be just as fun and exciting as
          finding a match on a dating app. That's why we created this platform,
          where you can swipe through a wide variety of movies and discover your
          next cinematic gem. Our app is powered by modern web technologies,
          including ES6, React, Sass, and Vite, to ensure a fast and seamless
          user experience. We're passionate about movies and technology, and
          we've combined these two passions to create something truly unique and
          enjoyable. Whether you're looking for a new blockbuster hit, an indie
          classic, or a hidden gem, our app has something for everyone. So sit
          back, relax, and start swiping through our collection of amazing
          movies. Who knows? You might just find your next favorite film!
        </Quote>
      </AboutUsSection>
    </>
  );
}
