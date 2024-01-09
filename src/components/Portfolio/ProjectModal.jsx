import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

const modal = {
	hidden: {
		x: "100vw",
	},
	visible: {
		x: 0,
		transition: {
			ease: [0.87, 0, 0.13, 1],
			duration: 1.6,
		},
	},
};

function ProjectModal({ project, setProject, setNavShow }) {
	return (
		<AnimatePresence mode="wait">
			{project.show && (
				<motion.div
					className="glass-bg w-full h-full fixed top-0 left-0 cursor-pointer opacity-0 z-10"
					variants={backdrop}
					initial="hidden"
					animate="visible"
					exit="hidden"
					onClick={(e) => {
						if (e.target === e.currentTarget) {setProject({ show: false }); setNavShow(true)}
					}}
				>
					<motion.div
						className="w-[75vw] bg-primary-dark h-full absolute right-0 cursor-default"
						variants={modal}
					>
						<div className="w-full relative flex font-manrope px-14 py-24">
							<div>
								<p className="font-medium text-base mr-40 mt-4 text-primary-light w-max">
									{"{Project Overview}"}
								</p>
							</div>
							<div className="grow flex flex-col gap-4">
								{project.info.name == "LGMS" ? (
									<p className="text-primary-light text-6xl font-semibold">
										Lionsgeek Management System
									</p>
								) : (
									<p className="text-primary-light text-7xl font-semibold">
										{project.info.name}
									</p>
								)}
								<p className="mt-4 text-primary-light text-lg w-11/12 mb-7">
									{project.info.bdesc}
								</p>
								<img
									src={project.info.img}
									alt="Project-Image"
									className="w-11/12 rounded-lg mb-5"
								/>
								<div className="flex justify-center gap-16">
									<a href={project.info.link} target="_blank" rel="noreferrer noopener" className={`text-base font-bold text-secondary-light border border-secondary-light rounded-full px-6 py-3 ${project.info.link ? "" : "cursor-not-allowed"}`}>
										Visite Webapp
									</a>
									<a href={project.info.glink} target="_blank" rel="noreferrer noopener" className={`text-base font-bold text-primary-dark border border-secondary-light bg-primary-light rounded-full px-6 py-3 ${project.info.glink ? "" : "cursor-not-allowed"}`}>
										Github Repo
									</a>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default ProjectModal;
