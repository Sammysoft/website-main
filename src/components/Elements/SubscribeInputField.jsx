import React from "react";
import styled from "styled-components";
import { Colors } from "../../Res/colors";
import Button from "./StyledButton";

import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  background: ${Colors.WHITE.MAIN};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);
  border-radius: 30px;


  @media (max-width: 1400px){
    width: 90%;
  }
`;

const Input = styled.input`
  width: 65%;
  border: none;
  background: transparent;
  padding: 20px;
  &: focus {
    border: none;
    outline: none;
  }
`;

const CustomButton = styled(Button)`
  height: 100%;
  width: 25%;
  margin: 0px;

  @media (max-width: 1400px){
    padding: 10px 0px 10px 0px;
    height: 120%;
  }
`;

const SubscribeButton = ({ width }) => {
  return (
    <>
      <Wrapper width={width}>
        <Input placeholder={"Your email"} />
        <CustomButton text={"Subscribe"} width={"30%"} />
      </Wrapper>
    </>
  );
};

Wrapper.propTypes = {
  width: PropTypes.string,
};

export default SubscribeButton;
