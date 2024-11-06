import React, { useState, useEffect } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/sayakbg.png";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import Hello from '../../assets/Hello.gif';
import telegram from '../../assets/telegram.svg';

const roles = ["Student", "Full Stack Developer", "Gamer", "Photographer"];
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenRoles = 2000;

function TypingEffect() {
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullRole = roles[roleIndex];
      if (isDeleting) {
        setCurrentRole(currentFullRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      } else {
        setCurrentRole(currentFullRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentFullRole.length) {
          setIsDeleting(true);
          setTimeout(() => {}, delayBetweenRoles);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, roleIndex]);

  return <div>{currentRole}</div>;
}

const Hero = () => {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1><strong>Sayak Samanta</strong></h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <TypingEffect />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">University of Engineering & Management</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <HashRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </HashRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/Sayak-samanta/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/sayak-samnata/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://wa.me/918348876903"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://t.me/sayaksamnata"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 1000}>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
};

export default Hero;