import { useContext } from "react";
import ProfilePic from "../assets/main.jpg";
import GState from "../contexts/GState";

function Footer() {

	const { contact, nav } = useContext(GState)

	return (
		<>
			<div className="bg-primary-light w-screen h-max relative bottom-[170px] px-14">
				<div className="flex justify-between items-stretch font-manrope">
					<div className="w-3/12 text-primary-dark flex justify-between items-end pb-3">
						<a href="https://www.linkedin.com/in/ayman-ait-laaguid-developer/" className="font-medium text-lg h-max">{"{LinkedIn}"}</a>
						<a href="https://github.com/AymanStarlight" className="font-medium text-lg h-max">{"{Github}"}</a>
					</div>
					<div className="w-6/12 flex flex-col items-center gap-10">
						<p className="text-primary-dark text-7xl font-semibold text-center">
							<span className="text-secondary-dark">Let&#39;s</span> create
							<br /> something cool?
						</p>
						<img
							src={ProfilePic}
							className="w-44 rounded-3xl"
							alt="Profile Picture"
						/>
						<div className="primary-light-button border-primary-dark mx-32" onClick={() => {contact.setShowContact(true); nav.setShowNav({nav: false, hero: false})}}>
							<button>Order a website </button>
							<div className="circle-black pulse-black"></div>
						</div>
					</div>
					<div className="w-3/12 text-primary-dark flex justify-between items-end pb-3">
						<a href="https://wa.me/qr/W4LMTG7IZIOGG1" className="font-medium text-lg h-max">{"{WhatsApp}"}</a>
						<a href="https://t.me/AymanStarlight" className="font-medium text-lg h-max">{"{Telegram}"}</a>
					</div>
				</div>
				<div className="mt-10 w-full flex justify-center items-center">
					<a
						href="mailto:laaguid.ayman@gmail.com"
						className="text-primary-dark text-[12.8vw] font-damn font-medium text-center tracking-wide lead"
					>
						LAAGUID.AYMAN@GMAIL.COM
					</a>
				</div>
			</div>
		</>
	);
}

export default Footer;
