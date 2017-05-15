const initialState = [
    {
        name: "Acme product name",
        amount: 1,
        price: 300,
        id: 0
    }, {
        name: "Motorhead glasses black",
        amount: 1,
        price: 300,
        id: 1
    }
]

export default function itemCounter(state = initialState, action) {
    if (action.type === 'INCREASE') {
        return state.map((item, i) => {
            if (item.id === action.payload.id) {
                item.amount++;
            } 
            return item;
        })
    } else if (action.type === 'DECREASE') {
        return state.map((item, i) => {
            if (item.id === action.payload.id && item.amount > 0) {
                item.amount--;
            } 
            return item;
        })
    } return state;
}