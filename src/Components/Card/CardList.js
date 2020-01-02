import React from "react";
import Card from '../Card/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardList = ({data}) =>{
return(
    <Row style={{justifyContent: "center"}}>
        {
            data.length ? data.map(character=>{
                return(
                  <Col xs={10} sm={6} md={4} lg={3} xl={3} key={character.id}>
                    <Card data={character} />
                  </Col>
                );
              })
              : null
        }
    </Row>
)
}
export default CardList;