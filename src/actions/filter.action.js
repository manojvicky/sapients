const filterAction = (action, filter) =>{
    return {
        type: "FILTER",
        action,
        filter
    }
}
export default filterAction;