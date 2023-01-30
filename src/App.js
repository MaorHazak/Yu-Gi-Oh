import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Guides from "./component/Guides";
import HowToPlay from "./component/HowToPlay";
import Contact from "./component/Contact";
import React from "react";
import {
	BrowserRouter as router,
	Routes,
	Route,
	Switch,
	useNavigate,
	Link,
} from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Routes >
				<Route path="/" exact element={<Home/>} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/HowToPlay" element={<HowToPlay />} />
					<Route path="/Guides" element={<Guides />} />
			</Routes>
		
		</>
	);
}



export default App;


	// <router>
			// 	<Routes>
			// 		<Route path="/Contact">
			// 			<Contact />
			// 		</Route>
			// 		<Route path="/Contact" element={<Contact />} />
			// 		<Route path="/HowToPlay" element={<HowToPlay />} />
			// 		<Route path="/Guides" element={<Guides />} />
			// 		<Route path="/" element={<Home />} />
			// 	</Routes>
			// </router>