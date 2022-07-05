import styled from "@emotion/styled";
import {motion} from "framer-motion";


export const P = styled(motion.p)`
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


export const Text = styled.span`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
`