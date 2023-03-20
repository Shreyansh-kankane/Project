import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import React from 'react'

const HeroSection=(props)=> {
  return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-two-column">
                <div className="hero-section-data">
                    <p className="intro-data">Welcome to </p>
                    <h1> {props.data.name} </h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                    atque temporibus veniam doloribus libero ad error omnis voluptates
                    animi! Suscipit sapiente.
                    </p>
                    <NavLink>
                    <Button>Enquire now</Button>
                    </NavLink>
                </div>
                <div className="hero-section-image">
                    <figure>
                    <img
                        src="images/hero.jpg"
                        alt="hero-section-photo"
                        className="img-style"
                    />
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper> 
  )
}

export default HeroSection;

const Wrapper = styled.section`
  padding: 12rem 0;
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  
  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-family: 'Dancing Script';
    }
    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: #ffddd278;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 5rem;
    }
    // .grid-two-column {
    //   grid-template-columns: repeat(1, 1fr);
    // }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: #ffddd278;
    }
  }
`;