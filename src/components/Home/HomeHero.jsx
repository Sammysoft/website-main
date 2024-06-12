import React from "react";
import Swipper from "../Elements/Swipper";
import FlexedWrapper from "../Elements/FlexedWrapper";

import styled from "styled-components";

import image1 from "../../Res/Assets/Images/hero1.svg";
import image2 from "../../Res/Assets/Images/hero2.svg";
import FlexedManyWrapper from "../Elements/FlexedManyWrapper";
import { Colors } from "../../Res/colors";
import { HeadText, LittleText } from "../../Res/strings";
import Button from "../Elements/StyledButton";

import tool0 from "../../Res/Assets/Images/tool0.svg";
import tool1 from "../../Res/Assets/Images/tool1.svg";
import tool2 from "../../Res/Assets/Images/tool2.svg";
import tool3 from "../../Res/Assets/Images/tool3.svg";
import tool4 from "../../Res/Assets/Images/tool4.svg";

const HomeHero = () => {
  return (
    <>
      <Swipper first={FirstHero()} second={SecondHero()} />
    </>
  );
};

function FirstHero() {
  return (
    <>
      <FlexedWrapper
        width={"100%"}
        align={"center"}
        justify={"flex-start"}
        direction={"column"}
        height={"100%"}
        leftElement={
          <>
            <FlexedWrapper
              width={"80%"}
              align={"left"}
              justify={"space-between"}
              direction={"row"}
              height={"60%"}
              leftElement={LeftElementFirstSlide()}
              rightElement={RightElementFirstSlide()}
            />
          </>
        }
        rightElement={<>{ToolKits()}</>}
      />
    </>
  );
}

const LeftElementFirstSlide = () => {
  return (
    <>
      <LeftElementWrapper>
        <HeadText>
          We Provide Innovative Solutions To Help Businesses Make Data-Driven
          Decisions
        </HeadText>
        <LittleText>
          Explore our Products and services and learn more about how we can help
          you transform your data into a strategic asset.
        </LittleText>
        <Button text={"Get Started"} width={"30%"} />
      </LeftElementWrapper>
    </>
  );
};

const LeftElementWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const RightElementFirstSlide = () => {
  return (
    <>
      <RightElementWrapper src={image1} alt={"Image of some sorts"} />
    </>
  );
};

const RightElementWrapper = styled.img`
  width: 45%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 1400px) {
    width: 90%;
  }
`;

const ToolItem = styled.img`
  width: 40%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 1400px){
    width:50px;
    height:50px;
  }
`;

function SecondHero() {
  return (
    <>
      <FlexedWrapper
        width={"100%"}
        align={"flex-end"}
        justify={"flex-start"}
        direction={"column"}
        height={"100%"}
        leftElement={
          <>
            <FlexedWrapper
              width={"90%"}
              align={"flex-start"}
              justify={"space-between"}
              direction={"row"}
              height={"65%"}
              leftElement={LeftElementSecondSlide()}
              rightElement={RightElementSecondSlide()}
            />
          </>
        }
        rightElement={<>{ToolKits()}</>}
      />
    </>
  );
}

const LeftElementSecondSlide = () => {
  return (
    <>
      <LeftElementSecondWrapper>
        <LittleText color={Colors.PRIMARY.MAIN2}>Did You Know?</LittleText>
        <HeadText>
          Walmart Generates $3,000,000 In Revenues Every 7 Minutes
        </HeadText>
        <LittleText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </LittleText>
        <Button text={"Read More"} width={"30%"} />
      </LeftElementSecondWrapper>
    </>
  );
};

const LeftElementSecondWrapper = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 1400px) {
    width: 95%;
  }
`;

const RightElementSecondSlide = () => {
  return (
    <>
      <RightElementWrapper src={image2} alt={"Image of some sorts"} />
    </>
  );
};

function ToolKits() {
  return (
    <>
      <FlexedManyWrapper
        height={"10%"}
        margin={"30px"}
        removeMobile={true}
        bgColor={Colors.PRIMARY.MAIN}
        items={
          <>
            <ToolItem src={tool0} alt={"excel"} />
            <ToolItem src={tool1} alt={"tableau"} />
            <ToolItem src={tool2} alt={"scroll"} />
            <ToolItem src={tool3} alt={"powerBI"} />
            <ToolItem src={tool4} alt={"python"} />
          </>
        }
      />
    </>
  );
}

export default HomeHero;
