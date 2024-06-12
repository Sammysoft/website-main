import React from "react";
import styled from "styled-components";
import { Colors } from "../../Res/colors";

import PropTypes from "prop-types";

const Wrapper = styled.div`
  color: ${(props) => (props.color ? props.color : Colors.WHITE.MAIN)};
  width: ${(props) => (props.width ? props.width : "100%")};
  text-align: center;
  background: ${(props) =>
    props.bgColor ? props.bgColor : Colors.PRIMARY.MAIN2};
  border-radius: 30px;
  border: ${(props) => (props.border ? "2px solid " + props.border : "")};
  padding: 20px;
  cursor: pointer;
  font-weight: 600;

  @media (max-width: 1400px) {
    padding: 12px;
    font-size: 0.8rem;
    width: ${(props) => (props.smaller ? "80%" : "50%")};
  }
`;

const Button = ({ width, text, color, border, bgColor, smaller }) => {
  return (
    <>
      <Wrapper
        width={width}
        color={color}
        border={border}
        bgColor={bgColor}
        smaller={smaller}
      >
        {text}
      </Wrapper>
    </>
  );
};

Wrapper.propTypes = {
  width: PropTypes.string,
  border: PropTypes.string,
  smaller: PropTypes.string
};

export default Button;
