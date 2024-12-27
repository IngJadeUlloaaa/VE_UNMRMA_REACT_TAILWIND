import { useEffect, useState } from "react"

export const THEME_DARK = "dark"
export const THEME_LIGHT = "light"

export const useTheme = () => {
    const [themeMode, setThemeMode] = useState(THEME_LIGHT)

    const toggleThemeMode = () => {
        if(themeMode === THEME_DARK) {
            setThemeMode(THEME_LIGHT)
        } else {
            setThemeMode(THEME_DARK)
        }
    }

    useEffect(() => {
        if(themeMode === THEME_DARK) {
            document.body.classList.add(THEME_DARK)
        } else {
            document.body.classList.remove(THEME_DARK)
        }
    }, [themeMode])

    return [themeMode, toggleThemeMode]
}