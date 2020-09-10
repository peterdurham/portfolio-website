import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { AiFillGithub } from "react-icons/ai"
import { GoBrowser } from "react-icons/go"

import ProjectIcon from "./projectIcon"

const ProjectsSection = props => {
  const [numProjects, setNumProjects] = useState(6)

  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            title
            type
            description
            github
            url
            tools
            image {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 267) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const filteredData = data.allProjectsJson.edges.filter(
    (edge, index) => index < numProjects
  )

  return (
    <ProjectStyles id="projects">
      <div id="projects-container">
        <div className="section-header">Projects</div>

        <div className="projects">
          {filteredData.map(({ node }) => {
            return (
              <div className="project" key={node.url}>
                <div className="project-image">
                  <Img fluid={node.image.childImageSharp.fluid} />
                </div>

                <div className="project-details">
                  <div className="project-type">{node.type}</div>
                  <div className="project-title">{node.title}</div>
                  <div className="project-tools">
                    {node.tools.map(tool => (
                      <ProjectIcon icon={tool} key={tool} />
                    ))}
                  </div>
                  <div className="project-description">{node.description}</div>
                  <div className="project-links">
                    <a
                      href={node.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hosted <GoBrowser />
                    </a>
                    {node.github.length > 0 && (
                      <a
                        href={node.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github <AiFillGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="projects-button-container">
          {numProjects < data.allProjectsJson.edges.length ? (
            <button onClick={() => setNumProjects(numProjects + 6)}>
              Show More
            </button>
          ) : (
            <button onClick={() => setNumProjects(6)}>Show Less</button>
          )}
        </div>
      </div>
    </ProjectStyles>
  )
}

const ProjectStyles = styled.section`
  background: #1e392a;
  padding: 40px 0 80px 0;
  .section-header {
    color: #fff;
  }
  .bg-image {
  }
  #projects-container {
    width: 840px;
    margin: 0 auto;
    @media (max-width: 900px) {
      width: 580px;
    }
    @media (max-width: 610px) {
      width: 100%;
    }
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 610px) {
      flex-direction: column;
    }
  }
  .project:not(:nth-child(3n)) {
    margin-right: 45px;
    @media (max-width: 900px) {
      margin-right: auto;
    }
  }
  .project:not(:nth-child(2n)) {
    @media (max-width: 900px) {
      margin-right: 30px;
    }
    @media (max-width: 610px) {
      margin-right: auto;
    }
  }
  .project {
    position: relative;
    width: 250px;
    height: 375px;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    margin-bottom: 50px;
    transition: 0.3s all;
    @media (max-width: 900px) {
      width: 275px;
    }
    @media (max-width: 610px) {
      width: 300px;
      margin: 0px auto 40px auto;
      height: 335px;
    }
  }

  @media (min-width: 610px) {
    .project:hover {
      box-shadow: 4px 7px 7px rgba(23, 23, 23, 0.4);
    }
    .project:hover .project-details {
      height: 375px;
    }

    .project:hover .project-description {
      opacity: 1;
    }
  }
  .project-image img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .project-details {
    padding: 20px;
    position: absolute;
    background: #222126;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 15;
    height: calc(100% - 166.16px);
    transform-origin: 50% 100%;
    transition: all 0.3s;
  }
  .project-type {
    color: rgb(136, 138, 125);
    color: #fff;
    font-size: 12px;
    font-weight: 700px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .project-title {
    color: rgb(179, 181, 168);
    color: #fff;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 10px;
  }
  .project-tools {
    display: flex;
    margin: 16px 0 12px 0;
    @media (max-width: 610px) {
      margin: auto;
    }
  }

  .project-tools img {
    width: 28px;
    height: 28px;
    margin-right: 12px;
  }
  .project-description {
    opacity: 0;
    color: #fff;
    font-size: 14px;
    line-height: 24px;
    transition: opacity 0.2s;
  }

  .project-links {
    position: absolute;
    left: 20px;
    bottom: 20px;
    width: calc(100% - 40px);
    display: flex;
    justify-content: space-between;
    z-index: 30;
    background: rgb(56, 54, 65);
    background: #222126;
  }
  .project-links a {
    font-size: 16px;
    color: #068dff;
    text-decoration: none;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    z-index: 42;
  }
  .project-links svg {
    margin-left: 5px;
    font-size: 20px;
  }
  .project-links a:hover {
    color: #0078dd;
  }
  .projects-button-container {
    text-align: center;
  }
  .projects-button-container button {
    border: 2px solid #fff;
    border-radius: 4px;
    padding: 10px 18px;
    background: transparent;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }
  .projects-button-container button:hover {
    transform: translateY(-2px);
    background: #fff;
    color: #1e392a;
  }
  .projects-button-container button:focus {
    outline: none;
  }
`

export default ProjectsSection
