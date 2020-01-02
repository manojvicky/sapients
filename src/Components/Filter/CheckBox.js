import React from 'react';

const Checkbox = ({data}) =>{
    const checkbox = data.length>0 ? data.map((item)=>{
        return(
            <div className="checkboxEach">
                <label htmlFor={item.value} className="checkboxLabel">{item.value}</label>
                <input id={item.value} type="checkbox" className="checkboxInput" value={item.value}/>
            </div>
        );
    }): null;
    if(data.length===0) null;
    return(
        <div className="checkboxWrapper">
        <div className="checkboxHeader">{data[0] && data[0].filterName}</div>
            {checkbox}
        </div>
    );
}
export default Checkbox;