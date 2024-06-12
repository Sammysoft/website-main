import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Colors } from "../Res/colors";
import HomeHero from "../components/Home/HomeHero";
import HomeAbout from "../components/Home/HomeAbout";
import Testimonials from "../components/Home/Testimonials";
import HomeServices from "../components/Home/HomeServices";
import HomeIntroduction from "../components/Home/HomeIntroduction";
import HomeTeam from "../components/Home/HomeTeam";
import HomeCommunity from "../components/Home/HomeCommunity";
import HomeBlog from "../components/Home/HomeBlog";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  width: 100%;
  background: ${Colors.PRIMARY.MAIN};
  height: 90vh;

  @media (max-width: 1400px){
    height: 70vh;
  }
`;

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <HomeHero />
      </Wrapper>
      <HomeAbout />
      <Testimonials />
      <HomeServices />
      <HomeIntroduction />
      <HomeTeam />
      <HomeCommunity />
      <HomeBlog />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomeScreen;
