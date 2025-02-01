import { useContext } from "react";
import {AppContext} from "../context";

/**
 * Custom hook to access the AppContext.
 * Throws an error if used outside of an AppProvider.
 *
 * @returns {object} The context value from AppContext.
 * @throws {Error} If the hook is used outside of an AppProvider.
 */
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default useAppContext;
