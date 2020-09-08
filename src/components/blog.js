import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allBlogJson {
        edges {
          node {
            title
            url
            site
            slug
            excerpt
            image {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 300) {
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
    <>
      <BlogNavStyles>
        <div className="blog-nav-container">
          <Link to="/">Peter Durham</Link>
          <Link to="/">Back To Portfolio</Link>
        </div>
      </BlogNavStyles>
      <BlogStyles>
        <h1 className="blog-title">Blog</h1>

        <div className="blog-posts">
          {data.allBlogJson.edges.map(({ node: post }) => {
            return (
              <div className="blog-post" key={post.url}>
                <div className="blog-content">
                  <a href={post.url} className="blog-link">
                    <h2>{post.title}</h2>
                  </a>

                  <p>{post.excerpt}</p>
                </div>

                <div className="blog-image">
                  <a href={post.url}>
                    <Img
                      fluid={post.image.childImageSharp.fluid}
                      alt="post preview"
                    />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </BlogStyles>
    </>
  )
}

const BlogNavStyles = styled.nav`
  background-color: ${props => props.theme.grey1};
  height: 50px;
  position: fixed;
  width: 100%;
  z-index: 100;
  .blog-nav-container {
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin: 0 auto;
    font-size: 18px;
    @media (max-width: 840px) {
      width: 100%;
      font-size: 14px;
    }
  }

  a {
    color: ${props => props.theme.grey4};
    text-decoration: none;
    padding: 0 20px;
    cursor: pointer;
    height: 100%;
    line-height: 50px;
  }
  a:hover {
    background: rgb(34, 34, 34);
  }
`

const BlogStyles = styled.div`
  padding-top: 70px;
  padding-bottom: 40px;
  background: rgb(237, 237, 237);

  .blog-title {
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
    padding: 20px 0;
  }
  .blog-link {
    text-decoration: none;
  }
  .blog-post {
    width: 700px;
    margin: 0 auto;
    display: flex;
    border-radius: 4px;
    background-color: white;
    margin-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    transition: 0.15s all ease-in-out;
    @media (max-width: 720px) {
      width: 92%;
      margin: 0 4% 40px 4%;
    }
    @media (max-width: 540px) {
      flex-direction: column;
    }
  }
  .blog-post:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  }
  .blog-content {
    flex-basis: 70%;
    padding: 20px;
    h2 {
      margin-bottom: 20px;
      font-size: 20px;
      color: rgb(30, 30, 30);
      text-decoration: none;
      @media (max-width: 720px) {
        font-size: 16px;
      }
    }
    p {
      font-size: 16px;
      @media (max-width: 720px) {
        font-size: 12px;
      }
    }
    @media (max-width: 540px) {
      order: 2;
    }
  }
  .blog-image {
    width: 240px;
    height: 180px;
    flex-basis: 30%;
    padding: 20px;
    @media (max-width: 540px) {
      order: 1;
      width: 100%;
      padding: 20px;
    }
  }
`

export default Blog
