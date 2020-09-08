import React from "react"

import ReactLogo from "../images/skills/react.png"
import JSLogo from "../images/skills/javascript.png"
import CSSLogo from "../images/skills/css.png"
import GatsbyLogo from "../images/skills/gatsby.png"
import NetlifyCMSLogo from "../images/skills/netlify.png"
import ReactRouterLogo from "../images/skills/react-router.png"
import MapboxLogo from "../images/skills/mapbox.png"
import MongoDBLogo from "../images/skills/mongodb.png"
import NodeLogo from "../images/skills/node.png"
import ExpressLogo from "../images/skills/express.png"
import NextLogo from "../images/skills/next-js.png"
import GraphQLLogo from "../images/skills/graphql.png"
import WebflowLogo from "../images/skills/webflow.png"
import AMPLogo from "../images/skills/amp.png"

const ProjectIcon = ({ icon }) => {
  let img

  if (icon === "React") {
    img = <img src={ReactLogo} alt="React Logo" />
  } else if (icon === "JS") {
    img = <img src={JSLogo} alt="JavaScript Logo" />
  } else if (icon === "CSS") {
    img = <img src={CSSLogo} alt="CSS Logo" />
  } else if (icon === "Gatsby") {
    img = <img src={GatsbyLogo} alt="Gatsby Logo" />
  } else if (icon === "Netlify CMS") {
    img = <img src={NetlifyCMSLogo} alt="Netlify CMS Logo" />
  } else if (icon === "React Router") {
    img = <img src={ReactRouterLogo} alt="React Router logo" />
  } else if (icon === "MongoDB") {
    img = <img src={MongoDBLogo} alt="MongoDB Logo" />
  } else if (icon === "Mapbox") {
    img = <img src={MapboxLogo} alt="Mapbox Logo" />
  } else if (icon === "Node") {
    img = <img src={NodeLogo} alt="Node JS Logo" />
  } else if (icon === "Express") {
    img = <img src={ExpressLogo} alt="Express Logo" />
  } else if (icon === "Next") {
    img = <img src={NextLogo} alt="Next Logo" />
  } else if (icon === "GraphQL") {
    img = <img src={GraphQLLogo} alt="GraphQL Logo" />
  } else if (icon === "Webflow") {
    img = <img src={WebflowLogo} alt="Webflow Logo" />
  } else if (icon === "AMP") {
    img = <img src={AMPLogo} alt="AMP Logo" />
  } else {
    return <span></span>
  }
  return <span>{img}</span>
}

export default ProjectIcon
