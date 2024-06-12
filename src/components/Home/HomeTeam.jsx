import React from "react";
import styled from "styled-components";
import { Colors } from "../../Res/colors";

import FlexedWrapper from "../Elements/FlexedWrapper";
import { HeadText } from "../../Res/strings";
import { SmallLine } from "../Elements/SmallLine";
import GridComponent from "../Elements/GridElement";

import emeka from "../../Res/Assets/Images/emeka.svg";
import olamide from "../../Res/Assets/Images/olamide.svg";
import isreal from "../../Res/Assets/Images/isreal.svg";
import samuel from "../../Res/Assets/Images/samuel.svg";
import tobi from "../../Res/Assets/Images/tobi.svg";
import daniel from "../../Res/Assets/Images/daniel.svg";
import Button from "../Elements/StyledButton";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150vh;
  background: ${Colors.WHITE.MAIN};

  @media (max-width: 1400px){
    height: fit-content;
  }
`;

const MainWrapper = styled.div`
  width: 80%;
  height: 90%;
  margin: 5% 0px 5% 0px;
`;

const HomeTeam = () => {
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
                <HeadText color={Colors.BLACK.MAIN}>OUR TEAM</HeadText>
              </>
            }
            rightElement={
              <>
                <SmallLine />
              </>
            }
          />
          <br />
          <br />
          <GridComponent
            element={<>{cardData.map((item, id) => Cards(item, id))}</>}
            template={"30% 30% 30%"}
          />
        </MainWrapper>
        <Button
          bgColor={Colors.WHITE.MAIN}
          width={"15%"}
          text={"See More Team"}
          border={Colors.PRIMARY.MAIN2}
          color={Colors.PRIMARY.MAIN2}
        />
      </Wrapper>
    </>
  );
};

const cardData = [
  {
    name: "Amaefule Chukwuemeka Timothy",
    role: "Community Lead",
    image: emeka,
  },
  {
    name: "Oluwamayowa Israel Agboola",
    role: "Design Lead",
    image: isreal,
  },
  {
    name: "Samuel Dare-Owonibi",
    role: "Technical Lead",
    image: samuel,
  },
  {
    name: "Olamide Ogunrayi",
    role: "Community Manager",
    image: olamide,
  },
  {
    name: "Nweke Daniel",
    role: "Marketing Lead",
    image: daniel,
  },
  {
    name: "Omoragbon Tobi",
    role: "Product Designer",
    image: tobi,
  },
];

function Cards(item, id) {
  return (
    <>
      <FlexedWrapper
        key={id}
        direction={"column"}
        align={"center"}
        justify={"left"}
        height={"50vh"}
        width={"100%"}
        bgColor={Colors.WHITE.MAIN}
        leftElement={
          <>
            <ImageWrapper src={item.image} alt={item.name} />
          </>
        }
        rightElement={
          <>
            <NameText>{item.name}</NameText>
            <RoleText>{item.role}</RoleText>
          </>
        }
      />
    </>
  );
}

const ImageWrapper = styled.img`
  object-fit: contain;
  width: 100%;
  height: 80%;
`;

const NameText = styled.p`
  width: 100%;
  color: ${Colors.BLACK.MAIN};
  font-weight: 800;
  font-size: 1rem;
  text-align: center;
`;

const RoleText = styled.p`
  width: 100%;
  color: ${Colors.BLACK.MAIN};
  font-weight: 500;
  font-size: 0.7rem;
  text-align: center;
`;

export default HomeTeam;
