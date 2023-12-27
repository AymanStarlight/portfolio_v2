import Lenis from "@studio-freight/lenis";
import AnimatedCursor from "animated-cursor";
import "./App.css";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
import LoadingOverlay from "react-loading-overlay-ts";
import BarLoader from "react-spinners/BarLoader";

function App() {
	const [active, setActive] = useState(true);

	useEffect(() => {
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
			hoverScale: { inner: 1, outer: 1.7 },
		};

		const ac = AnimatedCursor(blendOpts);
		ac.init();

		setTimeout(() => {
			setActive(false);
		}, 2000);
	}, [active]);

	return (
		<LoadingOverlay
			active={active}
			text="This Website is still under construction"
			spinner={<BarLoader color="#e2dfd9" speedMultiplier={0.8} width={180} />}
			styles={{
				wrapper: {
					height: "100vh",
				},
				overlay: (base) => ({
					...base,
					background: "#0e0e0e",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}),
				content: {
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: 25,
					color: "#e2dfd9",
					fontFamily: "Manrope",
				},
			}}
		>
			<div
				className={active ? "h-full overflow-hidden content" : "h-max content"}
			>
				<Hero />
				<Portfolio />
				<Footer />
			</div>
			<div className="mobile h-1/2 bg-primary-dark flex flex-col justify-center items-center gap-4 text-primary-light font-manrope mt-28">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="57.76257"
					height="42.77667"
					viewBox="0 0 57.76257 42.77667"
				>
					<path
						d="M11.95807,9.16698c-3.74727,4.03459-7.49455,8.06917-11.24182,12.10376-1.37202,1.47722-.64613,3.49155,1.10317,4.17846,4.62035,1.81431,8.79785,4.64518,12.28856,8.16049,2.27051,2.28651,5.80634-1.24872,3.53553-3.53553-4.12829-4.15739-9.05087-7.30861-14.49489-9.44635l1.10317,4.17846c3.74727-4.03459,7.49455-8.06917,11.24182-12.10376,2.18766-2.35539-1.34005-5.89935-3.53553-3.53553h0Z"
						fill="#e2dfd9"
						origin="undraw"
					/>
					<path
						d="M42.26896,12.70251c3.74727,4.03459,7.49455,8.06917,11.24182,12.10376,.36772-1.39282,.73545-2.78564,1.10317-4.17846-5.44399,2.13773-10.36664,5.289-14.49489,9.44635-2.26983,2.28583,1.26405,5.82303,3.53553,3.53553,3.49076-3.51537,7.66813-6.34615,12.28856-8.16049,1.7493-.68691,2.47519-2.70124,1.10317-4.17846-3.74727-4.03459-7.49455-8.06917-11.24182-12.10376-2.19454-2.3628-5.72413,1.17913-3.53553,3.53553h0Z"
						fill="#e2dfd9"
					/>
					<path
						d="M24.69051,40.9371c4.91551-12.58945,9.83102-25.17889,14.74653-37.76834,.49121-1.25808-.54011-2.74392-1.7461-3.0753-1.41591-.38905-2.58229,.48342-3.0753,1.7461-4.91551,12.58945-9.83102,25.17889-14.74653,37.76834-.49121,1.25808,.54011,2.74392,1.7461,3.0753,1.41591,.38905,2.58229-.48342,3.0753-1.7461h0Z"
						fill="#e2dfd9"
					/>
				</svg>
				<p className="text-lg">Mobile Version: Coming Soon.</p>
			</div>
			<div id="cursor">
				<div id="cursor-outer"></div>
				<div id="cursor-inner"></div>
			</div>
		</LoadingOverlay>
	);
}

export default App;
