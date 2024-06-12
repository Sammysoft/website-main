import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.template ? props.template : "45% 45%"};
  grid-gap: 5%;
  height: 80vh;

  @media (max-width: 1400px){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: fit-content;
      
  }
`;

const GridComponent = ({ element, template }) => {
  return (
    <>
      <Wrapper template={template}>{element}</Wrapper>
    </>
  );
};

Wrapper.propTypes = {
  template: PropTypes.string,
};

export default GridComponent;
