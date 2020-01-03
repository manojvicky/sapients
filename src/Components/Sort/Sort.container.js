import Sort from "./Sort";
import { connect } from "react-redux";
import {changeValue, doSort} from "../../actions/sort.action";
console.log("actions==>", changeValue, doSort);
export default connect(
    (state)=>{
        return{
            sortBy: state.app.sortBy
        }
    },
    (dispatch)=>{
        return{
            changeValue : (value)=>dispatch(changeValue(value)),
            doSort: (value)=>dispatch(doSort(value))
        }
    }
)(Sort);