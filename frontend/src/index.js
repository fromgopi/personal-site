import React from 'react'
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css"

const rootEntry = document.getElementById("root");
const root = createRoot(rootEntry);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)