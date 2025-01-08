import { useState, useEffect } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlightRound } from "react-icons/md";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div onClick={toggleTheme} className=" flex justify-center items-center rounded-full border border-gray-400 p-1 cursor-pointer ">
        {theme === "dark" ? (<MdOutlineLightMode size={20} className="dark:text-gray-100" />) : ( <MdOutlineNightlightRound size={20} className="rotate-[320deg] dark:text-gray-100"/>)}
      </div>
  );
}
