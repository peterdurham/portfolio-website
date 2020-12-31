import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const AboutSection = props => {
  const data = useStaticQuery(graphql`
    {
      fileName: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <AboutStyles id="about">
      <h2 className="section-header">About</h2>
      <div className="content">
        <div className="entry">
          <div className="profile">
            <Image fluid={data.fileName.childImageSharp.fluid} />
          </div>
        </div>
        <div className="entry">
          <h3>About Me</h3>
          <p>
            I am 31 years old and have been living in Oregon for the past 5
            years. I grew up in Maryland where I studied Math at the University
            of Maryland.
          </p>
          <p>
            I really enjoy solving complex problems and learning new skills. In
            my free time I like to explore book stores, cities, parks, and
            wilderness.
          </p>
        </div>
        <div className="entry">
          <h3>Web development</h3>
          <p>
            I started learning web development in college and have been building applications ever since. I've been working
            full time as a JavaScript Developer since April 2019.
          </p>
          <p>
            I also run a Web Development tutorials blog at <a href="https://www.code-boost.com/">code-boost.com</a>
          </p>
        </div>
        <div className="entry">
          <h3>Skills and Experience</h3>
          <p>
            I build apps and websites mostly using React and Node. I have
            experience using tools including Webpack, Redux, GraphQL,
            Typescript, Jest, React Testing Library, Express, and MongoDB.
          </p>
          <p>
            I also have experience with hosting tools such as: Netlify, Heroku,
            DigitalOcean, Docker, and AWS.
          </p>
        </div>
      </div>
    </AboutStyles>
  )
}

const AboutStyles = styled.section`
  height: auto;
  padding-top: 40px;
  padding-bottom: 80px;
  background: rgb(237, 237, 237);
  .content {
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    padding: 40px;
    width: 820px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 340px 340px;
    grid-column-gap: 60px;
    grid-template-rows: 250px 250px;
    grid-row-gap: 80px;
    @media (max-width: 900px) {
      width: 92%;
      margin: 0 4%;
      display: flex;
      flex-direction: column;
      grid-row-gap: 20px;
    }
  }
  .profile {
    width: 280px;
    height: 280px;
    @media (max-width: 900px) {
      margin: 0 auto;
      margin-bottom: 20px;
      width: 220px;
      height: 220px;
    }
  }
  .entry h3 {
    margin-bottom: 20px;
  }
`
export default AboutSection
