import { createContext, useReducer } from "react"

const initialState = {
    selectedItems: [],
    totalItems: 0,
    totalPrice: 0,
    checkOut: false,
}

const subCart = item => {
    const totalItems = item.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = item.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2);
    return { totalItems, totalPrice };
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
                ...subCart(state.selectedItems),
                checkOut: false
            }
        case "REMOVE":
            const newItmes = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newItmes],
                ...subCart(newItmes),
                checkOut: false
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
        case "CHECKOUT":
            return {
                selectedItems: [],
                totalItems: 0,
                totalPrice: 0,
                checkOut: true,
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