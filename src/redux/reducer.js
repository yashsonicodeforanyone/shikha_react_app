

const initialState ={
    data:[]
}

export const cardDataReducer=(state=initialState , action)=>{
switch (action.type) {
    case "SHOW_CARD_DATA":
        return{
            ...state,
           data: action.payload
        }
      

    default:
       return state
}
}

const initialState1 ={
    showData : false
}
export const showHorizonalReducer=(state=initialState1 , action)=>{
    switch (action.type) {
        case "SHOW_HORIZONTAL":
            return{
                ...state,
                showData: action.payload
            }     
    
            default:
                return state
           
    }
}
const initialState2 ={
    showVerticalData : true
}
export const showVerticalReducer=(state=initialState2 , action)=>{
    switch (action.type) {
        case "SHOW_VERTICAL":
            return{
                ...state,
                showVerticalData: action.payload
            }     
    
            default:
                return state
           
    }
}



