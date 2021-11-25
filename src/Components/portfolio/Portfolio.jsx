import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";

import "./portfolio.scss";
import {
  featuredPortfolio,
  htmlcssPortfolio,
  javascriptPortfolio,
  reactPortfolio,
  mernPortfolio,
} from "../../data";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GoStar, GoDeviceMobile } from "react-icons/go";
import { ModalQuizzz } from "./modals/ModalQuizzz";
import { ModalSlit } from "./modals/ModalSlit";
import { t } from "i18next";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [modal, setModal] = useState("");
  const [showModalQuizzz, setShowModalQuizzz] = useState(false);
  const [showModalSlit, setShowModalSlit] = useState(false);

  const openModalQuizzz = () => {
    setShowModalQuizzz((prev) => !prev);
  };
  const openModalSlit = () => {
    setShowModalSlit((prev) => !prev);
  };

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "reactNative":
        setData(htmlcssPortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "mern":
        setData(mernPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  const list = [
    {
      id: "featured",
      title: "Featured",
      icon: <GoStar style={{ color: "white" }} />,
    },
    {
      id: "javascript",
      title: "Javascript",
      icon: <SiJavascript style={{ color: "white" }} />,
    },
    {
      id: "reactNative",
      title: "React Native",
      icon: <GoDeviceMobile style={{ color: "white" }} />,
    },
    {
      id: "react",
      title: "React",
      icon: <FaReact style={{ color: "white" }} />,
    },
    {
      id: "mern",
      title: "MERN / FullStack",
      icon: <SiMongodb style={{ color: "white" }} />,
    },
  ];

  const arr2 = [openModalQuizzz, openModalSlit, "openModal3"];

  function openModal() {
    return openModalQuizzz();
  }

  const translateUl = () => {};

  return (
    <div className="portfolio" id="portfolio">
      <ModalQuizzz
        modal={modal}
        setModal={setModal}
        showModalQuizzz={showModalQuizzz}
        setShowModalQuizzz={setShowModalQuizzz}
      />

      <h1 className="h1Portfolio"> {t("Portfolio")}</h1>
      <ul onMouseEnter={translateUl}>
        <div className="arrowAndInfo">
          <AiOutlineArrowLeft className="ulArrowLeft" />
        </div>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            icon={item.icon}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="containerPortfolio">
        {data.map((d, i) => (
          <div className="item">
            <img
              className="portfolioImg"
              src={d.img}
              alt=""
              onMouseEnter={() => setModal(d)}
              onClick={openModal}
            />
            <div className="itemTitle">{d.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
