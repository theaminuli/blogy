import { createContext } from 'react';


/**
 * @constant {React.Context} AppContext - A context object created using React's createContext API.
 * Initialized with a default value of null.
 */
const AppContext = createContext(null);


/**
 * Context for managing theme-related state and functionality.
 * 
 * @type {React.Context<null>}
 */
const ThemeContext = createContext(null);
export {
	AppContext,
	ThemeContext
};

