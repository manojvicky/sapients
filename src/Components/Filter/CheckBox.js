import React from 'react';

const Checkbox = ({data, action, filters}) =>{
    const defaultdata = data.map(item=>{
        return {...item, checked: false}
    });
    const newData = [];
    defaultdata.forEach(item=>{
        filters.forEach(val=>{
            if(val.filterName===item.filterName){
                val.value.forEach(item2=>{
                    if(item2===item.value){
                        item.checked = true;
                    }
                })
            }
        });
        newData.push(item);
    });
    const checkbox = newData.length>0 ? newData.map((item)=>{
        return(
            <div className="checkboxEach" key={`${item.value}${item.filterName}`}>
                <label htmlFor={item.value} className="checkboxLabel">{item.value}</label>
                <input id={item.value} type="checkbox" className="checkboxInput" value={item.value} name={item.value} checked={item.checked} onChange={(e)=>{action(e.target.checked ? "PUSH" : "POP", item);}}/>
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