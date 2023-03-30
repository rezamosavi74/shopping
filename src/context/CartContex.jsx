import { createContext, useReducer } from "react"

const initialState = {
    slectedItems: [],
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.slectedItems.find(item => item.id === action.payload.id)) {
                state.slectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state
            }
    }
}

export const cartContex = createContext();

const CartContexProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    console.log(state)
    return (
        <cartContex.Provider value={{ state, dispatch }}>
            {props.children}
        </cartContex.Provider>
    )
}

export default CartContexProvider;