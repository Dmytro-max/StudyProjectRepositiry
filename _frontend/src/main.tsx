import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./common/themeConfig.ts";
import Store from "./store/store.tsx";

// Define the state shape
interface State {
    store: Store;
}

// Create the store instance
const store = new Store();

// Create the context with the state type
export const Context = createContext<State>({
    store,
});

// Render the app with the context and theme provider
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Context.Provider value={{ store }}>
                <App />
            </Context.Provider>
        </ThemeProvider>
    </StrictMode>
);
