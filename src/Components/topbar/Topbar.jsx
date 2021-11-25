import "./topbar.scss";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { useState } from "react";

import ReactCountryFlag from "react-country-flag";
import i18next, { t } from "i18next";
import { MdArrowDropDown, MdTranslate } from "react-icons/md";


export default function Topbar({ menuOpen, setMenuOpen }) {
  const [drop, setDrop] = useState("notShow");

  const handleCloseDropdown = () => {
    setDrop("notShow");
  };

  function handleDrop() {
    if (drop === "notShow") {
      setDrop("show");
    } else {
      setDrop("notShow");
    }
  }

  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "fr",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "pt",
      name: "Português",
      country_code: "pt",
    },
  ];

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div
            className="languageWrapper"
            onMouseEnter={handleDrop}
            onMouseLeave={handleCloseDropdown}
          >
            <div className="dropdown">
              <button className="dropbtn">
                <MdTranslate className="languageIcon" />
                <MdArrowDropDown />
              </button>
              <ul className={`dropdown-content ${drop}`} id="myDropdown">
                <li>
                  <span className="dropdown-item-text">{t("language")}</span>
                </li>
                {languages.map(({ code, name, country_code }) => (
                  <li key={country_code} className="dropdown-li">
                    <button
                      className="dropdown-item"
                      onClick={() => i18next.changeLanguage(code)}
                    >
                      <ReactCountryFlag
                        countryCode={`${country_code}`}
                        svg
                        className="reactCountryFlag"
                        disabled={code}
                      />
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="leftNav">
            <ul className="leftNavUl">
              <li className="topbarLi" onClick={() => setMenuOpen(false)}>
                <a href="#about" className="topBarA" id="topbarLiA">
                {t("About")} 
                </a>
              </li>
              <li
                className={"portfolioLi " + (menuOpen ? "active" : "inactive")}
                onClick={() => setMenuOpen(false)}
              >
                <a href="#portfolio" className="topBarA" id="topbarLiA">
                {t("Portfolio")} 
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="center">
          <a href="#intro" className="logo">
            <span onClick={() => setMenuOpen(false)}>
              FTWebDev
              <EmojiObjectsIcon className="icon" />
            </span>
          </a>
        </div>

        <div className="right">
          <div className="rightNav">
            <ul className="rightNavUl">
              <li
                className={
                  "certificationsLi " + (menuOpen ? "active" : "inactive")
                }
                onClick={() => setMenuOpen(false)}
              >
                <a href="#works" className="topBarA" id="topbarLiA">
                {t("Certifications")}  
                </a>
              </li>
              <li
                className={"contactLi " + (menuOpen ? "active" : "inactive")}
                onClick={() => setMenuOpen(false)}
              >
                <a href="#contact" className="topBarA" id="topbarLiA">
                {t("Contact")}    
                </a>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
