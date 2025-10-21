import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/Menu.js";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot replaces render
root.render(<App />);
