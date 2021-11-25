import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Video from "./Video";
import { useTranslation } from 'react-i18next';

export default function Intro({ menuOpen, setMenuOpen }) {
  const textRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "React.js",
        "Javascript",
        "CSS - SASS",
        "MongoDb",
        "Node.js",
        "Express",
        "MySQL",
        "React Native",
        "Git",
        "Docker",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <Video />
      <a className="arrowLinkintro" href="#about" onClick={() => setMenuOpen(false)}>
            <img src="assets/whitearrow.png" alt="" />
          </a>
      <div className="right">
        <div className="wrapper">
          <h2>{t('Hello')}</h2>
          <h1>Tiago Ferreira</h1>
          <h3>{t('Web Developer')}</h3>
          <h3>
          {t('Technologies')} <br /> <span ref={textRef}></span>
          </h3>
          
        </div>
      </div>
    </div>
  );
}
