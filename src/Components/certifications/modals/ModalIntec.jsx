import styled from "styled-components";
import { MdClose } from "react-icons/md";
import intecbrussel from "../intecbrussel.jpg";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
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
  width: 70vw;
  height: 60vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: linear-gradient(-120deg, #9a6148e5, #585858e0, #631c2be0);
  background-size: 300% 300%;
  backdrop-filter: blur(5px);
  animation: gradient 10s ease infinite;
  color: #e2d8d8;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  @media (max-width: 1024px) {
    height: 80vh;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 450px) {
    grid-template-rows: 1fr;
    height: 40vh;
  }
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  @media (max-width: 450px) {
    display: none;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #e2d6d6;
  border: 5px solid black;
  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 1;
    justify-content: center;
  }
  @media (max-width: 450px) {
    height: 40vh;
  }
  .h1Modal {
    margin-bottom: 1vh;
    @media (max-width: 450px) {
    font-size: 20px;
  }
  }
  p {
    padding: 10px;
    margin-bottom: 0.5vh;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
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

export const ModalIntec = ({ showModalIntec, setShowModalIntec }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModalIntec ? 1 : 0,
    transform: showModalIntec ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalIntec(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModalIntec) {
        setShowModalIntec(false);
      }
    },
    [setShowModalIntec, showModalIntec]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModalIntec ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModalIntec={showModalIntec}>
              <ModalImg src={intecbrussel} alt="program" />
              <ModalContent>
                <h1 className="h1Modal">{t("Course Content:")}</h1>
                <p>HTML5 and CSS 3</p>
                <p>Javascript</p>
                <p>ReactJs</p>
                <p>Deployment Tools - Git</p>
                <p>Ui/Ux Design</p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModalIntec((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
