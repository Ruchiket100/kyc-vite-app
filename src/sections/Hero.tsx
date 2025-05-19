import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SentenceRotator } from "../components/SenteceRotator";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const [startFall, setStartFall] = useState(false);
	const [showOverlay, setShowOverlay] = useState(false);
	const [startRotate, setStartRotate] = useState(false);

	useEffect(() => {
		const fallTimer = setTimeout(() => {
			setStartFall(true);
		}, 1000);
		const overlayTimer = setTimeout(() => {
			setShowOverlay(true);
		}, 2000);
		return () => {
			clearTimeout(fallTimer);
			clearTimeout(overlayTimer);
		};
	}, []);

	const capsData = [
		{
			left: -8, // vw
			top: 40, // vh
			url: "/caps/cap-1.png",
			duration: 2,
		},
		{
			left: -3, // vw
			top: 10, // vh
			url: "/caps/cap-1.png",
			duration: 2,
		},
		{
			left: 75, // vw
			top: 10, // vh
			url: "/caps/cap-1.png",
			duration: 2,
		},
		{
			left: 60, // vw
			top: 60, // vh
			url: "/caps/cap-1.png",
			duration: 2,
		},
		{
			left: 40,
			top: 20,
			url: "/caps/cap-2.png",
			duration: 2,
		},

		{
			left: -20,
			top: 10,
			url: "/caps/cap-2.png",
			duration: 2,
		},
		{
			left: 5,
			top: 30,
			url: "/caps/cap-4.png",
			duration: 2.7,
		},
		{
			left: 30,
			top: 0,
			url: "/caps/cap-4.png",
			duration: 2.7,
		},
		{
			left: 50,
			top: -35,
			url: "/caps/cap-4.png",
			duration: 2,
		},
		{
			left: 70,
			top: 40,
			url: "/caps/cap-5.png",
			duration: 2.3,
		},
		{
			left: 15,
			top: 0,
			url: "/caps/cap-5.png",
			duration: 2.3,
		},
		{
			left: 40,
			top: 60,
			url: "/caps/cap-6.png",
			duration: 2.1,
		},
		{
			left: 40,
			top: -10,
			url: "/caps/cap-6.png",
			duration: 2.1,
		},
	];

	useEffect(() => {
		const startTimer = setTimeout(() => setStartFall(true), 1000);
		const overlayTimer = setTimeout(() => setShowOverlay(true), 4000);

		return () => {
			clearTimeout(startTimer);
			clearTimeout(overlayTimer);
		};
	}, []);

	return (
		<div
			className={`relative px-4 md:px-30 flex flex-col overflow-hidden h-full  min-h-[49rem] w-full bg-[#c3fddc] transition-all duration-75`}
		>
			<div className="relative  w-full h-full z-[100]">
				<div className="z-30 my-auto w-full h-full mt-14">
					<div
						className={` z-[20] p-4 duration-400 transition-all md:hidden  ${
							showOverlay
								? "visible opacity-100"
								: "invisible opacity-0"
						}`}
					>
						<SentenceRotator />
					</div>
					<p
						className={`text-black mt-10 md:mt-0 text-sm md:text-2xl pb-4 transition-all duration-200 ${
							showOverlay
								? "visible opacity-100 translate-y-0"
								: "invisible opacity-0 -translate-y-10"
						}`}
					>
						Connecting you with Seniors from your Desired Colleges &
						Courses
					</p>
					<motion.div
						initial={{ x: "9vw", y: "5vh" }}
						animate={
							showOverlay
								? { x: isMobile ? "0" : "-0.4rem", y: 0 }
								: { x: "9vw", y: "8vh" }
						}
						transition={{
							duration: 0.6,
							ease: "easeInOut",
						}}
						className="z-[990] pointer-events-none flex"
					>
						<h1 className=" text-black uppercase tracking-tight leading-[0.83] font-[900] text-7xl md:text-[10vw]">
							know <br className="md:hidden" />
							your <br />
							<span className="font-[900] text-7xl md:text-[13vw] ">
								colleges
							</span>
						</h1>
					</motion.div>
					<br />
					<br />
					<br className="block md:hidden" />
					<br className="block md:hidden" />
					<br className="block md:hidden" />
					<br className="block md:hidden" />
					<div className="relative mt-auto flex items-end justify-between">
						<button
							className={`gap-2 md:mb-14 bg-accent/50 backdrop-blur-sm flex items-center rounded-full z-[20] px-6 py-2 font-extrabold text-2xl border border-black duration-200  transition-all cursor-pointer ${
								showOverlay
									? "visible opacity-100"
									: "invisible opacity-0"
							}`}
						>
							Get Started
							<i className="far fa-arrow-up-right" />
						</button>
						<div
							className={`z-[20] bottom-10 right-30 p-4 duration-400 transition-all hidden md:block ${
								showOverlay
									? "visible opacity-100"
									: "invisible opacity-0"
							}`}
						>
							<SentenceRotator />
						</div>
					</div>
					<div
						className={`hidden md:block w-[800px] h-[600px] bg-[#5BE38D] absolute top-0 right-0   duration-1000 ${
							showOverlay
								? "visible -translate-y-50 translate-x-190 rotate-60"
								: "invisible -translate-y-500 translate-x-400 rotate-0"
						}`}
					></div>
					<div
						className={`hidden md:block w-[800px]  h-[600px] bg-[#5BE38D] absolute top-0 bottom-0  duration-1000 transition-all ${
							showOverlay
								? "visible translate-y-100 -translate-x-180 -rotate-30 "
								: "invisible translate-y-400 -translate-x-0 rotate-0"
						}`}
					></div>
					<div
						className={`hidden md:block w-[800px] h-[600px] bg-[#5BE38D] absolute top-0 left-0  duration-1000 transition-all ${
							showOverlay
								? "visible  -translate-x-220 -translate-y-40 rotate-20"
								: "invisible -translate-x-400 rotate-0"
						}`}
					></div>
				</div>
			</div>
			{showOverlay && (
				<motion.svg
					width={isMobile ? "400" : "600"}
					height={isMobile ? "400" : "600"}
					viewBox="0 0 362 362"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute md:top-20 md:left-80 z-[9999] mix-blend-difference"
					initial={{ y: 500, opacity: 0, rotate: 0 }}
					animate={
						isMobile
							? { y: 210, left: -40, opacity: 1 }
							: { y: 0, opacity: 1 }
					}
					transition={{
						type: "spring",
						stiffness: 100,
						duration: 1,
						ease: "easeInOut",
						delay: 0.5,
					}}
					onAnimationComplete={() => setStartRotate(true)}
				>
					<motion.g
						animate={startRotate ? { rotate: 4 } : {}}
						transition={{
							type: "spring",
							stiffness: 100,
							duration: 0.5,
							ease: "easeInOut",
						}}
					>
						<path
							d="M55.0686 237.825C52.096 237.986 50.7297 234.186 53.1238 232.417L181.208 137.767C181.657 137.435 182.189 137.235 182.746 137.189L340.37 124.302C343.359 124.058 344.817 127.865 342.43 129.68L212.033 228.828C211.555 229.191 210.979 229.403 210.379 229.435L55.0686 237.825Z"
							fill="#07f96e"
						/>
						<path
							d="M186.5 176L120.325 231.066C116.107 233.1 108.269 239.039 110.659 246.527C113.049 254.015 115.701 262.325 118.29 270.437M118.29 270.437C115.345 271.377 110.053 275.128 112.443 282.616C114.833 290.104 121.32 290.097 124.265 289.157M118.29 270.437C118.727 270.283 127.124 267.617 130.112 276.977C132.502 284.465 127.21 288.217 124.265 289.157M124.265 289.157L130.99 340.725C134.333 341.033 141.664 340.619 144.242 336.496L124.265 289.157Z"
							stroke="#07f96e"
							strokeWidth="3"
							opacity={0.5}
						/>
						<path
							d="M292.224 235.808C292.634 237.093 292.136 238.493 291.007 239.231L229.793 279.25C229.334 279.55 228.801 279.718 228.253 279.737L156.497 282.172C155.155 282.218 153.946 281.366 153.537 280.086L141.523 242.444C140.926 240.573 142.258 238.642 144.219 238.536L213.857 234.775C214.456 234.742 215.033 234.531 215.511 234.167L273.439 190.121C275.088 188.867 277.482 189.623 278.112 191.597L292.224 235.808Z"
							fill="#07f96e"
						/>
					</motion.g>
				</motion.svg>
			)}
			{showOverlay && (
				<motion.div
					initial={{ height: 0, borderRadius: "100% 100% 0 0" }}
					animate={{ height: "100%", scale: 2 }}
					transition={{
						duration: 1.0,
						ease: "easeInOut",
					}}
					className="absolute bottom-0 left-0 w-full  bg-accent z-[20]"
				/>
			)}
			{capsData.map((cap, i) => (
				<motion.div
					key={i}
					className="absolute"
					style={{
						left: `${cap.left}vw`,
						top: `${cap.top}vh`,
					}}
					initial={{ y: -200 }}
					animate={
						startFall ? { y: 800, rotate: 0 } : { y: 0, rotate: 0 }
					}
					transition={{
						duration: cap.duration,
						ease: [0.42, 0, 1, 1],
					}}
				>
					<img src={cap.url} alt="cap" className="w-full h-auto" />
				</motion.div>
			))}
			{showOverlay && (
				<motion.div
					initial={{ height: 0, borderRadius: "100% 100% 0 0" }}
					animate={{ height: "100%", scale: 2 }}
					transition={{
						duration: 1.0,
						ease: "easeInOut",
					}}
					className="absolute bottom-0 left-0 w-full  bg-accent z-[20]"
				/>
			)}
		</div>
	);
};

export default Hero;
