import ProfilePic from "../../assets/main.jpg";
import Banner from "./Banner";
import ContactModal from "../ContactModal";
import { useState } from "react";

function Hero() {
	const [showContact, setShowContact] = useState(false);

	return (
		<div className="px-14 pt-8">
			<ContactModal show={showContact} setShow={setShowContact} />
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
							className="w-32 rounded-3xl"
							alt="Profile Picture"
						/>
						<p className="text-primary-light font-extralight text-center text-[20px] w-80 mt-8">
							Hello! I’m Ayman Ait Laaguid, <br />a{" "}
							<span className="font-normal">full-stack developer</span>{" "}
							passionate about creating unique and memorable experiences.
						</p>
						<div className="flex gap-8 mt-16">
							<div className="primary-dark-button">
								<a href="https://drive.google.com/uc?id=1O0MiC3plsyVAG-ghBx8Jb3WNE1KDd2pz&export=download" >My Resume</a>
								<div className="circle-white pulse-white"></div>
							</div>
							<div className="primary-light-button" onClick={() => setShowContact(true)}>
								<button>Contact Me</button>
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
