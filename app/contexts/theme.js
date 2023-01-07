'use client';
// 1. create the provider, that will provide the global state to my app
// 1.1 create the context
// 1.2 create the context wrapper (provider)


import { createContext, useEffect, useState } from "react"
// 1.1 create the context
export const ThemeContext = createContext();

// 1.2 create the context wrapper (provider)
export default function ThemeWrapper({children}){

    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        // retrieve theme from localStorage if it exists
        const theme = localStorage.getItem('theme');
        return theme === 'dark';
    });

    function initialThemeHandle(){
        // take the initial value
        isDarkTheme && document.querySelector("body").classList.add("dark"); // add dark class to the body element
    }
    
    function toggleThemeHandler() {
        setIsDarkTheme(!isDarkTheme);
        document.querySelector("body").classList.toggle("dark"); // add dark class to the body element
        // save theme to localStorage
        localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
    
    }
    
    const globalState = {
        isDarkTheme: true,
        toggleThemeHandler
    }

    useEffect(()=>initialThemeHandle());

    return(
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    )

}