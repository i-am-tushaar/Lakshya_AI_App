import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./providers/ThemeProvider";
import { AITutorProvider } from "./contexts/AITutorContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AITutorProvider>
          <App />
        </AITutorProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
