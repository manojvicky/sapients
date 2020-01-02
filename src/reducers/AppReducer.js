const appInitalState = { data: [], loading: false, filter: [], searchTerm: "", sortBy: "id"};
export default function appReducer(state = appInitalState, action) {
  switch (action.type) {
    case "DATA":
      return { ...state, data: action.data };
    case "LOADING":
      return { ...state, loading: action.loading };
    case "FILTER":
      return { ...state, filter: action.filter };
    case "SEARCH":
      return { ...state, searchTerm: action.searchTerm };
    case "SORTBY":
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
}