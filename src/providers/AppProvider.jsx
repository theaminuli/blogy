/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { BrowserRouter } from "react-router";
import {AppContext} from "../context";
import { initialState, rootReducer } from "../reducers";
/**
 * AppProvider component that sets up the application context and routing.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} The provider component with routing and context.
 */
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, initialState);

	return (
		<BrowserRouter>
			<AppContext.Provider value={{ state, dispatch }}>
				{children}
			</AppContext.Provider>
		</BrowserRouter>
	);
};

export default AppProvider;
