import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const AppretiationWall = () => {
	const appreciations = [
		{
			name: "Aarav Sharma",
			profile: "Undergraduate Student at Stanford University",
			college: "Stanford University",
			degree: "B.Sc.",
			appreciation:
				"I was overwhelmed with the college application process and unsure of where to start and this is when I stumbled upon Know Your Colleges! They connected me to a mentor who gave me personalised support, helped me identify my strengths and craft a compelling narrative for my applications. Thanks to Know Your Colleges, I applied to all my dream universities with personalised guidance from students at that university and put my best foot forward!",
		},
		{
			name: "Meera Patel",
			profile: "Graduate Student at MIT",
			college: "Massachusetts Institute of Technology",
			degree: "M.S.",
			appreciation:
				"Know Your Colleges made my application journey so much easier. The mentors were incredibly supportive and provided me with insights that I wouldn't have found anywhere else. Their guidance helped me secure admission to my dream program. I can't thank them enough!",
		},
		{
			name: "Rohan Gupta",
			profile: "Undergraduate Student at UC Berkeley",
			college: "University of California, Berkeley",
			degree: "B.A.",
			appreciation:
				"The mentorship I received from Know Your Colleges was invaluable. They helped me navigate the complexities of the application process and gave me the confidence to showcase my unique story. I'm now studying at my dream university, and I owe it all to their amazing team!",
		},
		{
			name: "Ananya Singh",
			profile: "Undergraduate Student at University of Oxford",
			college: "University of Oxford",
			degree: "B.A.",
			appreciation:
				"Thanks to Know Your Colleges, I was able to connect with mentors who had firsthand experience with the universities I was applying to. Their advice and encouragement were instrumental in helping me achieve my goals. I highly recommend their services!",
		},
		{
			name: "Kabir Malhotra",
			profile: "Graduate Student at Harvard University",
			college: "Harvard University",
			degree: "M.B.A.",
			appreciation:
				"Know Your Colleges provided me with the tools and support I needed to succeed. Their mentors were knowledgeable, approachable, and genuinely cared about my success. I couldn't have done it without them!",
		},
	];

	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % appreciations.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const appreciation = appreciations[index];

	return (
		<div
			style={{
				backgroundImage: `url('/a-texture.png')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="px-30 w-full h-[42rem] flex items-center justify-center"
		>
			<div className="flex flex-col gap-4 items-center">
				<h1 className="text-5xl font-bold">
					Appretiation
					<br />
					<span className="flex gap-6 items-center">
						Wall
						<img src="/heart.png" />
					</span>
				</h1>
			</div>
			<div className="relative w-full h-full flex items-center justify-center overflow-hidden">
				{/* Animated text in center circle */}
				<div className="relative w-full h-full overflow-hidden flex items-center justify-center">
					<AnimatePresence mode="wait">
						<motion.div
							key={index}
							initial={{ y: 400, opacity: 0, scale: 0.8 }}
							animate={{ y: 0, opacity: 1, scale: 1 }}
							exit={{ y: -400, opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.8, ease: "easeInOut" }}
							className="absolute flex flex-col items-center"
						>
							{/* Bubbles image */}
							<img
								src="/bubbles.png"
								alt="bubbles"
								className="w-full h-full object-contain"
							/>

							{/* Big appreciation circle with text */}
							<div
								className={`absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFAE00] w-140 h-140 
                                    
                                    `}
							>
								<div className="relative w-full h-full gap-8 flex flex-col items-center justify-center p-6 text-center">
									<img
										className="w-20 h-20 rounded-full"
										src="https://images.pexels.com/photos/31910663/pexels-photo-31910663/free-photo-of-person-fishing-at-tranquil-lake-under-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									/>
									<p className="text-md px-14">
										{appreciation.appreciation}
									</p>
									<div className="text-gray-500">
										<h3 className="text-sm ">
											{appreciation.name}
										</h3>
										<div className="text-xs">
											{appreciation.degree} |{" "}
											{appreciation.college}
										</div>
									</div>
									<span className="absolute left-8 top-50 -z-10 text-4xl font-extrabold text-white">
										<i className="fa-solid fa-quote-left" />
									</span>
									<span className="absolute right-8 bottom-50 -z-10 text-4xl font-extrabold text-white">
										<i className="fa-solid fa-quote-right" />
									</span>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default AppretiationWall;
