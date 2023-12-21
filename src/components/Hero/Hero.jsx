import ProfilePic from "../../assets/main.jpg";
import "../../styles/Hero.scss";
import Banner from "./Banner";
import ContactModal from "../ContactModal";
import cv from "../../assets/CV.jpg";
import { useState } from "react";

function Hero() {

	const [showContact, setShowContact] = useState(false)

	function toggleSlideover() {
		document
			.getElementById("slideover-container")
			.classList.toggle("invisible");
		document.getElementById("slideover-bg").classList.toggle("opacity-0");
		document.getElementById("slideover-bg").classList.toggle("opacity-50");
		document.getElementById("slideover").classList.toggle("translate-x-full");
	}

	return (
		<div className="px-14 pt-8">
			<ContactModal show={showContact} setShow={setShowContact} />
			<div
				id="slideover-container"
				className="w-full h-full fixed inset-0 invisible z-20"
			>
				<div
					onClick={toggleSlideover}
					id="slideover-bg"
					className="cursor-pointer w-full h-full ease-in-out duration-1000 transition-all inset-0 absolute opacity-0"
				></div>
				<div
					// onClick={toggleSlideover}
					id="slideover"
					className="flex flex-col justify-center items-center w-[75vw] bg-primary-light h-full absolute right-0 ease-south duration-1000 translate-x-full transition-all cursor-default"
				>
					<a
						href="#"
						className="cursor-pointer flex gap-3 justify-center items-center text-base font-bold text-primary-dark border border-primary-dark bg-primary-light rounded-lg px-6 py-3 mb-6"
					>
						Download PDF
						<div className="circle-black pulse-black"></div>
					</a>
					<img src={cv} alt="Resume" className="" />
				</div>
			</div>
			<section className="nav flex justify-between">
				<a className="text-secondary-light font-medium text-lg h-max">
					{"{Portfolio}"}
				</a>
				<a className="text-secondary-light font-medium text-lg h-max">
					{"{Services}"}
				</a>
				<div className="flex">
					<a className="text-secondary-light font-medium text-lg h-max">
						{"{En}"}
					</a>
					<div className="w-[500px] flex flex-col items-center">
						<img
							src={ProfilePic}
							className="w-32 grayscale rounded-3xl contrast-[1.1]"
							alt="Profile Picture"
						/>
						<p className="text-primary-light font-extralight text-center text-[20px] w-80 mt-8">
							Hello! I’m Ayman Ait Laaguid, <br />a{" "}
							<span className="font-normal">full-stack developer</span>{" "}
							passionate about creating unique and memorable experiences.
						</p>
						<div className="flex gap-8 mt-16">
							<div className="flex gap-3 justify-center items-center text-base font-bold text-secondary-light border border-secondary-light rounded-full px-6 py-3">
								<a href="#">My Resume</a>
								<div className="circle-white pulse-white"></div>
							</div>
							<div className="flex gap-3 justify-center items-center text-base font-bold text-primary-dark border border-secondary-light bg-primary-light rounded-full px-6 py-3">
								<button onClick={() => setShowContact(true)}>Contact Me</button>
								<div className="circle-black pulse-black"></div>
							</div>
						</div>
					</div>
					<a className="text-secondary-light font-manrope font-medium text-lg h-max">
						{"{Fr}"}
					</a>
				</div>
				<a className="text-secondary-light font-manrope font-medium text-lg h-max">
					{"{Stages}"}
				</a>
				<a className="text-secondary-light font-manrope font-medium text-lg h-max">
					{"{Reviews}"}
				</a>
			</section>
			<Banner />
		</div>
	);
}
export default Hero;
