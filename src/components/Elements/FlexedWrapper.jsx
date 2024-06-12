import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Colors } from "../../Res/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  width: ${(props) => (props.width ? props.width : "100%")};
  background: ${(props) =>
    props.bgColor ? props.bgColor : Colors.PRIMARY.MAIN};
  padding-left: 10px;
  height: ${(props) => (props.height ? props.height : "70%")};

  @media (max-width: 1400px) {
    flex-direction: ${(props) =>
      props.immutable === true ? props.direction : "column"};
    justify-content: ${(props) =>
      props.immutable === true ? props.justify : "flex-start"};
    align-items: ${(props) =>
      props.immutable === true ? props.align : "flex-start"};
    width: ${(props) => (props.immutable === true ? "90%" : "100%")};
  }
`;

const FlexedWrapper = ({
  direction,
  justify,
  align,
  width,
  leftElement,
  rightElement,
  bgColor,
  height,
  immutable,
}) => {
  return (
    <>
      <Wrapper
        direction={direction}
        justify={justify}
        align={align}
        width={width}
        bgColor={bgColor}
        height={height}
        immutable={immutable}
      >
        {leftElement}
        {rightElement}
      </Wrapper>
    </>
  );
};

Wrapper.propTypes = {
  direction: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
};

export default FlexedWrapper;
