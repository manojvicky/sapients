import {combineReducers} from 'redux';
import AppReducer from "./AppReducer";
import ImageUrlReducer from "./ImageUrlReducer";
const imageURL = 'imageURL';
export default combineReducers({
    app: AppReducer,
    [imageURL]: ImageUrlReducer(imageURL)
});
