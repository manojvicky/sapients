import React from "react";
import CheckBox from "./CheckBox";
const Filter = ({data}) => {
    const gender = [...new Set(data.map(item=>item.gender))].map(item=> {return {value: item, filterName: 'gender', selected: false}});
    const species = [...new Set(data.map(item=>item.species))].map(item=> {return {value: item, filterName: 'species', selected: false}});
    const origin = [...new Set(data.map(item=>item.origin.name))].map(item=> {return {value: item, filterName: 'origin', selected: false}});
    const status = [...new Set(data.map(item=>item.status))].map(item=> {return {value: item, filterName: 'status', selected: false}});

    console.log('filters', data, gender, species, origin, status);
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