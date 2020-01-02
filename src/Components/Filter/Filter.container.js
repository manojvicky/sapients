import Filter from "./Filter";
import { connect } from "react-redux";

export default connect(
    (state)=>{
        return{
            data: state.app.data && state.app.data.results || []
        }
    },
    null
)(Filter);