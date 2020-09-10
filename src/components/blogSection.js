import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      postCount: allBlogJson {
        totalCount
      }
      posts: allBlogJson(limit: 3) {
        edges {
          node {
            id
            title
            excerpt
            url
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

  return (
    <BlogStyles id="blog">
      <h2 className="section-header">Recent Blog Posts</h2>
      <div className="posts">
        {data.posts.edges.map(({ node }) => {
          return (
            <a
              href={node.url}
              key={node.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="preview">
                <div className="preview-image">
                  <Img fluid={node.image.childImageSharp.fluid} />
                </div>
                <div className="preview-details">
                  <div className="preview-title">{node.title}</div>
                  <div className="preview-exerpt">{node.excerpt}</div>
                </div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="blog-link">
        <Link to="/blog">View All ({data.postCount.totalCount})</Link>
      </div>
    </BlogStyles>
  )
}

const BlogStyles = styled.section`
  padding: 40px 0 80px 0;
  .posts {
    display: flex;
    width: 840px;
    margin: 0 auto;
    @media (max-width: 840px) {
      flex-direction: column;
      width: 92%;
      margin: 0 4%;
    }
  }

  .preview {
    position: relative;
    width: 250px;
    height: 375px;
    border: 1px solid #c2c1c7;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    margin-bottom: 50px;
    transition: 0.3s all;
    @media (max-width: 840px) {
      margin: 0 auto 40px auto;
    }
  }
  .preview:not(:nth-child(3n)) {
    margin-right: 45px;
    @media (max-width: 840px) {
      margin-right: auto;
    }
  }
  .preview:hover {
    box-shadow: 4px 7px 7px rgba(3, 3, 3, 0.1);
  }
  .preview:hover .preview-details {
    height: 375px;
  }
  .preview:hover .preview-exerpt {
    opacity: 1;
  }
  .preview-image img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .preview-details {
    padding: 20px;
    position: absolute;
    background: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 15;
    height: calc(100% - 166.16px);
    transform-origin: 50% 100%;
    transition: all 0.3s;
  }

  .preview-title {
    color: rgb(76, 74, 87);
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 10px;
  }
  .preview-exerpt {
    opacity: 0;
    color: #777582;
    font-size: 14px;
    line-height: 24px;
    transition: opacity 0.2s;
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
