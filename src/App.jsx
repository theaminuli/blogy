import MainApp from "./components/MainApp";
import { AppProvider } from "./providers";
import ThemeProvider from "./providers/ThemeProvider";

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
