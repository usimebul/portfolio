import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Character from "../Components/Home/Character";

const Content = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.main};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9rem 3rem;
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

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

function About() {
  return (
    <Content>
      <TextWrapper initial="hidden" animate="visible" variants={list}>
        <Character custom={0} content={"H"} />
        <Character custom={1} content={"i"} />
        <Character custom={2} content={","} />
        <Character custom={3} content={"H"} />
        <Character custom={4} content={"i"} />
        <Character custom={5} content={","} />
        <Character custom={6} content={"H"} />
        <Character custom={7} content={"i"} />
        <Character custom={8} content={","} />
        <Character custom={9} content={"H"} />
        <Character custom={10} content={"i"} />
        <Character custom={11} content={","} />
        <Character custom={12} content={"H"} />
        <Character custom={13} content={"i"} />
        <Character custom={14} content={","} />
        <Character custom={15} content={"H"} />
        <Character custom={16} content={"i"} />
        <Character custom={17} content={","} />
      </TextWrapper>
    </Content>
  );
}

export default About;
