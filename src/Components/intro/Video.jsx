import React from "react";
import styled from "styled-components";
import sample from "./bg.mp4";

const VideoBG = styled.video`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 0;
  background-color: lightgrey;
  object-position: 25% 60%;
  @media (max-width: 1024px) {
    object-position: 40% 60%;
  }
  @media (max-width: 550px) {
    object-position: 30% 50%;
    
  }
  @media (max-width: 425px) {
    object-position: 25% 60%;
    
  }
`;

function Video() {
  return (
    <div>
      <VideoBG className="videoTag" autoPlay loop muted poster="/poster.jpg">
        <source src={sample} type="video/mp4" />
      </VideoBG>
    </div>
  );
}

export default Video;
