import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";

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
