import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      postCount: allBlogJson {
        totalCount
      }
      posts: allBlogJson(limit: 6) {
        edges {
          node {
            id
            title
            category
            excerpt
            url
            image {
              childImageSharp {
                fluid(maxWidth: 267, maxHeight: 139) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <BlogStyles id="blog">
      <h2 className="section-header">Blog Posts</h2>
      <div className="posts">
        {data.posts.edges.map(({ node }) => {
          return (
            <div className="card"  key={node.url}>
              <a
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="preview">
                  <div className="preview-image">
                    <Img
                      fluid={node.image.childImageSharp.fluid}
                      className="cardImage"
                  
                    ></Img>
                  </div>
                  <div className="cardTitle">
                    <div className="cardTag">{node.category}</div>
                    <h3>{node.title}</h3>
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
      <div className="blog-link">
        <a href="https://www.code-boost.com/archive">
          View All Posts ({data.postCount.totalCount})
        </a>
      </div>
    </BlogStyles>
  )
}

const BlogStyles = styled.section`
  padding: 40px 0 80px 0;
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

  & .cardImage {
    height: 139px;
    width: 100%;
    /* background-size: contain; */
    /* background-position: 50% 50%; */
  }
  @media (max-width: 600px) {
    & .cardImage {
      height: calc(100vw / 2.2);
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
    top: -12px;
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
    height: 96px;
    padding: 24px 16px;
    line-height: 28px;
    position: relative;

    & h3 {
      font-weight: 400;
    }

    @media (max-width: 1040px) {
      height: calc(50vw / 3.75);
    }

    @media (max-width: 600px) {
      height: calc(100vw / 4.4);
    }

    & h3 {
      font-size: 16px;
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
  }
  .blog-link a:hover {
    box-shadow: 0 1px 4px rgba(27, 26, 33, 0.25);
    transform: translateY(-1px);
    -webkit-filter: brightness(1.1);
    filter: brightness(1.1);
  }
`

export default BlogSection
