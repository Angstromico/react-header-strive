import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';
const Hero = () => {
  const { closeModal } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeModal}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Web Design</h1>
          <p>I Learn React With John Smilga</p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
