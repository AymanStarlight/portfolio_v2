function NavBar({ setShowContact, show }) {
	let styles = `fixed bottom-0 m-[0 auto] left-0 right-0 z-40 flex justify-center mb-8 transition-all duration-400 ${show ? '' : 'opacity-0'} `
	return (
		<div className={styles}>
			<div className="text-secondary-light flex justify-between items-center gap-16 font-manrope glass-bg w-max py-3 px-8 rounded-full">
				<a
                    href="#"
					className="font-medium text-lg h-max"
				>
					{"{Portfolio}"}
				</a>
				<a
					className="font-medium text-lg h-max"
				>
					{"{Services}"}
				</a>
				<div
					className="primary-light-button"
					onClick={() => setShowContact(true)}
				>
					<button>Order a website </button>
					<div className="circle-black pulse-black"></div>
				</div>

				<a
					className="font-medium text-lg h-max"
				>
					{"{WhatsApp}"}
				</a>
				<a
					className="font-medium text-lg h-max"
				>
					{"{Telegram}"}
				</a>
			</div>
		</div>
	);
}

export default NavBar;
