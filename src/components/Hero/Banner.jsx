import { motion, useScroll, useTransform } from "framer-motion";

function Banner() {

	let {scrollY} = useScroll();
	let y = useTransform(scrollY, [0, 1200], ['0%', '55%']);

	return (
		<div>
			<motion.div style={{ y }} className="mt-24">
				<h1 className="leading-[610px] text-[472px] text-center bg-center text-primary-light font-damn">
					AYMAN LAAGUID
				</h1>
			</motion.div>
			<div className="">
				<div
					className="bg-primary-light w-screen h-20 relative left-[-3.5rem] bottom-[170px] rounded-t-full "
					style={{ boxShadow: "0px -55px 122px 35px rgba(14,14,14,0.70)" }}
				></div>
				<div className="bg-primary-light w-screen h-screen relative left-[-3.5rem] bottom-[170px] "></div>
			</div>
		</div>
	);
}
export default Banner;
