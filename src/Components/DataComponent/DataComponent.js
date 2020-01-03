import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardList from '../Card/CardList';
import FilterList from "../FilterList/FilterList.container";
import Sort from "../Sort/Sort.container";
import SearchBox from "../SearchBox/SearchBox.container";
function handleSort(a, b, sortBy) {
  let first = a;
  let second = b;
  if (
    typeof first[sortBy] === "string" &&
    typeof second[sortBy] === "string"
  ) {
    first = first[sortBy].toUpperCase();
    second = second[sortBy].toUpperCase();
  }
  if (
    typeof first[sortBy] === "number" &&
    typeof second[sortBy] === "number"
  ) {
    first = first[sortBy];
    second = second[sortBy];
  }
  if (first > second) {
    return 1;
  }
  if (first < second) {
    return -1;
  }
  return 0;
}
const DataComponent = ({data, sortBy, sort}) => {
  if(sort==="asc"){
    data=data.sort((a,b)=>handleSort(a,b,sortBy))
  }else{
    data=data.sort((a,b)=>handleSort(a,b,sortBy)).reverse()
  }
    if(data.length===0){
      return<div className="noData"> NO data</div>
    }
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