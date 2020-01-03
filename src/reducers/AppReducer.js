const appInitalState = { data: [], loading: false, filter: [], searchTerm: "", sortBy: "name", sort: "asc"};

const filterObj = (state = appInitalState.filter, action) => {
  switch (action.type){
    case "FILTER":{
      let newState = [...state];
      let flag = newState.some(item=>item.filterName===action.filter.filterName);
      if(flag){
        if(action.action==="PUSH"){
          return newState.map(item=>{
            if(item.filterName===action.filter.filterName){
              return{
                filterName: item.filterName,
                value: [...item.value, action.filter.value]
              }
            }
            return item;
          })
        }
        else if(action.action==="POP"){
          let pop = newState.map(item=>{
            if(item.filterName===action.filter.filterName){
              return{
                filterName: item.filterName,
                value: item.value.filter(val=>val!==action.filter.value)
              }
            }
            return item;
          })
          return pop.filter(item=>item.value.length!==0);
        }
      }else{
        return [...newState, {filterName: action.filter.filterName, value: [action.filter.value]}]
      }
    }
    default:
      return state;
  }
 }

export default function appReducer(state = appInitalState, action) {
  switch (action.type) {
    case "DATA":
      return { ...state, data: action.data };
    case "LOADING":
      return { ...state, loading: action.loading };
    case "SEARCH":
      return { ...state, searchTerm: action.searchTerm };
    case "SORTBY":
      return { ...state, sortBy: action.sortBy };
    case "FILTER":
      return { ...state, filter: filterObj(state.filter, action)}
    case "SORT":
      return {...state, sort: action.sort}
    default:
      return state;
  }
}