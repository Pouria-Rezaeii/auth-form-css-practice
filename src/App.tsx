import React from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from "./services/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
