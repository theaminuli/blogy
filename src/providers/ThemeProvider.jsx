/* eslint-disable react/prop-types */
import { useState } from "react";
import { ThemeContext } from "../context";

/**
 * ThemeProvider component that provides theme context to its children.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that will receive the theme context.
 * @returns {JSX.Element} The ThemeProvider component.
 */
const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;