import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// @ts-ignore
import logo from "./assets/logo_film_finder-svg.svg";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
          <div className="social_media--instagram icon-area">
            <span className="icon_single">
              <FontAwesomeIcon icon={faInstagram} size={"2xl"} />
            </span>
          </div>
          <div className="social_media--twitter icon-area">
            <span className="icon_single">
              <FontAwesomeIcon icon={faTwitter} size={"2xl"} />
            </span>
          </div>
          <div className="social_media--linkedin icon-area">
            <span className="icon_single">
              <FontAwesomeIcon icon={faLinkedin} size={"2xl"} />
            </span>
          </div>
        </div>
        <p className="social_media--quote paragraph">Find us</p>
      </section>
    </>
  );
}
