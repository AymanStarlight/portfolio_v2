import { motion, AnimatePresence } from "framer-motion";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GState from "../contexts/GState";

const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

const modal = {
	hidden: {
		opacity: 0,
		y: "20vh",
		scale: 0.6,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { delay: 0.4 },
	},
};

function ContactModal() {
	const [loading, setLoading] = useState(false);

	const { contact, nav } = useContext(GState);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		setLoading(true);
		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result);
					alert("You email has been sent successfuly!");
					setLoading(false);
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<AnimatePresence mode="wait">
			{contact.showContact && (
				<motion.div
					className="backdrop fixed top-0 left-0 w-full h-full bg-white/30 backdrop-blur-sm z-10 flex justify-center items-center"
					variants={backdrop}
					initial="hidden"
					animate="visible"
					exit="hidden"
					onClick={(e) => {
						if (e.target === e.currentTarget) {
							contact.setShowContact(false);
							nav.setShowNav({ ...nav.showNav, nav: true });
						}
					}}
				>
					<motion.div
						variants={modal}
						className="absolute w-[500px] h-[600px] bg-primary-dark rounded-3xl cursor-default flex flex-col items-center pt-10 text-center"
					>
						<p className="text-primary-light text-5xl">
							{"Let's create something cool?"}
						</p>

						<div className="w-full px-8 pt-8">
							<form
								ref={form}
								onSubmit={sendEmail}
								className="flex flex-col justify-center gap-8 border-none"
							>
								<input
									type="text"
									name="user_name"
									placeholder="Peter QuillStar"
									className="cinput"
								/>
								<input
									type="email"
									name="user_email"
									placeholder="starlord@gmail.com"
									className="cinput"
								/>
								<textarea
									name="message"
									placeholder="Describe your task / how to contact you better?"
									className="cinput"
									rows={4}
								/>
								<button
									type="submit"
									className="primary-light-button"
									disabled={loading}
								>
									{loading ? "Sending..." : "Submit"}
								</button>
							</form>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default ContactModal;
