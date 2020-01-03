import CheckBox from "./Checkbox";
import { connect } from "react-redux";
import action from "../../actions/filter.action";
export default connect(
    (state)=>{
        return{
            filters: state.app.filter
        }
    },
    (dispatch)=>{
        return{
            action: (typeOfOperation, filter)=>dispatch(action(typeOfOperation, filter))
        }
    }
)(CheckBox);