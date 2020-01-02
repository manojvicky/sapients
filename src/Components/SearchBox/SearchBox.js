import React from "react";
const SearchBox = ({searchTerm, action}) => {
    return (
        <div className="searchbox">
            <input className="searchInputBox" placeholder="search by Name" type="text" value={searchTerm} onChange={
                (e)=>action(e.target.value)
            }/>
        </div>
    )
}

export default SearchBox;