import React from "react";
import { LuSunMoon } from "react-icons/lu";
import { TbSunHigh } from "react-icons/tb";
import { useTheme, THEME_LIGHT } from "../hooks/useTheme.hook";

function Toggle({ top = "", right = "", bottom = "", left = "" }) {
  const [themeMode, toggleTheme] = useTheme();

  return (
    <button
      className={`absolute ${top} ${right} ${bottom} ${left} m-4 p-2 focus:outline-none rounded-full bg-app-greenColor hover:bg-lime-500`}
      onClick={toggleTheme}
    >
      <span>{themeMode === THEME_LIGHT ? <LuSunMoon /> : <TbSunHigh />}</span>
    </button>
  );
}

export default Toggle;