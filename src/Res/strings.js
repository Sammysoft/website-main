import styled from "styled-components";
import { Colors } from "./colors";

export const HeadText = styled.p`
  color: ${(props) => (props.color ? props.color : Colors.WHITE.MAIN)};
  font-size: 2.5rem;
  font-weight: 800;
  text-align: ${(props) => (props.align ? props.align : "left")};
  height: ${(props) => (props.height ? props.height : "")};

  @media (max-width: 1400px){
    font-size: 1.5rem;

  }
`;

export const LittleText = styled.p`
  color: ${(props) => (props.color ? props.color : Colors.WHITE.MAIN)};
  font-size: 1.3rem;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 2.3rem;
  width: ${(props) => (props.width ? props.width : "85%")};
  opacity: 0.7;

  @media (max-width: 1400px){
    font-size: 0.8rem;
    line-height: 1.2rem;
    width: 90%
  }
`;
