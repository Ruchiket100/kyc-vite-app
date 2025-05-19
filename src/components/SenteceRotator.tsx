"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sentences = [
	"Not Just Colleges,\nReal People.\n Real Stories.",
	"Ask A Senior!\n One Conversation Can\nChange Your Life.",
	"Know The Truth\n Behind The\nCampus Walls.",
];

export const SentenceRotator = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState("up");

	useEffect(() => {
		const interval = setInterval(() => {
			setDirection("up");
			setActiveIndex((prev) => (prev + 1) % sentences.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative h-[5rem] md:min-h-[10rem] md:w-[600px] overflow-hidden">
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={activeIndex}
					custom={direction}
					initial={{ y: direction === "up" ? 150 : -150, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: direction === "up" ? -150 : 150, opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					className="absolute w-full text-md md:text-4xl font-extrabold text-end"
				>
					{sentences[activeIndex].split("\n").map((line, i) => (
						<span key={i} className="block">
							{line}
						</span>
					))}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
