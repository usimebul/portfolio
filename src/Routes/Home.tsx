import styled from "@emotion/styled";
import Character from "../Components/Home/Character";
import {Fragment} from 'react';
import LongShadow from "../Components/Home/LongShadow";

const Content = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.main};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9rem 3rem;

  ::before, ::after {
    position: absolute;
    font-size: 1.8rem;
    font-family: 'Dancing Script', cursive;
    color: ${props => props.theme.textColor.tag};
  }

  ::before {
    content: '<body>';
    top: 2rem;
    left: 4rem;
  }

  ::after {
    content: '</body>';
    bottom: 2rem;
    right: 4rem;
  }
`;

const TextWrapper = styled.h1`
  position: relative;
  padding-left: 5rem;
  font-family: "Raleway", sans-serif;
  width: fit-content;

  ::before, ::after {
    position: absolute;
    font-size: 1.8rem;
    font-family: 'Dancing Script', cursive;
    color: ${props => props.theme.textColor.tag};
  }

  ::before {
    content: '<h1>';
    top: -3rem;
    left: 2rem;
  }

  ::after {
    content: '</h1>';
    bottom: -3rem;
    right: -4rem;
  }
`;

const P = styled.p`
  width: fit-content;
  padding-left: 5rem;
  font-size: 1.6rem;
  letter-spacing: 4px;
  margin-top: 3rem;
  display: block;
  color: #8d8d8d;
  position: relative;

  ::before, ::after {
    position: absolute;
    font-size: 1.8rem;
    font-family: 'Dancing Script', cursive;
    color: ${props => props.theme.textColor.tag};
  }

  ::before {
    content: '<p>';
    top: -3rem;
    left: 2rem;
  }

  ::after {
    content: '</p>';
    bottom: -3rem;
    right: -4rem;
  }
`

function Home() {
    return (
        <Fragment>
            <LongShadow/>
            <Content>
                <TextWrapper aria-label={"Hi,\nI’m Jack,\nWeb Developer"}>
                    <Character content={"H"}/>
                    <Character content={"i"}/>
                    <Character content={","}/>
                    <br/>
                    <Character content={"I"}/>
                    <Character content={"'"}/>
                    <Character content={"m\u00A0\u00A0"}/>
                    <Character content={"K"}/>
                    <Character content={"u"}/>
                    <Character content={"h"}/>
                    <Character content={"w"}/>
                    <Character content={"a"}/>
                    <Character content={"n"}/>
                    <br/>
                    <Character content={"w"}/>
                    <Character content={"e"}/>
                    <Character content={"b\u00A0\u00A0"}/>
                    <Character content={"d"}/>
                    <Character content={"e"}/>
                    <Character content={"v"}/>
                    <Character content={"e"}/>
                    <Character content={"l"}/>
                    <Character content={"o"}/>
                    <Character content={"p"}/>
                    <Character content={"e"}/>
                    <Character content={"r"}/>
                </TextWrapper>
                <P>Front End Developer / React Expert</P>
            </Content>
        </Fragment>
    );
}

export default Home;
