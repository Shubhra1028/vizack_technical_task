import { combineReducers } from 'redux';
import categoryReducer from './reducer_category';
import SelectedCategory from './reducer_selected_category';

const rootReducer = combineReducers({
    category : categoryReducer ,
    selectedCategory : SelectedCategory,
    count : 0
});

export default rootReducer;
