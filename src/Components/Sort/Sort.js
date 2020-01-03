import React, {useState} from "react";
import Icon from "@material-ui/core/Icon";
const Sort = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="sortWrapper">
            <div className="sortone">
                Sort By : 
            </div>
            <div className="sorttwo">
            <select className="sortSelect" value={props.sortBy} onChange={(e)=>props.changeValue(e.target.value)}>
                <option value="id">id</option>
                <option value="name">name</option>
                <option value="status">status</option>
                <option value="gender">gender</option>
                <option value="species">species</option>

            </select>
            <div className="sortButtonWrapper">
                {
                    !toggle ? <Icon className="dropDownIcon" onClick={()=>{setToggle(!toggle); props.doSort("dec")}}>expand_more</Icon> : <Icon className="dropUpIcon" onClick={()=>{setToggle(!toggle); props.doSort("asc")}}>expand_less</Icon>
                }
            </div>
            </div>
        </div>
    );
}

export default Sort;
