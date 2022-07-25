import {P, Text} from "../StyledComponents/Component";
import {Content, TextWrapper, Section} from "../StyledComponents/Layout";
import Character from "../Components/Character";
import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {motion} from "framer-motion";

const SkillSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SkillSectionHeader = styled.div`
  font-size: 5.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.textColor.highlight};
  font-family: font-file-82132, sans-serif;
  display: block;
`

const SkillSectionBody = styled.div`

`

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

function Skills() {
    return (
        <Content>
            <Section>
                <TextWrapper>
                    <Character custom={0} content={"S"}/>
                    <Character custom={1} content={"k"}/>
                    <Character custom={2} content={"i"}/>
                    <Character custom={3} content={"l"}/>
                    <Character custom={4} content={"l"}/>
                    <Character custom={5} content={"s\u00A0"}/>
                    <Character custom={6} content={"&"}/>
                    <br/>
                    <Character custom={10} content={"E"}/>
                    <Character custom={11} content={"x"}/>
                    <Character custom={12} content={"p"}/>
                    <Character custom={13} content={"e"}/>
                    <Character custom={14} content={"r"}/>
                    <Character custom={15} content={"i"}/>
                    <Character custom={16} content={"e"}/>
                    <Character custom={17} content={"c"}/>
                    <Character custom={18} content={"e"}/>
                </TextWrapper>
                <P
                    css={css`
                      color: white;
                      width: 50%;
                      min-width: 37em;
                    `}
                >
                    <Text>
                        I've developed PKI related solutions and services.
                        The PKI solutions are used at webpages such as login and authorization.
                        To meet various client environment (OS and browsers), I expertise web engineering.


                        I've worked maintaining legacy PKI solutions. The first implementation
                        on this company is the browser-based PKI solution for providing
                        functionalities without a program installation. From this experience, I
                        learned about the basics of HTML, CSS, Javascript, Browsers, Web APIs,
                        and Web Security.
                    </Text>
                    <Text>
                        Also I implemented the service which intermediates among the app based
                        user authentication services such as Samsung Pass, (KT, SKT, LGT)
                        PASS, Naver Certificate, Kakao Certificate, and Payco Certificate. And
                        I integrated our authentication solutions (PKI solutions and app
                        based user authentication). From this experience, I learned about
                        back-end works such as internet (HTTP, DNS, hosting, Firewall, Closed
                        Network, and etc.), frameworks and librarians (Spring Boot, Webpack,
                        and Babel), and servers (Apaceh, Tomcat, and JBoss EAP).
                    </Text>
                    <Text>
                        Now what I do is implements services (Mobile ID (mobile driver
                        license), MYDATA, and Cloud Certificates) and web pages
                        (administration) which is applied React.
                    </Text>
                    <Text>
                        I'm skillfull in Front-End development and engineering and have basic
                        of Back-End works and the near-professional PKI knowledge.
                    </Text>
                </P>
            </Section>
            <Section>
                <SkillSection>
                    <SkillSectionHeader>Front-end</SkillSectionHeader>
                    <SkillSectionBody>
                        <SkillItem>
                            <SkillItemHeader>Basics</SkillItemHeader>
                            <SkillItemDetail>Internet and Browsers Mechanism, HTML(Semantic HTML, SEO,
                                Accessibility, Web Components), Javascript(Fetch API/Ajax, DOM manipulation, Event
                                Handling), CSS(Layouts(display, position, flex, grid), Animation, Responsive UI)
                            </SkillItemDetail>
                            <LevelIndicatorWrapper>
                                <LevelIndicator
                                    animate={{
                                        width: "90%"
                                    }}
                                    transition={{
                                        duration: 0.6
                                    }}/>
                            </LevelIndicatorWrapper>
                        </SkillItem>
                        <SkillItem>
                            <SkillItemHeader>Frameworks and Libraries</SkillItemHeader>
                            <SkillItemDetail>React, React Native, Next.js, Styled Component, Emotion, Framer Motion,
                                Threejs,
                                Babel, Webpack, Javascript Obfausctsor, forge.js
                            </SkillItemDetail>
                            <LevelIndicatorWrapper>
                                <LevelIndicator
                                    animate={{
                                        width: "60%"
                                    }}
                                    transition={{
                                        duration: 0.6
                                    }}/>
                            </LevelIndicatorWrapper>
                        </SkillItem>
                    </SkillSectionBody>
                </SkillSection>
                <SkillSection></SkillSection>
            </Section>
        </Content>
    );
}

export default Skills;
