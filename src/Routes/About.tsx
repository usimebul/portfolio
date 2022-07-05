import { Content, P, TextWrapper, Text } from "../Components/UI";
import Character from "../Components/Character";
import { css } from "@emotion/react";

function About() {
  return (
    <Content>
      <TextWrapper>
        <Character custom={0} content={"M"} />
        <Character custom={1} content={"y"} />
        <Character custom={2} content={",\u00A0"} />
        <Character custom={3} content={"M"} />
        <Character custom={4} content={"y"} />
        <Character custom={5} content={"s"} />
        <Character custom={6} content={"e"} />
        <Character custom={7} content={"l"} />
        <Character custom={8} content={"f\u00A0"} />
        <Character custom={9} content={"&\u00A0"} />
        <Character custom={10} content={"I"} />
      </TextWrapper>

      <P
        css={css`
          color: white;
          width: 40%;
          min-width: 37em;
        `}
      >
        <Text>
          I'm a Web Front-End Developer has experiences to develop cryptographic
          module, PKI solutions, and user authentication services. I'm aiming to
          be Front-End centric Full-Stack Developer and expanding my tech stack
          to server-side works (server, database, and infrastructure)
        </Text>
        <Text>
          I'm a Logician (INTP), problem solver, challenger, and positive
          person. I like to watch TV shows, read genre literature, sing a song.
          I love the song of IU, Akdong Musician, Maktub, and Jeong Seung-hwan.
          I work out more than three times a week, but I don't like workout.
        </Text>
        <Text>
          I'm interested in UI design, effects, animations and creating
          intuitive, dynamic user experiences.{" "}
        </Text>
      </P>
    </Content>
  );
}

export default About;
