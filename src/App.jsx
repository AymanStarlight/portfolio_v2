import Lenis from "@studio-freight/lenis";
import "./App.css";
import Hero from "./components/Hero/Hero";
import { useEffect } from "react";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
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
			duration: 1.8,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

	}, []);

	return (
		<div>
			<Hero />
			<Portfolio/>
		</div>
	);
}

export default App;
