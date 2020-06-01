import React from "react";
import ReactDOM from "react-dom";
import { MainLayout } from "apps/MainLayout";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<MainLayout />, document.getElementById("main-layout"));
});
