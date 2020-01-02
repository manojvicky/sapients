import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardList from '../Card/CardList';
import FilterList from "../FilterList/FilterList";
import Sort from "../Sort/Sort";
import SearchBox from "../SearchBox/SearchBox.container";
const DataComponent = ({data}) => {
    return (
      <div style={{border:"1px solid", height:"100%", padding: "15px"}} >
        <FilterList/>
        <Row>
          <Col xs={10} sm={6} md={6} lg={6} xl={6}>
            <SearchBox />
          </Col>
          <Col xs={10} sm={6} md={6} lg={6} xl={6}>
            <Sort />
          </Col>
        </Row>
        <CardList data={data}/>
      </div>
    );
}

export default DataComponent;