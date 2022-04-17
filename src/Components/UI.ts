import styled from "@emotion/styled";
import {motion} from "framer-motion";

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
    font-family: "La Belle Aurore", cursive;
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
  margin-left: 5rem;
  margin-bottom: 2em;
  width: fit-content;

  ::before,
  ::after {
    position: absolute;
    font-size: 1.8rem;
    font-family: "La Belle Aurore", cursive;
    color: ${(props) => props.theme.textColor.tag};
  }

  ::before {
    content: "<h1>";
    top: -3rem;
    left: 0;
  }

  ::after {
    content: "</h1>";
    bottom: -3rem;
    right: 0;
  }
`;

const P = styled(motion.p)`
  width: fit-content;
  margin-left: 5rem;
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;
  margin-top: 3rem;
  display: block;
  color: #8d8d8d;
  position: relative;


  ::before,
  ::after {
    position: absolute;
    font-size: 1.8rem;
    font-family: "La Belle Aurore", cursive;
    color: ${(props) => props.theme.textColor.tag};
  }

  ::before {
    content: "<p>";
    top: -3rem;
    left: 0;
  }

  ::after {
    content: "</p>";
    bottom: -3rem;
    right: 0;
  }
`;

export {
    Content,
    TextWrapper,
    P
}


