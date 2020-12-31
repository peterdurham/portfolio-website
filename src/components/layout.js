import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider, createGlobalStyle } from "styled-components"


const theme = {
  green8: "#1e392a",
  lightGrey: "rgb(191, 191, 191)",
  grey1: "rgb(23, 22, 27)",
  grey2: "rgb(34, 33, 38)",
  grey4: "rgb(191, 191, 191)",
  grey5: "rgb(222, 220, 220)",
  grey6: "rgb(245, 245, 245)",
  dark: "rgb(24, 24, 24)",
  black: "rgb(1, 1, 1)",
  blue1: "#0074e1",
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;700&display=swap');

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: 'Libre Franklin', sans-serif;
}
a {
  cursor: pointer;
}
h3 {
  color: rgb(27,26,33);
}
p {
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 20px;
  color: rgb(76,74,87);
}
.bold {
  font-weight: bold;
}
.section-header {
  font-size: 36px;
  text-align: center;
  color: rgb(27,26,33);
  padding: 40px 0;
  @media (max-width: 700px) {
    font-size: 28px;

  }
}
.footer {
    width: 100%;
    background: #000;
  }
  .footer__text {
    color: white;
    text-align: center;
    font-size: 18px;
    height: 160px;
    line-height: 160px;
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
      <footer className="footer">
        <div className="footer__text">
          {new Date().getFullYear()} Peter Durham
        </div>
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
