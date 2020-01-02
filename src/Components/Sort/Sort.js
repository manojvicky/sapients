import React from "react";

const Sort = () => {
    return (
        <div className="sortWrapper">
            <select className="sortSelect">
                <option>name</option>
            </select>
            <div className="sortButtonWrapper">
                <button className="sortButton asc">asc</button>
                <button className="sortButton dec">dec</button>
            </div>
        </div>
    );
}

export default Sort;