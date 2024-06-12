import React from "react";
import styled from "styled-components";
import { Colors } from "../../Res/colors";
import FlexedWrapper from "../Elements/FlexedWrapper";
import { HeadText } from "../../Res/strings";
import { SmallLine } from "../Elements/SmallLine";
import VideoComponent from "../Elements/VideoElement";

const Wrapper = styled.div`
  background: ${Colors.WHITE.MAIN};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;


  @media (max-width: 1400px){
    height: 60vh;
  }
`;

const MainWrapper = styled.div`
  width: 80%;
  height: 90%;
  margin: 5% 0px 5% 0px;
  background: ${Colors.WHITE.MAIN};

  @media (max-width: 1400px){
    height: 50%;
    margin: 2% 0px 2% 0px;
  }
`;

const HomeIntroduction = () => {
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <FlexedWrapper
            direction={"column"}
            align={"flex-start"}
            justify={"space-evenly"}
            height={"15vh"}
            width={"50%"}
            bgColor={Colors.WHITE.MAIN}
            leftElement={
              <>
                <HeadText color={Colors.BLACK.MAIN}>
                  INTRODUCING ARCHBI
                </HeadText>
              </>
            }
            rightElement={
              <>
                <SmallLine />
              </>
            }
          />
          <VideoComponent />
        </MainWrapper>
      </Wrapper>
    </>
  );
};

export default HomeIntroduction;
