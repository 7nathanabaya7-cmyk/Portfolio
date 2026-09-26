import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/github.svg';
import ytIcon from '../assets/img/yt.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" className="logoImg"/>
            <p className="logoSubHeader">The Portfolio.</p>
            <div className="social-icon">
              <p className="footerCred">All Assest used from:</p>
                <a href="https://github.com/judygab/web-dev-projects/tree/main/personal-portfolio"><img src={githubIcon} className="inverted" alt="GitHub" /></a>
                <a href="https://www.youtube.com/watch?v=hYv6BM2fWd8"><img src={ytIcon} className="inverted" alt="youtube" /></a>
            </div>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nathanabaya"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/thTbruhbowyramn"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/nateskaboom/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}