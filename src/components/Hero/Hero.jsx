import ProfilePic from "../../assets/main.jpg";
import "../../styles/Hero.scss";
import Banner from "./Banner";

function Hero() {
	return (
		<div className="px-14 pt-8">
			<section className="nav flex justify-between">
				<a className="text-secondary-light font-medium text-lg">
					{"{Portfolio}"}
				</a>
				<a className="text-secondary-light font-medium text-lg">
					{"{Services}"}
				</a>
				<div className="flex">
					<a className="text-secondary-light font-medium text-lg">{"{En}"}</a>
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
								<a href="#">Contact Me</a>
								<div className="circle-black pulse-black"></div>
							</div>
						</div>
					</div>
					<a className="text-secondary-light font-manrope font-medium text-lg">
						{"{Fr}"}
					</a>
				</div>
				<a className="text-secondary-light font-manrope font-medium text-lg">
					{"{Stages}"}
				</a>
				<a className="text-secondary-light font-manrope font-medium text-lg">
					{"{Reviews}"}
				</a>
			</section>
			<Banner/>
		</div>
	);
}
export default Hero;
