function Project({ name, img, tech, desc }) {
	return (
		<div className="border-y border-secondary-dark/80 flex justify-between items-center pr-24 py-5">
			<div className="flex justify-start items-center gap-3 w-2/12">
				<div className="bg-primary-dark w-[14px] h-[14px] rounded-full"></div>
				<p className="text-2xl font-semibold text-primary-dark">{name}</p>
			</div>
			<div className="w-4/12">
				<p className="text-xl font-semibold text-primary-dark">{tech}</p>
			</div>
			<div className="w-4/12">
				<p className="text-base font-medium text-primary-dark/60">{desc}</p>
			</div>
		</div>
	);
}
export default Project;
