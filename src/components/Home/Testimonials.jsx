import React from "react";
import Swipper from "../Elements/Swipper";
import FlexedWrapper from "../Elements/FlexedWrapper";
import { Colors } from "../../Res/colors";
import styled from "styled-components";

import man from "../../Res/Assets/Images/man.svg";
import rating from "../../Res/Assets/icons/ratings.svg";
import { LittleText } from "../../Res/strings";

const Wrapper = styled.div`
  height: 40vh;
  width: 100%;
  background: ${Colors.PRIMARY.MAIN};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  background: ${Colors.PRIMARY.MAIN};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const Testimonials = () => {
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <Swipper first={FirstElement()} />
        </MainWrapper>
      </Wrapper>
    </>
  );
};

function FirstElement() {
  return (
    <>
      <FlexedWrapper
        width={"90%"}
        bgColor={Colors.PRIMARY.MAIN}
        height={"100%"}
        direction={"row"}
        justify={"space-between"}
        align={"left"}
        leftElement={
          <>
            <LeftFirstElement>
              <FlexedWrapper
                height={"100%"}
                width={"100%"}
                direction={"column"}
                justify={"space-evenly"}
                align={"left"}
                leftElement={
                  <>
                    <FlexedWrapper
                      height={"45%"}
                      width={"100%"}
                      direction={"column"}
                      align={"left"}
                      justify={"space-evenly"}
                      leftElement={
                        <>
                          <ImageWrapper src={rating} alt={"rating"} />
                        </>
                      }
                      rightElement={
                        <>
                          <LittleText width={"70%"}>
                            Keep up the good work, SBC should be nominated for
                            service of the year
                          </LittleText>
                        </>
                      }
                    />
                  </>
                }
                rightElement={
                  <>
                    <FlexedWrapper
                      width={"100%"}
                      height={"45%"}
                      direction={"column"}
                      align={"left"}
                      justify={"space-evenly"}
                      leftElement={<><LittleText>Odutola Ademola</LittleText></>}
                      rightElement={<><CustomSmallText>Data Engineer</CustomSmallText></>}
                    />
                  </>
                }
              />
            </LeftFirstElement>
          </>
        }
        rightElement={
          <>
            <RightFirstElement src={man} alt={"man_svg"} />
          </>
        }
      />
    </>
  );
}

const ImageWrapper = styled.img`
  width: 20%;
  height: 100%;
  object-fit: contain;
`;

const RightFirstElement = styled.img`
  width: 20%;
  height: 100%;
  object-fit: contain;
`;

const LeftFirstElement = styled.div`
  width: 80%;
  height: 100%;
`;

const CustomSmallText = styled(LittleText)`
opacity: 0.8;
font-size: 1rem;
`
export default Testimonials;
