import App from "./App";
import { connect } from "react-redux";
import action from "../../actions/app.action";

export default connect(
    (state)=>{
        return{
            loading: state.app.loading
        }
    },
    (dispatch)=>{
        return {
            action: (url) => dispatch(action(url))
        }
    }
)(App);