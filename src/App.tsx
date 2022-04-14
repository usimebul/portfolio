import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Skills from './Routes/Skills';
import Contact from './Routes/Contact';
import Work from "./Routes/Work";
import Navbar from "./Components/Navbar";
import styled from "@emotion/styled";


const Container = styled.div`
  position: relative;
`

const Tag = styled.div`
  position: absolute;
  top: 2rem;
  left: 4rem;
  bottom: auto;
  font-size: 1.8rem;
  font-family: 'Dancing Script', cursive;
  color: ${props => props.theme.textColor.tag};
`

function App() {
    return (
        <Router>
            <Navbar/>
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/skills' element={<Skills/>}/>
                    <Route path='/work' element={<Work/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
