import React from "react"
import { Helmet } from "react-helmet"

import Navbar from "../components/navbar"
import IntroSection from "../components/introSection"
import AboutSection from "../components/aboutSection"
import ProjectsSection from "../components/projectsSection"
import BlogSection from "../components/blogSection"
import ContactSection from "../components/contactSection"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`portfolio`, `peterdurham`, `react`]} />
    <Helmet>
      <meta charSet="utf-8" />

      <title>Peter Durham</title>
    </Helmet>

    <Navbar />
    <IntroSection />
    <AboutSection />
    <ProjectsSection />
    <BlogSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
