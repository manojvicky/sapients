import Checkbox from "./Checkbox";
import { connect } from "react-redux";
import action from "../../actions/filter.action";
export default connect(
    null,
    (dispatch)=>{
        return{
            action: (typeOfOperation, filter)=>dispatch(action(typeOfOperation, filter))
        }
    }
)(Checkbox);