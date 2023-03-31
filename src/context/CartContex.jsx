import { createContext, useReducer } from "react"

const initialState = {
    selectedItems: [],
}

const cartReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state
            }
        case "REMOVE":
            const newItmes = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                selectedItems: [...newItmes]
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++;
            return {
                ...state
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--;
            return {
                ...state
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