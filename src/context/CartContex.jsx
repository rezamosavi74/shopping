import { createContext, useReducer } from "react"

const initialState = {
    selectedItems: [],
    totalItems: 0,
}

const subCart = item => {
    const cartItems = item.reduce((total, product) => total + product.quantity, 0)
    return {totalItems: cartItems};
}


const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...subCart(state.selectedItems)
            }
        case "REMOVE":
            const newItmes = state.selectedItems.filter(item => item.id !== action.payload.id)
            console.log([...newItmes])
            return {
                ...state,
                selectedItems: [...newItmes],
                ...subCart(state.selectedItems)
            }
            
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...subCart(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...subCart(state.selectedItems)
            }
        default:
            return state
    }
}

export const cartContex = createContext();

const CartContexProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <cartContex.Provider value={{ state, dispatch }}>
            {props.children}
        </cartContex.Provider>
    )
}

export default CartContexProvider;