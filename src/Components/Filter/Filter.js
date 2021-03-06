import React from "react";
import CheckBox from "./checkbox.container";
const Filter = ({data}) => {
    const gender = [...new Set(data.map(item=>item.gender))].map(item=> {return {value: item, filterName: 'gender'}});
    const species = [...new Set(data.map(item=>item.species))].map(item=> {return {value: item, filterName: 'species'}});
    const origin = [...new Set(data.map(item=>item.origin.name))].map(item=> {return {value: item, filterName: 'origin'}});
    const status = [...new Set(data.map(item=>item.status))].map(item=> {return {value: item, filterName: 'status'}});
    return (
    <div style={{border:"1px solid", height:"100%"}}>
        <div className="filter">Filters</div>
        <CheckBox data={gender}/>
        <CheckBox data={species}/>
        <CheckBox data={origin}/>
        <CheckBox data={status}/>
    </div>
    )
}

export default Filter;