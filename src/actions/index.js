export function selectCategory(category){
    //selectBook is an actionCreator. so it needs to return an action;
    //an obj with type property;
    return {
        type : 'CATEGORY_SELECTED',
        payload: category
    };
}




export function showResults(answers){
    console.log(answers)
    return {
        type : 'RESULTS',
        payload: answers
    };
}