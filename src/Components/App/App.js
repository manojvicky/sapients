import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "../Filter/Filter.container";
import DataComponent from "../DataComponent/DataComponent.container";
import Spinner from 'react-bootstrap/Spinner'
import "../../../style.css";
const App = (props) =>{
    useEffect(()=>{
        const url = "https://rickandmortyapi.com/api/character/";
        props.action(url);
    }, []);
    return(
        <div className="main">
            <h1 style={{textAlign: 'center'}}>THE RICK AND MORTY APP</h1>
            {!props.loading ? 
            <Container style={{height:"80%"}}>
                <Row style={{height:"100%"}} noGutters>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                        <Filter/>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                        <DataComponent/>
                    </Col>
                </Row>
            </Container>
            :
            <Spinner animation="border"/>
            }
        </div>
    );
}
export default App;