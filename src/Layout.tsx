import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// @ts-ignore
import logo from "./assets/logo_film_finder-svg.svg";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

enum SocialNetwork {
  Instagram,
  Twitter,
  Linkedin,
}

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
    <div className={`social_media--${icon} icon-area`}>
      <span className="icon_single">
        <FontAwesomeIcon icon={icon} size={"2xl"} />
      </span>
    </div>
  );
};

export function Layout(props: React.PropsWithChildren) {
  return (
    <>
      <section className="section_layout">
        <div className="section_landing_page--logo-section">
          <div className="section_landing_page--logo">
            <img src={logo} className="logo" />
          </div>
        </div>

        {props.children}

        <div className="social_media--aera">
          <SocialMediaIcon name={SocialNetwork.Instagram} />
          <SocialMediaIcon name={SocialNetwork.Twitter} />
          <SocialMediaIcon name={SocialNetwork.Linkedin} />
        </div>

        <p className="social_media--quote paragraph">Find us</p>
      </section>
    </>
  );
}
