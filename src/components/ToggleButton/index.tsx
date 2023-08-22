import { ReactComponent as Sun} from "../../assets/icon-sun.svg"
import { ReactComponent as Moon} from "../../assets/icon-moon.svg"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const ToggleButton = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <>
            <button 
                aria-label="Theme toggle button"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? <Moon/> : <Sun/>}
            </button>
        </>
    )
}

export { ToggleButton }