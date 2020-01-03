import DataComponent from "./DataComponent";
import { connect } from "react-redux";

export default connect(
    (state) => {
        const filterData = state.app.filter;
        const searchTerm = state.app.searchTerm;
        let data = state.app.data && state.app.data.results || [];
        if (filterData.length > 0) {
            data = filterData.reduce((arr, currentValue, index) => 
            {   
                let remData = [];
                if(index>0){
                    remData = arr;
                }else{
                    remData = data;
                }
                let lastData = [];
                currentValue.value.forEach(filter=>{
                    remData.forEach((item) => {
                        if(filter === (typeof item[currentValue.filterName] === "string" ? item[currentValue.filterName] : item[currentValue.filterName].name)){
                            lastData.push(item);
                        }
                    });
                });
                return lastData;
            }, [])
        }
        data=data.filter(item=>item.name.toLowerCase().includes(searchTerm.trim().toLowerCase()));
        return {
            data: data
        }
    },
    null
    )(DataComponent);
    // return [...remData.filter(item => currentValue.value === (typeof item[currentValue.filterName] === "string" ? item[currentValue.filterName] : item[currentValue.filterName].name))]