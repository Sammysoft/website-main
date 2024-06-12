import React from "react";
import styled from "styled-components";
import { Colors } from "../../Res/colors";

import { HeadText, LittleText } from "../../Res/strings";
import FlexedWrapper from "../Elements/FlexedWrapper";
import FlexedManyWrapper from "../Elements/FlexedManyWrapper";
import Button from "../Elements/StyledButton";

import { SmallLine } from "../Elements/SmallLine";

const Wrapper = styled.div`
  background: ${Colors.WHITE.MAIN};
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1400px){
    height: fit-content;
    margin: 3vh 0px 3vh 0px;
  }
`;

const MainWrapper = styled.div`
  background: ${Colors.PRIMARY.MAIN};
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 85%;

  @media (max-width: 1400px) {
    height: 80%;
    padding-bottom: 15px
  }
`;

const HomeAbout = () => {
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <FlexedWrapper
            width={"50%"}
            direction={"column"}
            justify={"center"}
            immutable={true}
            align={"center"}
            height={"10%"}
            leftElement={
              <>
                <HeadText>ABOUT US</HeadText>
              </>
            }
            rightElement={
              <>
                <SmallLine />
              </>
            }
          />
          <LittleText width={"60%"} align={"center"}>
            We are a Data and analytics Consulting Firm. We provide analytical
            services which helps businesses make data driven decisions by
            deciphering their data into meaningful, actionable information. We
            believe so much is possible with Data.
          </LittleText>

          <FlexedManyWrapper
            width={"90%"}
            height={"25%"}
            invert={true}
            items={<>{cardItems.map((item, id) => Card(item.text, id))}</>}
          />

          <Button text={"Read More"} width={"25%"} />
        </MainWrapper>
      </Wrapper>
    </>
  );
};

const cardItems = [
  {
    text: "We integrate data system for collecting and structuring business data from various sources of organisation into one comprehensive database",
  },
  {
    text: "We are an online community for Data analysts, Data Officers, Data professional and Data Enthusiasts.",
  },
  {
    text: "We provide a platform where people in Academics/Research, Entrepreneurs/Business can learn and acquire knowledge, skills, and experience in any career path in Data Analytics ",
  },
];

function Card(text, id) {
  return (
    <>
      <CardWrapper key={id}>
        <Text>{text}</Text>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  border-radius: 10px;
  background: ${Colors.WHITE.MAIN};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;

  @media (max-width: 1400px){
    width: 95%;
    justify-content: space-between;
    min-height: 15vh;
    margin: 0px 0px 20px 0px;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  text-align: left;
  width: 80%;

  @media (max-width: 1400px){
    font-size: 0.8rem;
    line-height: 1.6rem;
    width: 90%;
  }
`;

export default HomeAbout;
