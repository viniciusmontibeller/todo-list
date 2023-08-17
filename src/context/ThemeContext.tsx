import { createContext, useState, useEffect, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>,
}

type ThemeProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType>(null!)

export const ThemeProvider = ({children}: ThemeProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const storageValue = localStorage.getItem("savedTheme")

        if(storageValue) {
            return JSON.parse(storageValue)
        } else {
            return "light";
        }
    });

    useEffect(() => {
        localStorage.setItem("savedTheme", JSON.stringify(theme))
    }, [theme])
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useThemeContext must be whitin a ThemeContextProvider");
    }
    return context
}