import React, { useState } from "react"
import styled from "styled-components"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  const scrollToSection = sectionId => {
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <NavStyles>
      <div id="nav-container">
        <nav>
          <div
            onClick={() => scrollToSection("#intro")}
            className="nav-link nav-link-main"
          >
            Peter Durham
          </div>
          <div className="nav-links">
            <div
              onClick={() => scrollToSection("#about")}
              className="nav-link nav-link-1"
            >
              About
            </div>
            <div
              onClick={() => scrollToSection("#projects")}
              className="nav-link nav-link-2"
            >
              Projects
            </div>
            <div
              onClick={() => scrollToSection("#blog")}
              className="nav-link nav-link-3"
            >
              Blog
            </div>
            <div
              onClick={() => scrollToSection("#videos")}
              className="nav-link nav-link-4"
            >
              Videos
            </div>
            <div
              onClick={() => scrollToSection("#contact")}
              className="nav-link nav-link-5"
            >
              Contact
            </div>
          </div>
          <div className="nav-mobile">
            {!navOpen ? (
              <button
                onClick={() => setNavOpen(true)}
                className="nav-mobile-open"
              >
                <FiMenu />
              </button>
            ) : (
              <button
                onClick={() => setNavOpen(false)}
                className="nav-mobile-close"
              >
                <MdClose />
              </button>
            )}
          </div>
        </nav>
      </div>
      {navOpen && (
        <div className="nav-mobile-links">
          <a href="#about" onClick={() => setNavOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setNavOpen(false)}>
            Projects
          </a>
          <a href="#blog" onClick={() => setNavOpen(false)}>
            Blog
          </a>
          <a href="#videos" onClick={() => setNavOpen(false)}>
            Videos
          </a>
          <a href="#contact" onClick={() => setNavOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </NavStyles>
  )
}

const NavStyles = styled.div`
  background-color: ${props => props.theme.black};
  height: 50px;
  position: fixed;
  width: 100%;
  max-width: 100vw;
  z-index: 100;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 840px;
    width: 100%;
    padding: 0 40px;
    margin: 0 auto;
    @media (max-width: 700px) {
      padding: 0;
    }
  }
  .nav-links {
    display: flex;
    align-items: center;
    font-size: 16px;

    @media (max-width: 700px) {
      display: none;
    }
  }
  .nav-link {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    padding: 0 20px;
    line-height: 50px;
    cursor: pointer;
    opacity: 0;
  }
  .nav-link:hover {
    background: rgb(34, 34, 34);
  }

  .nav-link-main {
    animation: fadeInDown 0.3s both 0.5s;
  }
  .nav-link-1 {
    animation: fadeInDown 0.3s both 0.7s;
  }
  .nav-link-2 {
    animation: fadeInDown 0.3s both 0.8s;
  }
  .nav-link-3 {
    animation: fadeInDown 0.3s both 0.9s;
  }
  .nav-link-4 {
    animation: fadeInDown 0.3s both 1s;
  }
  .nav-link-5 {
    animation: fadeInDown 0.3s both 1.1s;
  }
  @keyframes fadeInDown {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .nav-mobile {
    display: none;
    padding: 0 30px;
  }
  .nav-mobile-links {
    display: none;
    height: 100vh;
    width: 100vw;
    background-color: #030303;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 20px;
    font-size: 18px;
    @media (max-width: 700px) {
      display: flex;
    }
  }
  .nav-mobile-links a {
    margin-bottom: 16px;
    color: #fff;
    text-decoration: none;
  }
  .nav-mobile-links a:hover {
    text-decoration: underline;
  }
  .nav-mobile button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }
  .nav-mobile svg {
    height: 24px;
    width: 24px;
    color: #fff;
  }

  @media (max-width: 700px) {
    .nav-mobile {
      display: block;
    }
  }
  .active {
    font-weight: bold;
    color: ${props => props.theme.grey6};
  }
`

export default Navbar
