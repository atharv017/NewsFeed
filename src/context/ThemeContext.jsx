import React, { createContext, useReducer } from 'react'

export const ThemeContext = createContext();

const initialState = {theme : 'light'};

export default function ThemeReducer(state,action){
    switch (action.type) {
        case "Toggle_Theme":
                return {theme : state.theme == 'light' ? 'dark' : 'light'};
        default:
            return state;
    }
}

export const ThemeProvider = ({children}) =>{
    const [state , dispatch] = useReducer(ThemeReducer , initialState);

    return(
        <ThemeContext.Provider value={{state , dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}