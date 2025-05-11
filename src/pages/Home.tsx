import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { SentenceRotator } from "../components/SenteceRotator";
import Button from "../components/Button";
import FindMentors from "../sections/FindMentors";
import AppretiationWall from "../sections/AppretiationWall";
import Video from "../sections/video";
import FindColleges from "../sections/FindColleges";
import LatestUpdates from "../sections/LatestUpdates";
import OurSocials from "../sections/OurSocials";
import Footer from "../sections/Footer";

export default function Home() {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const [startFall, setStartFall] = useState(false);
	const [showOverlay, setShowOverlay] = useState(false);
	const [startRotate, setStartRotate] = useState(false);
	const TOTAL_CAPS = isMobile ? 10 : 25;

	useEffect(() => {
		const fallTimer = setTimeout(() => {
			setStartFall(true);
		}, 1000);

		const overlayTimer = setTimeout(() => {
			setShowOverlay(true);
		}, 2500); // after caps finish falling

		return () => {
			clearTimeout(fallTimer);
			clearTimeout(overlayTimer);
		};
	}, []);

	const capData = useMemo(() => {
		return Array.from({ length: TOTAL_CAPS }).map((_, i) => {
			const lane = (i % 10) * 10 + Math.random() * 5;
			const verticalOffset = Math.random() * 50;
			const rotate = 10;
			const size = Math.random() < 0.5 ? 14 : 16;
			const scale = size === 14 ? 0.8 : 1;
			const opacity = size === 14 ? 0.5 : 1;
			const duration = size === 14 ? 2.5 : 2;
			const capType = Math.floor(Math.random() * 2) + 1;

			return {
				left: lane,
				top: verticalOffset,
				rotate,
				scale,
				opacity,
				duration,
				capType,
				size,
			};
		});
	}, []);

	useEffect(() => {
		const startTimer = setTimeout(() => setStartFall(true), 1000);
		const overlayTimer = setTimeout(() => setShowOverlay(true), 4000);

		return () => {
			clearTimeout(startTimer);
			clearTimeout(overlayTimer);
		};
	}, []);

	return (
		<section className="w-screen overflow-hidden">
			{/* Top Header */}
			<div className="bg-secondary w-full px-4 md:px-30 flex items-center justify-between py-4 border-b-2 border-black">
				<img src="/logo.png" alt="Logo" />
				<div className="flex gap-4 items-center">
					{[
						{ title: "Home", accent: false },
						{ title: "Programs", accent: false },
						{
							title: "Become Mentor",
							icon: "graduation-cap",
							accent: true,
						},
					].map((item, index) => (
						<Button
							key={index}
							icon={item.icon}
							accent={item.accent}
							className={`${
								!!item.accent ? " " : "hidden md:flex"
							}`}
						>
							{item.title}
						</Button>
					))}
				</div>
			</div>

			{/* Secondary Nav */}
			<div className=" items-center justify-between md:px-40 py-4 bg-secondary hidden md:flex">
				<div className="flex items-center gap-4">
					{[
						{ title: "College Events" },
						{ title: "College Compare" },
						{ title: "College Predictors" },
					].map((item, index) => (
						<Button key={index}>{item.title}</Button>
					))}
				</div>
				<Button icon="circle-user" accent={true}>
					Login
				</Button>
			</div>

			{/* Hero Section */}
			<div
				className={`relative overflow-hidden not-visited:min-h-[70vh] w-full bg-[#c3fddc] flex justify-center transition-all duration-75`}
			>
				<div className="px-4 md:px-40 z-30 w-full h-full bg-accent">
					<motion.div
						initial={{
							top: isMobile ? "8rem" : "18rem",
							left: isMobile ? "50%" : "50%",
							x: isMobile ? "-50%" : "-50%",
							y: "-50%",
							scale: 1,
							position: "absolute",
						}}
						animate={
							!isMobile && showOverlay
								? {
										left: "9.7rem",
										x: 0,
										y: isMobile ? "30%" : "-63%",
										top: isMobile ? "15rem" : "18rem",
								  }
								: {
										left: isMobile ? "13.2rem" : "50%",
										x: "-50%",
										y: "-50%",
										top: isMobile ? "38%" : "45%",
								  }
						}
						transition={{
							duration: 0.6,
							ease: "easeInOut",
						}}
						className="absolute z-[990] pointer-events-none"
					>
						<h1 className="relative mix-blend-difference text-black uppercase tracking-tight leading-[0.83] text-start font-[900] text-[4rem] md:text-[9.8rem]">
							know your <br />
							<span className="font-[900] text-[5rem] md:text-[13rem]">
								colleges
							</span>
						</h1>
					</motion.div>
					{showOverlay && (
						<motion.svg
							width="500"
							height="500"
							viewBox="0 0 362 362"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="absolute md:top-30 md:left-80 z-[9999] mix-blend-difference"
							initial={{ y: 500, opacity: 0, rotate: 0 }}
							animate={{ y: 0, opacity: 0.6 }}
							transition={{
								type: "spring",
								stiffness: 100,
								duration: 1,
								ease: "easeInOut",
							}}
							onAnimationComplete={() =>
								setTimeout(() => setStartRotate(true), 200)
							}
						>
							<motion.g
								animate={startRotate ? { rotate: 8 } : {}}
								transition={{
									type: "spring",
									stiffness: 100,
									duration: 0.5,
									ease: "easeInOut",
								}}
							>
								<path
									d="M55.0686 237.825C52.096 237.986 50.7297 234.186 53.1238 232.417L181.208 137.767C181.657 137.435 182.189 137.235 182.746 137.189L340.37 124.302C343.359 124.058 344.817 127.865 342.43 129.68L212.033 228.828C211.555 229.191 210.979 229.403 210.379 229.435L55.0686 237.825Z"
									fill="#ffffff"
								/>
								<path
									d="M186.5 176L120.325 231.066C116.107 233.1 108.269 239.039 110.659 246.527C113.049 254.015 115.701 262.325 118.29 270.437M118.29 270.437C115.345 271.377 110.053 275.128 112.443 282.616C114.833 290.104 121.32 290.097 124.265 289.157M118.29 270.437C118.727 270.283 127.124 267.617 130.112 276.977C132.502 284.465 127.21 288.217 124.265 289.157M124.265 289.157L130.99 340.725C134.333 341.033 141.664 340.619 144.242 336.496L124.265 289.157Z"
									stroke="#ffffff"
									strokeWidth="3"
									opacity={0.5}
								/>
								<path
									d="M292.224 235.808C292.634 237.093 292.136 238.493 291.007 239.231L229.793 279.25C229.334 279.55 228.801 279.718 228.253 279.737L156.497 282.172C155.155 282.218 153.946 281.366 153.537 280.086L141.523 242.444C140.926 240.573 142.258 238.642 144.219 238.536L213.857 234.775C214.456 234.742 215.033 234.531 215.511 234.167L273.439 190.121C275.088 188.867 277.482 189.623 278.112 191.597L292.224 235.808Z"
									fill="#ffffff"
								/>
							</motion.g>
						</motion.svg>
					)}
					<div
						className={`hidden md:block w-[800px] h-[600px] bg-[#5BE38D] absolute top-0 right-0   duration-1000 ${
							showOverlay
								? "visible -translate-y-50 translate-x-110 rotate-50"
								: "invisible -translate-y-500 translate-x-400 rotate-0"
						}`}
					></div>
					<div
						className={`hidden md:block w-[800px]  h-[600px] bg-[#5BE38D] absolute top-0 bottom-0  duration-1000 transition-all ${
							showOverlay
								? "visible translate-y-100 -translate-x-190 -rotate-30 "
								: "invisible translate-y-400 -translate-x-0 rotate-0"
						}`}
					></div>
					<div
						className={`hidden md:block w-[800px] h-[600px] bg-[#5BE38D] absolute top-0 left-0  duration-1000 transition-all ${
							showOverlay
								? "visible  -translate-x-180 -translate-y-40 rotate-20"
								: "invisible -translate-x-400 rotate-0"
						}`}
					></div>
					<p
						className={`text-black absolute top-14 md:text-xl pb-4 transition-all duration-200 ${
							showOverlay
								? "visible opacity-100 translate-y-0"
								: "invisible opacity-0 -translate-y-10"
						}`}
					>
						Connecting you with Seniors from your Desired Colleges &
						Courses
					</p>
					<button
						className={`absolute gap-2 bg-accent flex items-center rounded-full z-[20] bottom-20 px-6 py-2 font-extrabold text-xl border border-black duration-200  transition-all cursor-pointer ${
							showOverlay
								? "visible opacity-100"
								: "invisible opacity-0"
						}`}
					>
						Get Started
						<i className="far fa-arrow-up-right" />
					</button>
					<div
						className={`absolute z-[20] bottom-10 right-30 p-4 duration-400 transition-all hidden md:block ${
							showOverlay
								? "visible opacity-100"
								: "invisible opacity-0"
						}`}
					>
						<SentenceRotator />
					</div>
				</div>

				{capData.map((cap, i) => (
					<motion.div
						key={i}
						className="absolute"
						style={{
							left: `${cap.left}vw`,
							top: `${cap.top}vh`,
							transform: `scale(${cap.scale})`,
							opacity: cap.opacity,
						}}
						initial={{ y: -200, rotate: 0 }}
						animate={
							startFall
								? { y: 800, rotate: cap.rotate }
								: { y: 0, rotate: 0 }
						}
						transition={{
							duration: cap.duration,
							ease: [0.42, 0, 1, 1],
						}}
					>
						<img
							src={`/captype-${cap.capType}.svg`}
							alt="cap"
							className="w-full h-auto"
						/>
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
			<FindMentors />
			<AppretiationWall />
			<Video />
			<FindColleges />
			<LatestUpdates />
			<OurSocials />
			<Footer />
		</section>
	);
}
