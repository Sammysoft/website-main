import React from "react";
import styled from "styled-components";
import { Colors } from "../Res/colors";
import { LittleText, HeadText } from "../Res/strings";
import SubscribeButton from "./Elements/SubscribeInputField";

const Wrapper = styled.div`
  background: ${Colors.YELLOW.MAIN};
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: spae-evenly;

  @media (max-width: 1400px){
    height: fit-content;
    padding: 4vh 0px 4vh 0px;
  }
`;

const Newsletter = () => {
  return (
    <>
      <Wrapper>
        <LittleText color={Colors.BLACK.MAIN} width={"30%"} align={"center"}>
          Stay Updated
        </LittleText>
        <CustomHeadText
          color={Colors.BLACK.MAIN}
          width={"50%"}
          align={"center"}
        >
          Receive recommendation mails tailored to your business needs and
          financial growth.
        </CustomHeadText>
        <SubscribeButton width={"30%"} />
      </Wrapper>
    </>
  );
};

const CustomHeadText = styled(HeadText)`
  width: 60%;
  font-weight: 400;
  line-height: 3.5rem;
  font-size: 2rem;

  @media (max-width: 1400px){
    font-size: 1rem;
    line-height: 1.5rem
  }
`;
export default Newsletter;
