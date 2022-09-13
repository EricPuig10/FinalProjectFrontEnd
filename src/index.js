import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Router from "./applications/Router";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/system";


// const theme = createTheme({
//     palette: {
//       primary: {
//         main: '#3f50b5',
//       },
//       secondary: {
//         main: '#f44336',
//       },
//     },
//   });




// const theme = createTheme(container);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Router />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
