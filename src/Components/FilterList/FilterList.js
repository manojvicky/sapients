import React from "react";

const FilterList = (props) => {
    const PopFilters = props.filter.map(item=>{
        const [filterName, value] = item.split("-");
        return(
        <span className="popspanWrapper" key={item}>
            <span className="filterName">{value}</span>
            <button className="filterButton" onClick={()=>{props.action("POP", {filterName, value})}}>X</button>
        </span>
        );
    })
    return(
        <div className="filterListData">
            <span>filter List:</span>
            <span className="nofilters">{props.filter.length>0 ? PopFilters :"No Filters"}</span>
        </div>
    ); 
}

export default FilterList;