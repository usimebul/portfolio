import styled from "@emotion/styled";
import LongShadow from "../Components/Home/LongShadow";

const Content = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.main};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9rem 3rem;
`;

function About() {
  return (
    <Content>
    </Content>
  );
}

export default About;
