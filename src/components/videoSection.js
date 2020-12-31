import React from "react"
import styled from "styled-components"

import videos from "../data/videos"

const VideoSection = () => {
  return (
    <VideoStyles id="videos">
      <h2 className="section-header">Videos</h2>
      <div className="posts">
        {videos.map((video, index) => {
          if (index < 6) {
            return (
              <div className="card" key={video.url}>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <img src={video.image} alt="video thumbnail" />
                  <div className="cardTitle">
                    <div className="cardTag">{video.category}</div>
                    <h3>
                      <span role="img" aria-label="video icon">🎥</span> {video.title}
                    </h3>
                  </div>
                </a>
              </div>
            )
          } else return null
        })}
      </div>
      <div className="blog-link">
        <a href="https://www.code-boost.com/videos">
          View All Videos ({videos.length})
        </a>
      </div>
    </VideoStyles>
  )
}

const VideoStyles = styled.section`
  padding: 40px 0 80px 0;
  background: rgb(240, 240, 240);
  .posts {
    display: flex;
    flex-wrap: wrap;
    width: 840px;
    margin: 0 auto;
    @media (max-width: 880px) {
      flex-direction: column;
      width: 92%;
      margin: 0 4%;
    }
  }

  .card {
    width: 266.67px;
    background: #fff;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
    margin-bottom: 40px;

    &:not(:nth-child(3n)) {
      margin-right: 20px;
    }
  }
  .card:hover {
    transform: translate(4px, -4px);
  }
  .card a {
    text-decoration: none;
  }

  @media (max-width: 880px) {
    .card:not(:nth-child(3n)) {
      margin-right: auto;
      margin-left: auto;
    }
    .card {
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (max-width: 600px) {
    .card {
      width: 100%;
    }
  }

  & img {
    height: 157px;
    width: 100%;
  }
  @media (max-width: 600px) {
    & img {
      height: calc(100vw / 2);
    }
  }
  & .cardTag {
    position: absolute;
    background: linear-gradient(95deg, rgb(1, 166, 146), rgb(132, 207, 0));
    color: rgb(255, 255, 255);
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
    left: 16px;
    top: -18px;
    line-height: 16px;
    padding: 4px 7px;
  }
  & .cardTopicLogo {
    position: absolute;
    left: 10px;
    top: -64px;
    width: 52px;
    height: 52px;
  }

  & .cardTitle {
    background: #fff;
    height: 96px;
    padding: 24px 16px;
    line-height: 28px;
    position: relative;

    @media (max-width: 1040px) {
      height: calc(50vw / 3.75);
    }

    @media (max-width: 600px) {
      height: calc(100vw / 4.4);
    }

    & h3 {
      font-size: 15px;
      font-weight: 400;
      @media (max-width: 840px) {
        font-size: 15px;
        line-height: 21px;
      }
    }
    & a {
      font-size: 19.6px;
    }
  }

  .blog-link {
    text-align: center;
  }
  .blog-link a {
    display: inline-block;
    color: #4c4a57;
    font-size: 16px;
    font-weight: 700;
    border: 1px solid #c2c1c7;
    border-radius: 4px;
    padding: 12px 20px;
    text-decoration: none;
    transition: 0.15s ease-in-out;
    background: #fff;
  }
  .blog-link a:hover {
    box-shadow: 0 1px 4px rgba(27, 26, 33, 0.25);
    transform: translateY(-1px);
    -webkit-filter: brightness(1.1);
    filter: brightness(1.1);
  }
`

export default VideoSection
