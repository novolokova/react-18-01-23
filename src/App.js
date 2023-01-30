import React from "react";
import "./App.css";
// import Container from "./components/Grid/Container"; 
// import Row from "./components/Grid/Row";
// import Col from "./components/Grid/Col";
import Ciao from "./components/CiaoSection/Ciao";
import FlexContainer from "./components/FlexContainer";

function App() {
  return (
    <>
      <FlexContainer jCont="space-between" alingIt="center" flexDir="column" flWrap="nowrap">
    <Ciao username='Tom'/>
    <Ciao username='Tom'/>
    <Ciao username='Tom'/>
    </FlexContainer>
    <FlexContainer jCont="center" alingIt="start" flWrap="wrap">
    <Ciao username='Tom'/>
    <Ciao username='Tom'/>
    <Ciao username='Tom'/>
    </FlexContainer>
     
     </>
     /* <>
      <Container>
        <Row>
          <Col colNum={6}>
            <Ciao username="Tom" />
          </Col>
          <Col colNum={6}>
            <Ciao username="Tom" />
          </Col>
          <Col colNum={12}>
            <Ciao username="oooooo" />
          </Col>
          <Col colNum={6}>
            <Ciao username="Pit" />
          </Col>
          <Col colNum={6}>
            <Ciao username="Pit" />
          </Col>
        </Row>
        <Row>
          <Col colNum={3}>
            <Ciao username="Tom" />
          </Col>
          <Col colNum={3}>
            <Ciao username="Tom" />
          </Col>
          <Col colNum={3}>
            <Ciao username="Tom" />
          </Col>
          <Col colNum={3}>
            <Ciao username="Tom" />
          </Col>
        </Row>
      </Container>
    </> */
  );
}

export default App;
