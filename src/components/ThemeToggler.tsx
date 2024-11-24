import  { useState, useEffect } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme); // Save theme preference in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full  text-right">

   
    <button onClick={toggleTheme} className="p-2 h-[50px] w-[50px] rounded-full  bg-white text-black shadow-custom">
      {theme === "light" ? <DarkModeIcon/> : <LightModeIcon/>} {/* You can add icons or text */}
    </button>
    </div>
  );
};

export default ThemeToggler;
