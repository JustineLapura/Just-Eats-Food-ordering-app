"use client"

import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("light")

    const toggle = () => {
        setMode(prev => prev === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={mode === "light" ? "text-black bg-gray-50 ease-in duration-300" : "bg-black text-gray-50 ease-in duration-300"}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}