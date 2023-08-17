import Sun from "../../assets/icon-sun.svg"
import Moon from "../../assets/icon-moon.svg"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const ToggleButton = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? <img src={Moon} /> : <img src={Sun}/>}
            </button>
        </>
    )
}

export { ToggleButton }