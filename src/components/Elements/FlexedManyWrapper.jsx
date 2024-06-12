import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import { Colors } from "../../Res/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: space-between;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  background: ${(props) =>
    props.bgColor ? props.bgColor : Colors.PRIMARY.MAIN};
  text-align: center;
  margin-top: ${(props) => (props.margin ? props.margin : "0px")};

  @media (max-width: 1400px) {
    margin-bottom: 5vh;
    display: ${(props) => (props.removeMobile === true ? "none" : "flex")};
    flex-direction: ${(props) => (props.invert ? "column" : props.direction)};
    width: ${(props)=> props.smallWidth ? props.smallWidth : props.width}
  }
`;

const FlexedManyWrapper = ({
  width,
  items,
  height,
  bgColor,
  margin,
  direction,
  align,
  removeMobile,
  invert,
  smallWidth
}) => {
  return (
    <>
      <Wrapper
        width={width}
        height={height}
        bgColor={bgColor}
        margin={margin}
        direction={direction}
        align={align}
        removeMobile={removeMobile}
        invert={invert}
        smallWidth={smallWidth}
      >
        {items}
      </Wrapper>
    </>
  );
};

Wrapper.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  bgColor: PropTypes.string,
  margin: PropTypes.string,
  direction: PropTypes.string,
  align: PropTypes.string,
  smallWidth: PropTypes.string
};

export default FlexedManyWrapper;
