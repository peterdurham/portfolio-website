import React from "react"
import styled from "styled-components"

// import BackgroundVideo from "../video/intro-bg-video-compressed.mp4"
import BackgroundPoster from "../images/background-poster.jpg"

const IntroSection = props => {
  return (
    <div id="intro">
      <IntroStyles>
        <div id="background-video-poster"></div>

        {/* <video
          src={BackgroundVideo}
          type="video/mp4"
          poster={BackgroundPoster}
          muted
          autoPlay
          loop
        /> */}
        <img src={BackgroundPoster} alt="planet background" />
        <div className="intro-container">
          <div className="text-line">
            <span className="text name-1">Hello,</span>
            <span className="cover name-cover-1"></span>
          </div>
          <div className="text-line">
            <span className="text name-2">I'm Peter Durham.</span>
            <span className="cover name-cover-2"></span>
          </div>

          <div className="text-line">
            <span className="bold text description-1">Full-stack</span>
            <span className="cover description-cover-1"></span>
          </div>
          <div className="text-line">
            <span className="text description-2">Web Developer</span>
            <span className="cover description-cover-2"></span>
          </div>
        </div>
      </IntroStyles>
    </div>
  )
}

const IntroStyles = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  overflow: hidden;

  #background-video-poster {
    background: black;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  img {
    z-index: 5;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50px;
    left: 0;
    object-fit: cover;
    @media (max-width: 700px) {
      height: 80%;
      top: calc(50px + 10%);
    }
  }

  .intro-container {
    z-index: 10;
    position: absolute;
    top: 32.5%;
    left: 67.5%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 24px;
    text-align: center;
    width: 300px;
    @media (max-width: 700px) {
      left: 62.5%;
      width: 220px;
      /* top: 37.5%; */
    }
  }
  .text-line {
    position: relative;
    width: 100%;
  }
  .text {
    position: absolute;
    left: 0;
    transform: translateY(100%);
    width: 100%;
  }
  .cover {
    position: absolute;
    background: #000;
    width: 100%;
    left: 0;
  }
  .name-1 {
    top: 0;
    animation: slideUp 0.5s both 1.4s;
    z-index: 11;
    font-size: 36px;
    @media (max-width: 700px) {
      font-size: 24px;
    }
  }

  .name-cover-1 {
    height: 44px;
    top: 42px;
    z-index: 12;
    @media (max-width: 700px) {
      top: 30px;
    }
  }
  .name-2 {
    top: 42px;
    animation: slideUp 0.5s both 1.6s;
    z-index: 13;
    font-size: 36px;
    @media (max-width: 700px) {
      font-size: 24px;
      top: 30px;
    }
  }
  .name-cover-2 {
    height: 60px;
    top: 88px;
    z-index: 14;
    @media (max-width: 700px) {
      top: 60px;
    }
  }

  .description-1 {
    top: 112px;
    animation: slideUp 0.5s both 2.2s;
    z-index: 15;
    font-size: 28px;
    @media (max-width: 700px) {
      font-size: 16px;
      top: 76px;
    }
  }
  .description-cover-1 {
    height: 30px;
    top: 145px;
    z-index: 16;
    @media (max-width: 700px) {
      top: 93px;
    }
  }
  .description-2 {
    top: 145px;
    animation: slideUp 0.5s both 2.4s;
    z-index: 17;
    font-size: 28px;
    @media (max-width: 700px) {
      font-size: 16px;
      top: 97px;
    }
  }
  .description-cover-2 {
    height: 30px;
    top: 178px;
    z-index: 18;
    @media (max-width: 700px) {
      top: 113px;
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`

export default IntroSection
