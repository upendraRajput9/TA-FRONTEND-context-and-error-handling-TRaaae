import React,{ useState } from "react";


const ThemeContext = React.createContext();
const ThemeProvider = (props)=>{
    const [darkMode,setMode]=useState(false)
    return(
    <ThemeContext.Provider value={{darkMode,setMode}}>{props.children}</ThemeContext.Provider>
    )
}
const ThemeConsumer = ThemeContext.Consumer;

export  {ThemeContext,ThemeProvider,ThemeConsumer}