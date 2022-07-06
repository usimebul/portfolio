import {P, Text} from "../StyledComponents/Component";
import {Content, TextWrapper, Section} from "../StyledComponents/Layout";
import Character from "../Components/Character";
import {css} from "@emotion/react";

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
                        I've worked maintaining legacy PKI solutions. The first implementation
                        on this company is the browser-based PKI solution for providing
                        functionalities without a program installation. From this exprience, I
                        learned about the basics of HTML, CSS, Javascript, Browsers, Web APIs,
                        and Web Securitiy.
                    </Text>
                    <Text>
                        Also I implemented the service which intermediates among the app based
                        user authentication services such as Samsung Pass, (KT, SKT, LGT)
                        PASS, Naver Certifiate, Kakao Certificate, and Payco Certificate. And
                        I intergrated our authentication solutions (PKI solutions and app
                        based user authentication). From this exprience, I learned about
                        back-end works such as internet (HTTP, DNS, hosting, Firewall, Closed
                        Network, and etc.), frameworks and libariens (Spring Boot, Webpack,
                        and Babel), and servers (Apaceh, Tomcat, and JBoss EAP).
                    </Text>
                    <Text>
                        Now what I do is implements services (Mobile ID (mobile driver
                        license), MYDATA, and Cloud Certificates) and web pages
                        (administration) which is applied React and maintains solutions.
                    </Text>
                    <Text>
                        I'm skillfull in Front-End development and engineering and have basic
                        of Back-End works and the near-professional PKI knowledge.
                    </Text>
                </P>
            </Section>
            <div>
                <div>Front-end</div>
                <div>
                    <div>
                        <div>Basics</div>
                        <div>HTML, Javascript, CSS, Browsers, Web Accessibility, Web Security
                        </div>
                        <div>High</div>
                    </div>
                    <div>
                        <div>Framework and Libraries</div>
                        <div>React, React Native, Next.js, Styled Component, Emotion, Framer Motion, Threejs,
                            Babel, Webpack, Javascript Obfausctsor, forge
                        </div>
                        <div>Medium</div>
                    </div>
                </div>
            </div>
            <Section/>


        </Content>
    );
}

export default Skills;
