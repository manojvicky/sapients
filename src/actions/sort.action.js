export function changeValue(value){
    return{
        type: "SORTBY",
        sortBy: value
    }
}
export function doSort(value){
    return{
        type: "SORT",
        sort: value
    }
}
