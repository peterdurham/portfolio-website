import React, { Component } from "react"
import styled from "styled-components"

import { FaGithub, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactSection extends Component {
  state = { name: "", email: "", message: "" }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state
    return (
      <ContactStyles id="contact">
        <form
          onSubmit={this.handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <h2 className="contact-header section-header">Contact</h2>
          <p className="contact-message">
            Want to collaborate? Have a question?
          </p>
          <p className="contact-row">
            <label htmlFor="name" className="contact-label">
              Name:{" "}
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="contact-input"
              value={name}
              onChange={this.handleChange}
            />
          </p>
          <p className="contact-row">
            <label htmlFor="email" className="contact-label">
              Email:{" "}
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="contact-input"
              value={email}
              onChange={this.handleChange}
            />
          </p>

          <p className="contact-row">
            <label htmlFor="message" className="contact-label">
              Message:{" "}
            </label>
            <textarea
              name="message"
              placeholder="message"
              className="contact-text"
              value={message}
              onChange={this.handleChange}
            />
          </p>
          <p className="contact-button-container">
            <button type="submit" className="contact-button">
              Send
            </button>
          </p>
        </form>

        <div className="contact-social">
          <a
            href="https://github.com/peterdurham"
            className="contact-social-link contact-social-github"
          >
            <div className="contact-social-icon">
              <FaGithub />
            </div>
            <div className="contact-social-text">Github</div>
          </a>
          <a
            href="https://twitter.com/BoostCode"
            className="contact-social-link contact-social-twitter"
          >
            <div className="contact-social-icon">
              <FaTwitter />
            </div>
            <div className="contact-social-text">Twitter</div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCx935tkqWFguSF5zu0f6K0Q"
            className="contact-social-link contact-social-youtube"
          >
            <div className="contact-social-icon">
              <FaYoutube />
            </div>
            <div className="contact-social-text">YouTube</div>
          </a>
          <a
            href="https://www.linkedin.com/in/peter-durham-153a96166/"
            className="contact-social-link contact-social-linkedin"
          >
            <div className="contact-social-icon">
              <FaLinkedinIn />
            </div>
            <div className="contact-social-text">Linkedin</div>
          </a>
        </div>
      </ContactStyles>
    )
  }
}

const ContactStyles = styled.section`
  background: #222126;
  padding-top: 40px;
  position: relative;
  color: #fff;
  text-align: center;
  font-size: 16px;
  .contact-header {
    color: #fff;
  }
  .contact-message {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 40px;
    text-align: center;
    color: #fff;
    @media (max-width: 600px) {
      padding: 0 20px;
    }
  }
  .contact-row {
    display: flex;
    justify-content: center;
    width: 400px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
    }
  }
  .contact-label {
    width: 100px;
    color: #fff;
    text-align: right;
    margin-right: 10px;
    line-height: 40px;
  }
  .contact-input {
    background-color: ${props => props.theme.grey1};
    border: none;
    width: 300px;
    height: 40px;
    padding: 0 10px;
    font-size: 16px;
    color: ${props => props.theme.grey6};
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  .contact-field {
    margin: 80px 0;
  }
  .contact-text {
    background-color: ${props => props.theme.grey1};
    border: none;
    width: 300px;
    height: 90px;
    padding: 10px;
    font-size: 20px;
    color: ${props => props.theme.grey6};
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  .contact-button {
    padding: 10px;
    border: 1.5px solid white;
    border-radius: 2px;
    background-color: ${props => props.theme.grey2};
    color: ${props => props.theme.grey6};
    cursor: pointer;
    margin-bottom: 20px;
  }
  .contact-button-container {
    display: flex;
    justify-content: flex-end;
    width: 400px;
    margin: 0 auto;

    @media (max-width: 600px) {
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
    }
  }
  .contact-button:hover {
    background-color: ${props => props.theme.grey6};
    color: rgb(30, 30, 30);
    font-weight: 700;
    transition: all 0.3s;
  }
  .contact-social {
    border-top: 1.5px solid ${props => props.theme.grey6};
    width: 480px;
    margin: 0 auto;
    margin-top: 40px;
    padding-top: 40px;
    padding-bottom: 60px;
    display: flex;
    justify-content: center;
    @media (max-width: 600px) {
      flex-direction: column;
      width: 90%;
      padding-left: 5%;
      padding-right: 5%;
    }
  }
  .contact-social-text {
    font-size: 14px;
    line-height: 36px;
    margin-left: 5px;
  }
  .contact-social-github {
    background-color: #4f4f4f;
    border: none;
    border-bottom: 3px solid #3f3f3f;
  }
  .contact-social-twitter {
    background-color: #00aced;
    border: none;
    border-bottom: 3px solid #0089bd;
  }
  .contact-social-linkedin {
    background-color: #0077b5;
    border: none;
    border-bottom: 3px solid #005f90;
  }
  .contact-social-medium {
    background-color: rgb(30, 30, 30);
    border: none;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  }
  .contact-social-youtube {
    background-color: #FF0000;
    border: none;
    border-bottom: 3px solid rgba(0, 0, 0, 0.4);
  }
  .contact-social-icon {
    transform: translateY(2px);
  }
  .contact-social-link {
    padding: 6px 12px 3px 12px;
    color: ${props => props.theme.grey6};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    border-radius: 3px;
    margin-left: 5px;
    margin-right: 5px;
    transition: all 0.4s;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(20, 20, 20, 0.3);
    @media (max-width: 600px) {
      margin: 0;
      margin-bottom: 16px;
    }
  }
  .contact-social-link:hover {
    transform: translateY(2px);
    border-bottom-width: 1px;
  }
  .contact-social-link:active {
    transform: translateY(1px);
  }
  .contact-contents {
    font-size: 20px;
    margin-left: 45%;
    margin-bottom: 40px;
  }
  .contact-header {
    font-size: 30px;
  }

  .contact-email {
    font-size: 20px;
    text-align: center;

    margin-top: 20px;
    margin-bottom: 20px;
  }
  .contact-icon {
    color: black;
  }
  .contact-link {
    text-decoration: none;
    color: rgb(80, 80, 80);
    transition: all 0.4s;
  }
  .contact-link:hover {
    color: black;
  }
`

export default ContactSection
