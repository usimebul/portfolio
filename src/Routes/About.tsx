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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <motion.ul variants={container} initial="hidden" animate="show">
      <motion.li variants={item} />
      <motion.li variants={item} />
    </motion.ul>
  );
}

export default About;
