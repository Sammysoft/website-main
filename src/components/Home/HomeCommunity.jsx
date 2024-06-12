import React from "react";
import styled from "styled-components";
import { Colors } from "../../Res/colors";
import FlexedManyWrapper from "../Elements/FlexedManyWrapper";

import advert from "../../Res/Assets/Images/advert.svg";
import FlexedWrapper from "../Elements/FlexedWrapper";
import { HeadText, LittleText } from "../../Res/strings";
import Button from "../Elements/StyledButton";

const Wrapper = styled.div`
  background: ${Colors.PRIMARY.MAIN};
  width: 100%;
  height: 40vh;

  @media (max-width: 1400px){
    height: 35vh;
  }
`;

const HomeCommunity = () => {
  return (
    <>
      <Wrapper>
        <FlexedManyWrapper
          width={"100%"}
          height={"100%"}
          bgColor={Colors.PRIMARY.MAIN}
          margin={"10vh"}
          items={
            <>
              <ImageWrapper src={advert} alt={"advert1"} />
              <FlexedWrapper
                height={"70%"}
                width={"40%"}
                direction={"column"}
                align={"center"}
                justify={"space-between"}
                immutable={true}
                leftElement={
                  <>
                    <FlexedWrapper
                      direction={"column"}
                      height={"40%"}
                      width={"100%"}
                      justify={"center"}
                      align={"center"}
                      immutable={true}
                      leftElement={
                        <>
                          <HeadText color={Colors.WHITE.MAIN} align={"center"}>
                            Join The Community
                          </HeadText>
                        </>
                      }
                      rightElement={
                        <>
                          <LittleText
                            color={Colors.WHITE.MAIN}
                            align={"center"}
                            width={"100%"}
                          >
                            Stay updated with the latest activity, upcoming
                            events, and exclusive members only offers and packs
                          </LittleText>
                        </>
                      }
                    />
                  </>
                }
                rightElement={
                  <>
                    <Button text={"Become a member"} width={"30%"} smaller={true}/>
                  </>
                }
              />
              <ImageWrapper src={advert} alt={"advert1"} />
            </>
          }
        />
      </Wrapper>
    </>
  );
};

const ImageWrapper = styled.img`
  width: 25%;
  height: 60%;
  object-fit: contain;
`;

export default HomeCommunity;
