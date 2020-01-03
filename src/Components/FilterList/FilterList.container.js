import FilterList from "./FilterList";
import action from "../../actions/filter.action";
import { connect } from "react-redux";

export default connect(
    (state)=>{
        const filter = [];
        state.app.filter.forEach(item=>{
            item.value.forEach(fil=>{
                filter.push(`${item.filterName}-${fil}`);
            })
        })
        return{
            filter
        }
    },
    (dispatch) =>{
        return {
            action: (typeOfOperation, filter) => dispatch(action(typeOfOperation, filter))
        }
    }
)(FilterList);