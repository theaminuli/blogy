import { useContext } from "react";
import { Route, Routes } from "react-router";
import { ThemeContext } from "../context";
import ArchiveLayout from "./archive";
import Footer from "./footer";
import { Header } from "./header";
import Home from "./Home";
import { Single } from "./single";

const MainApp = () => {
	const { darkMode } = useContext(ThemeContext);
	return (
		<main className={`w-full h-full bg-white dark:bg-gray-900 ${darkMode ? "dark" : ""}`}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:slug" element={<Single />} />
				<Route path="/categories/:id" element={<ArchiveLayout />} />
			</Routes>
			<Footer />
		</main>
	);
};

export default MainApp;
