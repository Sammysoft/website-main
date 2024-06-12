import React from "react";
import styled from "styled-components";
import { Colors } from "../Res/colors";
import FlexedManyWrapper from "./Elements/FlexedManyWrapper";
import FlexedWrapper from "./Elements/FlexedWrapper";
import { HeadText, LittleText } from "../Res/strings";

import logo from "../Res/Assets/Images/logo.svg";
import social1 from "../Res/Assets/icons/social1.svg";
import social2 from "../Res/Assets/icons/social2.svg";
import social3 from "../Res/Assets/icons/social3.svg";
import social4 from "../Res/Assets/icons/social4.svg";
import SubscribeButton from "./Elements/SubscribeInputField";

import mail from "../Res/Assets/icons/mail.svg";
import phone from "../Res/Assets/icons/phone.svg";
import location from "../Res/Assets/icons/location.svg";

const Wrapper = styled.div`
  background: ${Colors.PRIMARY.MAIN};
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${Colors.PRIMARY.MAIN};

`;

const Footer = () => {
  return (
    <>
      <Wrapper>
        <br/>
        <br/>
        <FlexedManyWrapper
          width={"90%"}
          height={"60%"}
          align={"flex-start"}
          items={
            <>
              {Socials()}
              {Links()}
              {Contact()}
            </>
          }
          bgColor={Colors.PRIMARY.MAIN}
        />

        <div
          style={{
            background: Colors.WHITE.MAIN,
            height: "5px",
            width: "100%",
            margin: "5vh 0px 5vh 0px"
          }}
        ></div>
        <FlexedWrapper
          justify={"center"}
          align={"center"}
          direction={"column"}
          width={"70%"}
          leftElement={
            <>
              <LittleText align={"center"}>
                @ 2024 Smartbizcrux All Rights Reserved | Privacy Policy | Terms
                Of Use
              </LittleText>
            </>
          }
        />
      </Wrapper>
    </>
  );
};

function Socials() {
  return (
    <>
      <FlexedManyWrapper
        height={"100%"}
        width={"45%"}
        align={"left"}
        items={
          <>
            <ImageWrapper src={logo} alt={"logo"} />
            <LittleText color={Colors.WHITE.MAIN}>
              At SBC Technologies, we recognize that data has a lot of
              potentials and that in order to meet corporate objectives, it must
              be carefully handled to ensure its correctness, dependability, and
              security.
            </LittleText>
            <FlexedManyWrapper
              direction={"row"}
              align={"left"}
              width={"35%"}
              smallWidth={"40%"}
              items={
                <>
                  <IconWrapper alt={"social1"} src={social1} />
                  <IconWrapper alt={"social2"} src={social2} />
                  <IconWrapper alt={"social3"} src={social3} />
                  <IconWrapper alt={"social4"} src={social4} />
                </>
              }
            />
          </>
        }
        direction={"column"}
      />
    </>
  );
}

const IconWrapper = styled.img`
  width: 10%;
  height: 60%;
  object-fit: contain;
  cursor: pointer;

  @media (max-width: 1400px){
    width: 20%
  }
`;

const ImageWrapper = styled.img`
  object-fit: contain;
  width: 40%;
  height: 40%;
`;

function Links() {
  return (
    <>
      <FlexedManyWrapper
        direction={"column"}
        height={"90%"}
        width={"20%"}
        items={
          <>
            {linksData.map((item, id) => (
              <CustomLittleText color={Colors.WHITE.MAIN} key={id}>
                {item}
              </CustomLittleText>
            ))}
          </>
        }
      />
    </>
  );
}

const CustomLittleText = styled(LittleText)`
  cursor: pointer;
  line-height: 0px;
`;

const linksData = [
  "HOME",
  "ABOUT",
  "SERVICES",
  "BLOGS",
  "TEAMS",
  "COMMUNITY",
  "CONTACT US",
];

function Contact() {
  return (
    <>
      <FlexedManyWrapper
        direction={"column"}
        width={"40%"}
        align={"left"}
        height={"80%"}
        items={
          <>
            <CustomContactHeadText>CONTACT US</CustomContactHeadText>
            <FlexedManyWrapper
              direction={"column"}
              width={"100%"}
              align={"left"}
              height={"50%"}
              items={
                <>
                  <FlexedWrapper
                    width={"50%"}
                    align={"center"}
                    direction={"row"}
                    justify={"space-evenly"}
                    bgColor={Colors.PRIMARY.MAIN}
                    height={"30%"}
                    leftElement={
                      <>
                        <ContactIconWrapper src={mail} alt={"mail"} />
                      </>
                    }
                    rightElement={
                      <>
                        <LittleText>smartbizcrux.works@gmail.com</LittleText>
                      </>
                    }
                  />
                  <FlexedWrapper
                    width={"50%"}
                    align={"center"}
                    direction={"row"}
                    justify={"space-between"}
                    height={"30%"}
                    bgColor={Colors.PRIMARY.MAIN}
                    leftElement={
                      <>
                        <ContactIconWrapper src={phone} alt={"phone"} />
                      </>
                    }
                    rightElement={
                      <>
                        <LittleText>+234 702 503 5776</LittleText>
                      </>
                    }
                  />
                  <FlexedWrapper
                    width={"50%"}
                    align={"center"}
                    direction={"row"}
                    justify={"flex-start"}
                    height={"30%"}
                    bgColor={Colors.PRIMARY.MAIN}
                    leftElement={
                      <>
                        <ContactIconWrapper src={location} alt={"mail"} />
                      </>
                    }
                    rightElement={
                      <>
                        <LittleText>Akure Tech Hub, NIG</LittleText>
                      </>
                    }
                  />
                </>
              }
            />
            <LittleText>SUBSCRIBE TO OUR NEWSLETTER</LittleText>
            <SubscribeButton width={"80%"} />
          </>
        }
      />
    </>
  );
}

const ContactIconWrapper = styled.img`
  object-fit: contain;
  width: 15%;
  height: 30%;
`;

const CustomContactHeadText = styled(HeadText)`
  height: 10%;
`;

export default Footer;
