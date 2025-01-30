/* eslint-disable react/prop-types */
import { useReducer } from "react";
import AppContext from "../context";
import { initialState, rootReducer } from "../reducers";

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;