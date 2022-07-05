import Character from "../Components/Character";
import {css} from "@emotion/react";
import {Content, Section, TextWrapper} from "../StyledComponents/Layout";
import {P, Span} from "../StyledComponents/Component";

import * as THREE from 'three'
import React, {Suspense, useRef, useState} from 'react'
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";
import {Html, OrbitControls, useProgress} from '@react-three/drei'

function Loader() {
    const {progress} = useProgress()
    return <Html center>{progress} % loaded</Html>
}

function Scene() {
    const object = useLoader(FBXLoader, "hello.fbx");
    let mixer = new THREE.AnimationMixer(object)
    let clips = object.animations;
    clips.forEach(function (clip) {
        mixer.clipAction(clip).play();
    });

    return <primitive object={object} scale={0.02} position={{x: 0, y: 0, z: 0}}/>;
}

function MyAnimatedBox() {
    const myMesh = React.useRef<THREE.Mesh>()
    useFrame(({clock}) => {
        myMesh.current!.rotation.x = clock.getElapsedTime()
    })
    return (
        // @ts-ignore
        <mesh ref={myMesh}>
            <boxGeometry/>
            <meshBasicMaterial color="royalblue"/>
        </mesh>
    )
}


function Box(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
        </mesh>
    )
}


function About() {
    return (
        <Content>
            <Section>
                <TextWrapper>
                    <Character custom={0} content={"M"}/>
                    <Character custom={1} content={"y"}/>
                    <Character custom={2} content={",\u00A0"}/>
                    <Character custom={3} content={"M"}/>
                    <Character custom={4} content={"y"}/>
                    <Character custom={5} content={"s"}/>
                    <Character custom={6} content={"e"}/>
                    <Character custom={7} content={"l"}/>
                    <Character custom={8} content={"f\u00A0"}/>
                    <Character custom={9} content={"&\u00A0"}/>
                    <Character custom={10} content={"I"}/>
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
            </Section>
        </Content>
    );
}

export default About;
