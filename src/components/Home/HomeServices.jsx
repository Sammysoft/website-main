import React from "react";
import styled from "styled-components";
import { Colors } from "../../Res/colors";
import FlexedWrapper from "../Elements/FlexedWrapper";
import { HeadText, LittleText } from "../../Res/strings";
import { SmallLine } from "../Elements/SmallLine";
import GridComponent from "../Elements/GridElement";

import academy from "../../Res/Assets/Images/academy.svg";
import warehouse from "../../Res/Assets/Images/warehouse.svg";
import management from "../../Res/Assets/Images/management.svg";
import governance from "../../Res/Assets/Images/governance.svg";
import Button from "../Elements/StyledButton";

const Wrapper = styled.div`
  background: ${Colors.WHITE.MAIN};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
`;

const MainWrapper = styled.div`
  width: 80%;
  height: 90%;
  margin: 5% 0px 5% 0px;
`;

const HomeServices = () => {
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
                <HeadText color={Colors.BLACK.MAIN}>Our Services</HeadText>
              </>
            }
            rightElement={
              <>
                <SmallLine />
              </>
            }
          />
          <LittleText width={"45%"} color={Colors.BLACK.MAIN}>
            Our Analytics services provide a comprehensive solution to get the
            most out of your data.
          </LittleText>

          <GridComponent
            element={<>{cardData.map((item, id) => Cards(item, id))}</>}
          />
        </MainWrapper>
        <br/><br/><br/>
        <Button
          bgColor={Colors.WHITE.MAIN}
          width={"15%"}
          text={"See More Services"}
          border={Colors.PRIMARY.MAIN2}
          color={Colors.PRIMARY.MAIN2}
        />
        <br/><br/>
      </Wrapper>
    </>
  );
};

const cardData = [
  {
    head: "Data Academy",
    image: academy,
  },
  {
    head: "Data Governance",
    image: governance,
  },
  {
    head: "Data Warehouse",
    image: warehouse,
  },
  {
    head: "Data Management",
    image: management,
  },
];

function Cards(item, id) {
  return (
    <>
      <FlexedWrapper
        key={id}
        direction={"column"}
        height={"40vh"}
        width={"100%"}
        justify={"space-evenly"}
        align={"center"}
        bgColor={Colors.WHITE.MAIN}
        leftElement={
          <>
            <LittleText color={Colors.BLACK.MAIN} width={"100%"}>
              {item.head}
            </LittleText>
          </>
        }
        rightElement={
          <>
            <ImageWrapper src={item.image} alt={item.image} />
          </>
        }
      />
    </>
  );
}

const ImageWrapper = styled.img`
  background: rgba(0, 0, 0, 0.1);
  object-fit: contain;
  width: 100%;
  border-radius: 10px;
  height: 75%;
`;

export default HomeServices;
