import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/blog"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Blog />
    </Layout>
  )
}

export default BlogPage
