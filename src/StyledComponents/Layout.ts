import styled from "@emotion/styled";
import {motion} from "framer-motion";


export const Content = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.main};
  height: 100vh;
  display: flex;
  flex-direction: row;
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
`

export const Section = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`


export const TextWrapper = styled(motion.h1)`
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

