import "./index.css";

import { ThemeProvider } from "@mui/system";
import { AlertProvider } from "components/Alert";
import SnackBarProvider from "components/SnackBar/SnackBarProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SnackBarProvider>
            <AlertProvider>
              <QueryClientProvider client={queryClient}>
                <Router>
                  <App />
                </Router>
              </QueryClientProvider>
            </AlertProvider>
          </SnackBarProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
