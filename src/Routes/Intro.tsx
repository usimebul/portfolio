import Character from "../Components/Character";
import {Fragment} from "react";
import LongShadow from "../Components/LongShadow";
import {Content, P, TextWrapper} from "../Components/UI";
import {css} from "@emotion/react";

const list = {
    visible: {
        opacity: 1
    },
    hidden: {opacity: 0}
};

function Intro() {
    return (
        <Fragment>
            <LongShadow/>
            <Content>
                <TextWrapper
                    initial="hidden"
                    animate="visible"
                    variants={list}
                    aria-label={"Hi,\nI’m Jack,\nWeb Developer"}
                >
                    <Character custom={0} content={"H"}/>
                    <Character custom={1} content={"i"}/>
                    <Character custom={2} content={","}/>
                    <br/>
                    <Character custom={6} content={"I"}/>
                    <Character custom={7} content={"’"}/>
                    <Character custom={8} content={"m\u00A0\u00A0"}/>
                    <Character custom={9} content={"K"}/>
                    <Character custom={10} content={"u"}/>
                    <Character custom={11} content={"h"}/>
                    <Character custom={12} content={"w"}/>
                    <Character custom={13} content={"a"}/>
                    <Character custom={14} content={"n"}/>
                    <br/>
                    <Character custom={18} content={"w"}/>
                    <Character custom={19} content={"e"}/>
                    <Character custom={20} content={"b\u00A0\u00A0"}/>
                    <Character custom={21} content={"d"}/>
                    <Character custom={22} content={"e"}/>
                    <Character custom={23} content={"v"}/>
                    <Character custom={24} content={"e"}/>
                    <Character custom={25} content={"l"}/>
                    <Character custom={26} content={"o"}/>
                    <Character custom={27} content={"p"}/>
                    <Character custom={28} content={"e"}/>
                    <Character custom={29} content={"r"}/>
                </TextWrapper>
                <P css={css`letter-spacing: 4px`}
                   initial="hidden"
                   animate="visible"
                   variants={list}
                   transition={{delay: 20 * 0.15}}
                >
                    Front End Developer / PKI Expert
                </P>
            </Content>
        </Fragment>
    );
}

export default Intro;