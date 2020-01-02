const searchBoxAction = (searchTerm) =>{
    return {
        type: "SEARCH",
        searchTerm
    }
}
export default searchBoxAction;