import React from "react";
import styled from "styled-components";

import play from "../../Res/Assets/icons/playbtn.svg";


const Wrapper = styled.div`
width: 100%;
border-radius: 20px;
background: rgba(0, 0, 0, 0.1);
height: 55vh;
display: flex;
flex-diretion: column;
align-items: center;
justify-content: center;
margin: 10vh 0px 10vh 0px;

@media (max-width: 1400px){
    height: 25vh;
    margin: 0px 0px 4vh 0px;
  }
`;

const Button = styled.img`
object-fit: contain;
width: 10%;
height: 50%;
cursor: pointer;
`


const VideoComponent = ()=>{
    return (
        <>
            <Wrapper>
                <Button src={play} alt={"play"}/>
            </Wrapper>
        </>
    )
}

export default VideoComponent;