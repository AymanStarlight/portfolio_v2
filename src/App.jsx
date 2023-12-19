import Lenis from "@studio-freight/lenis";
import AnimatedCursor from "animated-cursor";
import "./App.css";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
	const [cordinates, setCordinates] = useState({});

	useEffect(() => {
		// const lenis = new Lenis({
		// 	duration: 1.2,
		// 	easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
		// 	direction: "vertical",
		// 	gestureDirection: "vertical",
		// 	smooth: true,
		// 	smoothTouch: false,
		// 	touchMultiplier: 2,
		// });
		const lenis = new Lenis({
			duration: 1,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		let blendOpts = {
			cursorInnerStyles: {
				backgroundColor: "white", // white
				mixBlendMode: "exclusion",
			},
			cursorOuterStyles: {
				backgroundColor: "white", // white
				mixBlendMode: "exclusion",
			},
			size: { inner: 8, outer: 40 },
			hoverScale: { inner: 1, outer: 1.6 }
		};

		const ac = AnimatedCursor(blendOpts);
		ac.init();
	}, []);

	return (
		<div>
			<Hero />
			<Portfolio />
			<div id="cursor">
				<div id="cursor-outer"></div>
				<div id="cursor-inner"></div>
			</div>
		</div>
	);
}

export default App;
