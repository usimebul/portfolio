import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@emotion/react";

const MotionSpan = styled(motion.span)`
  display: inline-block;
  color: ${(props) => props.theme.textColor.content};
  font-weight: 900;
  font-size: 10.3rem;
  line-height: 8.7rem;
  position: relative;
  z-index: 1;
`;

interface ICharacter {
  content: string;
}

function Character({ content }: ICharacter) {
  const theme = useTheme();
  const controls = useAnimation();
  const blastVariants = {
    hover: {
      color: theme.textColor.highlight,
      transition: {
        duration: 0.2
      }
    },
    blast: {
      scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
      scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
      transition: {
        times: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1],
        repeat: 0
      }
    }
  };

  const onMouseEnter = () => {
    controls.start("blast");
  };

  return (
    <MotionSpan
      onMouseEnter={onMouseEnter}
      animate={controls}
      variants={blastVariants}
      whileHover="hover"
    >
      {content}
    </MotionSpan>
  );
}

export default Character;
