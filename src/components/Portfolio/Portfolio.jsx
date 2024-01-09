import { useContext, useState } from "react";
import LGMS1 from "../../assets/LGMS/LGMS-1.png";
import LGMS2 from "../../assets/LGMS/LGMS-2.png";
import LGMS3 from "../../assets/LGMS/LGMS-3.png";
import LGMS4 from "../../assets/LGMS/LGMS-4.png";
import Palettium1 from "../../assets/Palettium/Palettium-1.png";
import Palettium2 from "../../assets/Palettium/Palettium-2.png";
import Palettium3 from "../../assets/Palettium/Palettium-3.png";
import PortfolioV1 from "../../assets/PortfolioV1.png";
import Prompy1 from "../../assets/Prompy/Prompy-1.png";
import Prompy2 from "../../assets/Prompy/Prompy-2.png";
import Prompy3 from "../../assets/Prompy/Prompy-3.png";
import Prompy4 from "../../assets/Prompy/Prompy-4.png";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import GState from "../../contexts/GState";

function Portfolio() {
	const [project, setProject] = useState({
		show: false,
		info: {
			name: "",
			tech: "",
			desc: "",
			img: "",
		},
	});
	let { nav } = useContext(GState);

	return (
		<>
			<ProjectModal
				project={project}
				setProject={setProject}
				setNavShow={nav.setShowNav}
			/>
			<div className="bg-primary-light w-screen relative bottom-[170px] flex font-manrope px-14 py-40">
				<div>
					<p className="font-medium text-lg pr-40 pt-4">{"{Portfolio}"}</p>
				</div>
				<div className="grow">
					<p className="text-primary-dark text-8xl font-semibold">
						Projects <span className="text-secondary-dark">Overview</span>
					</p>
					<div className="flex flex-col gap-16 mt-12">
						<Project
							navShow={nav.setShowNav}
							show={setProject}
							name="LGMS"
							img={LGMS1}
							tech="PHP, Laravel, MySQL, TailwindCSS, Bootstrap."
							desc="Lionsgeek Management System, A complete management system for a school, co-working/studio-renting space."
							bdesc="LGMS is a complete feature-rich management system for studio/equipments reservations, human resources management, training programs organisation & much more. All with a full dynamic calendar to facilitate reserving without any conflict, and the ablity to generate legal contracts on the spot. "
							link={null}
							glink="https://github.com/saidlionsgeeek/lionsgeek_management"
						/>
						<Project
							navShow={nav.setShowNav}
							show={setProject}
							name="Prompy"
							img={Prompy1}
							tech="Next.js, React, Node.js, MongoDB, TailwindCSS."
							desc="An AI prompting tool brewed to unleash the creative powers of AI Platforms. Discover, Create and share the best prompts."
							bdesc="An AI prompting tool brewed to unleash the creative powers of AI Platforms. Discover, Create and share the best prompts."
							link="https://prompy.vercel.app"
							glink="https://github.com/AymanStarlight/prompy"
						/>
						<Project
							navShow={nav.setShowNav}
							show={setProject}
							name="Prompy (Laravel)"
							img={Prompy1}
							tech="PHP, Laravel, Livewire, TailwindCSS, MySQL."
							desc="An AI prompting tool brewed to unleash the creative powers of AI Platforms. Discover, Create and share the best prompts."
							bdesc="An AI prompting tool brewed to unleash the creative powers of AI Platforms. Discover, Create and share the best prompts."
							link={null}
							glink="https://github.com/AymanStarlight/prompy-laravel"
						/>
						<Project
							navShow={nav.setShowNav}
							show={setProject}
							name="Palettium"
							img={Palettium1}
							tech="React, VanillaJS, TailwindCSS."
							desc="A Feature-Rich Single Page Application for Creating, Viewing and Sharing Color Palettes."
							bdesc="A Feature-Rich Single Page Application for Creating, Viewing and Sharing Color Palettes."
							link="https://palettium.vercel.app/"
							glink="https://github.com/AymanStarlight/Palettium"
						/>
						<Project
							navShow={nav.setShowNav}
							show={setProject}
							name="Portfolio V1"
							img={PortfolioV1}
							tech="React, VanillaJS, SASS."
							desc="A simple personal portfolio to showcase my projects & my skills."
							bdesc="A simple personal portfolio to showcase my projects & my skills."
							link="https://aymanstarlight.github.io/"
							glink={null}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
export default Portfolio;
