// import React, { useState, useRef, useEffect } from "react";
// import { HiMenu } from "react-icons/hi";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { Link, Route, Routes } from "react-router-dom";
// import { Sidebar } from "./Sidebar";

// const Home = () => {
// 	return (
// 		<>
// 			<div>hello world 1</div>;
// 		</>
// 	);
// };

// export default Home;

import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";

export default function NavBar() {
	const [navbar, setNavbar] = useState(false);

	return (
		<nav className="w-full shadow-lg bg-sky-700">
			<div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 shadow-2xl  ">
				<div>
					<div className="flex items-center justify-between py-1 md:py-5 md:block  ">
						<Link to="/">
							<img
								className="rounded-full"
								src={logo}
								alt="Logo"
								style={{ height: "100px", width: "120%" }}
							/>
						</Link>

						<div className="md:hidden">
							<button
								className="p-2 text-black rounded-md outline-none focus:border-gray-500 focus:border "
								onClick={() => setNavbar(!navbar)}>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`justify-self-center  md:block md:pb-3 md:mt-0  ${
							navbar ? "block" : "hidden"
						}`}>
						<ul
							dir="rtl"
							className="items-center justify-start space-y-1 md:space-x-6 md:space-y-0 md:items-end">
							<div className="flex xl:flex-row sm:flex-col">
								<li className="text-black ml-4 hover:text-red-600">
									<Link to="/">
										<li className="text-lg">ראשי</li>
									</Link>
								</li>
								<li className="text-black ml-4 hover:text-red-600">
									<Link to="/HowToPlay">
										<li className="text-lg ">איך לשחק</li>
									</Link>
								</li>
								<li className="text-black ml-4 hover:text-red-600">
									<Link to="/Guides">
										<li className="text-lg ">מדריכים</li>
									</Link>
								</li>
								<li className="text-black hover:text-red-600">
									<Link to="/Contact">
										<li className="text-lg">צור קשר</li>
									</Link>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
