import styled from "styled-components";
import modalbg from "./modalbg.jpg";
import { MdClose } from "react-icons/md";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import { t } from "i18next";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const ModalWrapper = styled.div`
  width: 75vw;
  height: 75vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  @media (max-width: 831px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 95vh;
    width: 70vw;
  }
  @media (max-width: 456px) {
    grid-template-rows: 1fr;
    height: 50vh;
    width: 60vw;
  }
`;
const ModalContentLeft = styled.div`
  height: 100%;
  width: 100%;
  background-position: 70% 50%;
  background: no-repeat center center cover;
  background-size: 120% 140%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  border: 5px solid black;
  @media (max-width: 456px) {
    display: none;
  }
`;
const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to left, #bdc3c72d, #2c3e5024),
    url(${modalbg});
  background-position: 70% 50%;
  background: no-repeat center center cover;
  background-size: 120% 140%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  border: 5px solid black;

  .h1Modal {
    margin-bottom: 5px;
    @media (max-width: 550px) {
      font-size: 16px;
    }
  }
  .descriptionApp {
    padding-left: 10vw;
    padding-right: 5vw;
  }
  p {
    margin-bottom: 0.5vh;
    font-size: calc(12px + 0.25vw);
    padding-left: 5vw;
    padding-right: 5vw;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
    @media (max-width: 550px) {
      font-size: 10px;
      padding-left: 5vw;
    }
  }
  h2 {
    margin-bottom: 5px;
    @media (max-width: 550px) {
      font-size: 16px;
    }
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #ffffff;
    border: none;
  }
  a,
  a:visited,
  a:hover,
  a:active {
    color: black;
  }
`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const ModalQuizzz = ({
  showModalQuizzz,
  setShowModalQuizzz,
  setModal,
  modal,
}) => {
  
 
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModalQuizzz ? 1 : 0,
    transform: showModalQuizzz ? `translateY(0%)` : `translateY(-100%)`,
  });

  

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalQuizzz(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModalQuizzz) {
        setShowModalQuizzz(false);
      }
    },
    [setShowModalQuizzz, showModalQuizzz]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModalQuizzz ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModalQuizzz={showModalQuizzz}>
              <ModalContentLeft>
                <iframe
                  title={modal.title}
                  src={modal.src}
                  width="100%"
                  height="100%"
                />
              </ModalContentLeft>

              <ModalContent>
                <h1 className="h1Modal">{modal.title}</h1>
                <p className="descriptionApp">
                  {/* {t(
                    "My first project using React.js without following an online tutorial."
                  )} */}{modal.desc}
                </p>
                {/* <p className="descriptionApp">
                  {t(
                    "Basic quiz application that helped me learn a lot of react's fundamentals."
                  )}
                </p> */}
                <h2>Dependencies || Tech</h2>
                <p>{modal.dep}</p>
                <a
                  className="link link-one"
                  href="https://ferreiratiagoquizzz.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LanguageIcon className="languageicon" />
                  Website
                </a>
                <a
                  className="link link-two"
                  href="https://github.com/FerreiraTiagoWebDev/QuizzApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon className="githubicon" />
                  Source Code
                </a>
              </ModalContent>

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModalQuizzz((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
