import styled from "@emotion/styled";
import Character from "../Components/Home/Character";
import { motion } from "framer-motion";
import { Fragment } from "react";
import LongShadow from "../Components/Home/LongShadow";

const Content = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.main};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9rem 3rem;

  ::before,
  ::after {
    position: absolute;
    font-size: 1.8rem;
    font-family: "Dancing Script", cursive;
    color: ${(props) => props.theme.textColor.tag};
  }

  ::before {
    content: "<body>";
    top: 2rem;
    left: 4rem;
  }

  ::after {
    content: "</body>";
    bottom: 2rem;
    right: 4rem;
  }
`;

const TextWrapper = styled(motion.h1)`
  position: relative;
  padding-left: 5rem;
  font-family: "Raleway", sans-serif;
  width: fit-content;

  ::before,
  ::after {
    position: absolute;
    font-size: 1.8rem;
    font-family: "Dancing Script", cursive;
    color: ${(props) => props.theme.textColor.tag};
  }

  ::before {
    content: "<h1>";
    top: -3rem;
    left: 2rem;
  }

  ::after {
    content: "</h1>";
    bottom: -3rem;
    right: -4rem;
  }
`;

const P = styled(motion.p)`
  width: fit-content;
  padding-left: 5rem;
  font-size: 1.6rem;
  letter-spacing: 4px;
  margin-top: 3rem;
  display: block;
  color: #8d8d8d;
  position: relative;

  ::before,
  ::after {
    position: absolute;
    font-size: 1.8rem;
    font-family: "Dancing Script", cursive;
    color: ${(props) => props.theme.textColor.tag};
  }

  ::before {
    content: "<p>";
    top: -3rem;
    left: 2rem;
  }

  ::after {
    content: "</p>";
    bottom: -3rem;
    right: -4rem;
  }
`;

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  },
  hidden: { opacity: 0 }
};

function Home() {
  return (
    <Fragment>
      <LongShadow />
      <Content>
        <TextWrapper
          initial="hidden"
          animate="visible"
          variants={list}
          aria-label={"Hi,\nI’m Jack,\nWeb Developer"}
        >
          <Character custom={0} content={"H"} />
          <Character custom={1} content={"i"} />
          <Character custom={2} content={","} />
          <br />
          <Character custom={3} content={"I"} />
          <Character custom={4} content={"'"} />
          <Character custom={5} content={"m\u00A0\u00A0"} />
          <Character custom={6} content={"K"} />
          <Character custom={7} content={"u"} />
          <Character custom={8} content={"h"} />
          <Character custom={9} content={"w"} />
          <Character custom={10} content={"a"} />
          <Character custom={11} content={"n"} />
          <br />
          <Character custom={12} content={"w"} />
          <Character custom={13} content={"e"} />
          <Character custom={14} content={"b\u00A0\u00A0"} />
          <Character custom={15} content={"d"} />
          <Character custom={16} content={"e"} />
          <Character custom={17} content={"v"} />
          <Character custom={18} content={"e"} />
          <Character custom={19} content={"l"} />
          <Character custom={20} content={"o"} />
          <Character custom={21} content={"p"} />
          <Character custom={22} content={"e"} />
          <Character custom={23} content={"r"} />
        </TextWrapper>
        <P
          initial="hidden"
          animate="visible"
          variants={list}
          transition={{ delay: 24 * 0.15 }}
        >
          Front End Developer / React Expert
        </P>
      </Content>
    </Fragment>
  );
}

export default Home;
