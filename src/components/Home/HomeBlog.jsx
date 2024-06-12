import React from "react";
import styled from "styled-components";

import { Colors } from "../../Res/colors";
import FlexedWrapper from "../Elements/FlexedWrapper";
import { HeadText } from "../../Res/strings";
import { SmallLine } from "../Elements/SmallLine";
import GridComponent from "../Elements/GridElement";

import card1 from "../../Res/Assets/Images/card1.svg";
import card2 from "../../Res/Assets/Images/card2.svg";
import card3 from "../../Res/Assets/Images/card3.svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120vh;
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

const HomeBlog = () => {
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
                <HeadText color={Colors.BLACK.MAIN}>OUR BLOG</HeadText>
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
            template={"30% 30% 30%"}
            element={<>{cardData.map((item, id) => Blogs(item, id))}</>}
          />
        </MainWrapper>
      </Wrapper>
    </>
  );
};

function Blogs(item, id) {
  return (
    <>
      <BlogWrapper>
        <ImageWrapper src={item.image} alt={id + 1} />
        <CardHead>{item.head}</CardHead>
        <CardPosterWrapper>
          <Name>{item.postBy}</Name>
          <Date>{item.date}</Date>
        </CardPosterWrapper>
        <CardBody>{item.body}</CardBody>
        <ReadMore>Read more</ReadMore>
      </BlogWrapper>
    </>
  );
}

const cardData = [
  {
    image: card1,
    head: "Industry-Demanding tools for business analysis",
    body: "The role of business analysts in helping organizations extract actionable insights from data. We discuss the high demand for business analysts in today’s business landscape and their essential role in driving business growth. The focus of the meetup was on business analytics tools, which retrieve data from various sources and combine them into a centralized data warehouse. We highlight popular tools like Tableau, Power BI, and more. ",
    postBy: "Amaefule Chukwuemeka Timothy",
    date: "January 20, 2024",
  },
  {
    image: card2,
    head: "De Voyage Dans Analyses (Journey into Data Analysis)",
    body: "A journey into the exciting field of data analysis. We discuss the possibilities for skill development and valuable insights that a career in data analytics offers. With the right training, support, and determination, one can pave the way for a successful and fulfilling career in data analysis. Guest speaker Mr ACT shares valuable insights and advice for aspiring data analysts.",
    postBy: "Amaefule Chukwuemeka Timothy",
    date: "January 20, 2024",
  },
  {
    image: card3,
    head: "Data Analysis Process (Step-by-step)",
    body: "The essential steps of the data analysis process. We explore the crucial stages of collecting, cleaning, and transforming data using statistical methods and visualization techniques. Guest speaker Mr. ACT provides valuable insights into each step of the data analysis process, highlighting best practices and tips for uncovering meaningful insights and patterns.",
    postBy: "Amaefule Chukwuemeka Timothy",
    date: "January 20, 2024",
  },
];

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ImageWrapper = styled.img`
  object-fit: contain;
  width: 100%;
  height: 30%;
`;

const CardHead = styled.p`
  width: 100%;
  color: ${Colors.BLACK.MAIN};
  font-weight: 700;
  font-size: 1.5rem;
  text-align: left;
`;

const CardBody = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  text-align: justify;
  width: 100%;
  height: 50%;
`;

const CardPosterWrapper = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2vh;
`;

const Name = styled.div`
  width: 60%;
  font-size: 0.8rem;
  border-right: 1px solid ${Colors.PRIMARY.MAIN2};
  height: 100%;
`;

const Date = styled.div`
  width: 40%;
  font-size: 0.8rem;
  border-left: 1px solid ${Colors.PRIMARY.MAIN2};
  height: 100%;
  text-align: center;
`;

const ReadMore = styled.p`
  color: ${Colors.PRIMARY.MAIN2};
  border-bottom: 1px solid ${Colors.PRIMARY.MAIN2};
  font-size: 1rem;
  text-align: left;
`;

export default HomeBlog;
