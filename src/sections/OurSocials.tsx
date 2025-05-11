import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
	{
		platform: "Instagram",
		image: "/social.png",
		link: "https://instagram.com/knowyourcolleges_kyc",
		iconClass: "fab fa-instagram",
	},
	{
		platform: "LinkedIn",
		image: "/social.png",
		link: "https://linkedin.com/company/knowyourcolleges",
		iconClass: "fab fa-linkedin",
	},
	{
		platform: "Twitter",
		image: "/social.png",
		link: "https://twitter.com/knowyourcolleges",
		iconClass: "fab fa-twitter",
	},
];

export default function OurSocials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Auto-switch every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % socials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const handleDotClick = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div className="flex flex-col md:flex-row aspect-video items-center justify-center gap-12 p-10 px-30 bg-green-200 rounded-lg">
			{/* Left side - Dots and Labels */}
			<div className="flex flex-col items-start text-left">
				<h1 className="text-6xl font-bold leading-tight mb-6">
					OUR~
					<br />
					SOCIALS
				</h1>

				<div className="flex flex-col items-start gap-4 mt-2 ml-2">
					{socials.map((social, index) => (
						<div
							key={index}
							className="flex items-center gap-3 cursor-pointer"
							onClick={() => handleDotClick(index)}
						>
							<div
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									currentIndex === index
										? "bg-black scale-125"
										: "bg-gray-500"
								}`}
							/>
							<span
								className={`text-xl flex items-center gap-2 font-medium ${
									currentIndex === index
										? "text-black"
										: "text-gray-600"
								}`}
							>
								<i
									className={`${social.iconClass} text-lg`}
								></i>
								{social.platform}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Right side - Image Animation */}
			<div className="relative h-[400px] translate-x-[200px]">
				<AnimatePresence mode="wait">
					<motion.a
						key={currentIndex}
						href={socials[currentIndex].link}
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
						transition={{ duration: 0.8 }}
						className="block"
					>
						<img
							src={socials[currentIndex].image}
							alt={socials[currentIndex].platform}
							className="rounded-xl shadow-2xl w-full"
						/>
					</motion.a>
				</AnimatePresence>
			</div>
		</div>
	);
}
