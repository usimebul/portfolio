import styled from "@emotion/styled";
import {motion} from "framer-motion";

const SkillItem = styled.div`
  margin-top: 14px;
`

const SkillItemHeader = styled.div`
  font-size: 2.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.textColor.content};
  margin-bottom: 7px;
  display: block;
`

const SkillItemDetail = styled.div`
  font-size: 1.6rem;
  color: #8d8d8d;
`

const LevelIndicatorWrapper = styled.div`
  margin-top: 1em;
  background-color: #373737;
  height: 2px;
`
const LevelIndicator = styled(motion.div)`
  width: 0;
  height: 100%;
  background-color: #08fdd8;
`;

interface ItemProps {
    header: string;
    detail: string;
    level: string;
}

function Item({header, detail, level}: ItemProps) {
    return (
        <SkillItem>
            <SkillItemHeader>{header}</SkillItemHeader>
            <SkillItemDetail>{detail}</SkillItemDetail>
            <LevelIndicatorWrapper>
                <LevelIndicator
                    animate={{
                        width: level
                    }}
                    transition={{
                        duration: 0.6
                    }}/>
            </LevelIndicatorWrapper>
        </SkillItem>
    );
}

export default Item;