import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";

const Home = () => {
    const Mydata = {
        name: "faces by Poorvi Sethiya",
    };
  return (
    // <Wrapper className="test">Home</Wrapper>
    <HeroSection data={Mydata}/>
)


};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;