import styled from "@emotion/styled";
import Character from "../Components/Home/Character";
import {Fragment} from 'react';
import LongShadow from "../Components/Home/LongShadow";

const Content = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.main};
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 9rem 3rem;
`;

const TextWrapper = styled.h1`
  padding-left: 5rem;
  font-family: "Raleway", sans-serif;
`;

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
            </Content>
        </Fragment>
    );
}

export default Home;
