import SearchBox from "./SearchBox";
import { connect } from "react-redux";
import action from "../../actions/searchBox.action";
export default connect(
    (state)=>{
        return{
            searchTerm: state.app.searchTerm
        }
    },
    (dispatch)=>{
        return{
            action : (searchTerm)=>dispatch(action(searchTerm))
        }
    }
)(SearchBox);