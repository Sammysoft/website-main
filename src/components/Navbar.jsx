import React, { useEffect, useState } from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

import { Colors } from "../Res/colors";
import FlexedWrapper from "./Elements/FlexedWrapper";
import logo from "../Res/Assets/Images/logo.svg";
import FlexedManyWrapper from "./Elements/FlexedManyWrapper";

import harmburger from "../Res/Assets/icons/menu.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  background: ${Colors.PRIMARY.MAIN};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  width: 100%;
  background: ${Colors.PRIMARY.MAIN};
  height: 10vh;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  display: none;

  @media (max-width: 1400px) {
    display: flex;
  }
`;

const Navbar = () => {
  let thisRoute = window.location.pathname;

  const [nav, setNav] = useState();

  useEffect(() => {
    setNav(thisRoute);
  }, [thisRoute]);

  return (
    <>
      <Wrapper>
        <FlexedWrapper
          width={"80%"}
          direction={"row"}
          align={"space-between"}
          justify={"space-between"}
          leftElement={<>{MenuLogo()}</>}
          rightElement={<>{MenuList(nav)}</>}
        />
      </Wrapper>
      <MobileWrapper>
        <FlexedWrapper
          width={"80%"}
          height={"70%"}
          bgColor={Colors.PRIMARY.MAIN}
          immutable={true}
          direction={"row"}
          align={"center"}
          justify={"space-between"}
          leftElement={MenuLogo()}
          rightElement={
            <>
              <Harmburger src={harmburger} alt={"menu"} />
            </>
          }
        />
      </MobileWrapper>
    </>
  );
};

function MenuLogo() {
  return (
    <>
      <LogoImage src={logo} alt={"sbc-logo"} />
    </>
  );
}

const LogoImage = styled.img`
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

const Harmburger = styled.img`
  width: 10%;
  height: 50%;
  object-fit: contain;
`;

function MenuList(nav) {
  return (
    <>
      <FlexedManyWrapper
        width={"50%"}
        items={
          <>
            <MenuItem active={nav === "/" || nav === "/home" ? true : false}>
              Home
            </MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Datalab</MenuItem>
            <MenuItem>Courses</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Contact Us</MenuItem>
          </>
        }
      />
    </>
  );
}

const MenuItem = styled.div`
  color: ${(props) =>
    props.active ? Colors.PRIMARY.MAIN2 : Colors.WHITE.MAIN};
  font-weight: 400;
  width: 20%;
  height: 100%;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

MenuItem.propTypes = {
  active: PropTypes.bool,
};

export default Navbar;
