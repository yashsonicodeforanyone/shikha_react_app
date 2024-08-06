export function cardData(carddata){
    return{
        type:"SHOW_CARD_DATA",
        payload:{
            data:carddata
        }
    }
}

export function showHorizonal(showdata){
    return{
        type:"SHOW_HORIZONTAL",
        payload:{
            data:showdata
        }
    }
}

export function showVertical(showdata1){
    return{
        type:"SHOW_VERTICAL",
        payload:{
            data:showdata1
        }
    }
}
