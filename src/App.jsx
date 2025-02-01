import { Route, Routes } from "react-router";
import ArchiveLayout from "./components/archive";
import Footer from "./components/footer";
import { Header } from "./components/header";
import Home from "./components/Home";
import { Single } from "./components/single";
import { AppProvider } from "./providers";
import ThemeProvider from "./providers/ThemeProvider";
import { useContext } from "react";
import { ThemeContext } from "./context";
import MainApp from "./components/MainApp";

/**
 * The main application component that sets up the app's structure.
 * It includes the AppProvider for context, Header, Routes for navigation, and Footer.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const App = () => {
    return (
        <ThemeProvider>
            <AppProvider>
                <MainApp />
            </AppProvider>
        </ThemeProvider>
    );
};



export default App;