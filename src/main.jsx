/**
 * Entry point of the React application.
 * 
 * This file imports necessary modules and renders the root component of the application.
 * 
 * Imports:
 * - StrictMode: A tool for highlighting potential problems in an application.
 * - createRoot: A method from react-dom/client to create a root to render the React component tree.
 * - App: The main application component.
 * - index.css: Global CSS styles for the application.
 * 
 * The application is rendered inside the HTML element with the id "root" using React's StrictMode.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
