import React from "react";
import ReactPlayer from "react-player";

const Guides = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<h1 dir="rtl">סרטון על הקהילה</h1>
				<div>
					<ReactPlayer
						width="300px"
						height="200px"
						controls={true}
						url="https://www.youtube.com/watch?v=AlULGQzmaqk"
					/>
				</div>

				<a
					dir="rtl"
					className="text-xl mt-2"
					href="https://docs.google.com/document/d/1uugb4E9EXCyvxTUbeRyfAa3ubiKqH-gjaaoVsG6vCAE/edit?usp=sharing">
					כל מה שצריך לדעת
				</a>
				<a
					dir="rtl"
					className="text-xl mt-2"
					href="https://formatlibrary.weebly.com/goat-card-pool.html">
					הקלפים המותרים
				</a>
				<a
					dir="rtl"
					className="text-xl mt-2"
					href="https://www.goatformat.com/cardpool.html">
					באנליסט
				</a>
				<a
					dir="rtl"
					className="text-xl mt-2"
					href="https://www.goatformat.com/home/category/tier-list">
					הסבר על tier list
				</a>
				<a
					dir="rtl"
					className="text-xl mt-2"
					href="https://www.goatformat.com/decks.html">
					סוגי חפיסות
				</a>
				<a
					dir="rtl"
					className="text-xl mt-2"
					href="https://www.youtube.com/watch?v=gm1uE_PZjIM">
					מדריך סייד דק
				</a>
			</div>
		</>
	);
};

export default Guides;
