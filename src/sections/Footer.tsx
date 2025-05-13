import { motion } from "framer-motion";

export default function Footer() {
	return (
		<footer className="relative bg-[#0B1D0E] text-white px-8 py-16 overflow-hidden">
			{/* Content Grid */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 z-10 relative">
				{/* Left Section - Contact Info */}
				<div>
					<h2 className="text-2xl font-bold mb-4 flex  items-start gap-2">
						<img
							src="/logo-white.png"
							alt="logo"
							className="w-6 h-6 mt-2"
						/>
						GET IN <br /> TOUCH :
					</h2>
					<p className="text-gray-300 mb-1">
						email-address@gmail.com
					</p>
					<p className="text-gray-300">
						Noida, Uttar Pradesh 201009, IN
					</p>
				</div>

				{/* Right Section - Important Links */}
				<div>
					<h2 className="text-2xl font-bold mb-4">
						IMPORTANT LINKS :
					</h2>
					<ul className="text-gray-300 space-y-1">
						<li>
							<a href="#" className="hover:text-white transition">
								About Us
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white transition">
								Careers
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white transition">
								FAQs
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white transition">
								Terms & Conditions
							</a>
						</li>
					</ul>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />

			{/* Background Text */}
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ y: 20, opacity: 0.1 }}
				transition={{ duration: 1, ease: "easeOut" }}
				viewport={{ once: true }}
				className="absolute bottom-0 left-0 w-full text-center tracking-[-0.5rem] text-[120px] font-extrabold text-white opacity-10 select-none"
				style={{
					fontSize: "vw",
					lineHeight: "1",
					scaleY: 1.5,
				}}
			>
				KNOW YOUR COLLEGES
			</motion.div>
		</footer>
	);
}
