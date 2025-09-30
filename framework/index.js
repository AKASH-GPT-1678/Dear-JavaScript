import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document);
const params = new URLSearchParams();
const thingId = params.get("id");

root.render(
window.location.pathname === "/" ? <List /> : <Details/>
);