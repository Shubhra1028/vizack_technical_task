
//State argument is not application state, only the state thisreducer is responsible for.
export default function (state = null, action) {
    switch(action.type){
        case 'CATEGORY_SELECTED': return action.payload;
    }
    return state;
}