import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AiFillCloseCircle } from "react-icons/ai";
import reportWebVitals from "./reportWebVitals";
import {
	createBrowserRouter,
	RouterProvider,
	BrowserRouter,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navbar />,
	},
	{
		path: "/",
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
	// <RouterProvider
	// 	router={router}
	// 	fallbackElement={<AiFillCloseCircle />}></RouterProvider>
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
