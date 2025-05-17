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
		<div className="flex flex-col overflow-hidden md:flex-row aspect-[1/2] md:aspect-video items-center justify-center gap-12 p-10 pb-0 px-6 md:py-10 md:px-30 bg-green-200 rounded-lg">
			{/* Left side - Dots and Labels */}
			<div className="flex md:flex-col gap-4 md:gap-0 items-start text-left">
				<h1 className="text-5xl md:text-[96px] z-10 text-right font-bold leading-tight">
					OU
					<br />
					R~
					<br />
					SOC
					<br />
					IALS
				</h1>
				<div className="flex flex-col items-start relative gap-4 md:ml-43 -translate-y-8">
					<div className="w-[2px] h-full absolute ml-[7px] mb-2 bg-black "></div>
					<br />
					<br />
					{socials.map((social, index) => (
						<div
							key={index}
							className="flex z-10 items-center gap-3 cursor-pointer"
							onClick={() => handleDotClick(index)}
						>
							<div
								className={`w-4 h-4 rounded-full transition-all duration-300 ${
									currentIndex === index
										? "bg-black scale-125"
										: "bg-black"
								}`}
							/>
							<span
								className={`text-lg md:text-4xl flex items-center gap-2 font-medium ${
									currentIndex === index
										? "text-black"
										: "text-gray-600"
								}`}
							>
								<i className={`${social.iconClass} `}></i>
								{social.platform}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Right side - Image Animation */}
			<div className="relative h-full md:translate-x-[20px]">
				<AnimatePresence mode="wait">
					<motion.a
						key={currentIndex}
						href={socials[currentIndex].link}
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 40 }}
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
