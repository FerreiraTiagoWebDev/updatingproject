import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./about.scss";
import { PastModal } from "./modals/PastModal";
import { PresentModal } from "./modals/PresentModal";

function About() {
  const [showModalPast, setShowModalPast] = useState(false);
  const [showModalPresent, setShowModalPresent] = useState(false);

  const openModalPast = () => {
    setShowModalPast((prev) => !prev);
  };
  const openModalPresent = () => {
    setShowModalPresent((prev) => !prev);
  };

  const { t } = useTranslation();

  return (
    <div className="about" id="about">
      <PastModal
        showModalPast={showModalPast}
        setShowModalPast={setShowModalPast}
      />
      <PresentModal
        showModalPresent={showModalPresent}
        setShowModalPresent={setShowModalPresent}
      />

      <div className="leftContainer"></div>
      <div className="rightContainer">
        <div className="topDescription">
          <div className="topDescriptionBox">
            <h4>{t("Born")}</h4>
            
          </div>
          <div className="midDescriptionBox">
            <p>{t("Coding")}</p>
            <p>{t("loving")}</p>
          </div>
          <div className="botDescriptionBox">
            <p>
            {t("Here you can read about my")} {" "}
              <span className="pastLink" onClick={openModalPast}>
              {t("Past")}
              </span>{" "}
              {t("and my")}  <span className="presentLink" onClick={openModalPresent}>{t("Present")}</span>{" "}
              {t("")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
