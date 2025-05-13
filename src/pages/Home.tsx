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
import Header from "../sections/Header";
import Hero from "../sections/Hero";

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
			<Header />
			<Hero />
			{/* Hero Section */}

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
