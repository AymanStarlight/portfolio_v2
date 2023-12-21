import { motion, AnimatePresence } from "framer-motion";

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
		transition: { delay: 0.4},
	},
};

function ContactModal({ show, setShow }) {
	return (
		<AnimatePresence mode="wait">
			{show && (
				<motion.div
					className="backdrop fixed top-0 left-0 w-full h-full bg-white/30 backdrop-blur-sm z-10 flex justify-center items-center"
					variants={backdrop}
					initial="hidden"
					animate="visible"
					exit="hidden"
					onClick={(e) => {
                        if (e.target === e.currentTarget) setShow(false)
                    }}
                    >
					<motion.div
						className="absolute w-[500px] h-[600px] bg-primary-dark rounded-3xl cursor-default"
						variants={modal}
					></motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default ContactModal;
