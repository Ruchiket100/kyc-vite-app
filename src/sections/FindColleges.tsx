import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FindColleges = () => {
	const dummyColleges = [
		{
			name: "Greendale University",
			rating: 5,
			cover: "/colleges/college-1.png",
			location: "New York",
			NIRF_RANK: 180,
			Course: ["B.Tech", "M.Tech"],
			top_mentors: [
				{
					name: "Anamika Sharma",
					expertise: "JEE",
					branch: "Computer Science",
					institution: "IIT Delhi",
					profile_pic: "mentor1.png",
					rating: 5,
				},
				{
					name: "Anant Sharama",
					expertise: "BITSAT",
					branch: "Computer Science",
					institution: "Amity Delhi",
					profile_pic: "mentor3.png",
					rating: 5,
				},
			],
		},
		{
			name: "Luheran Highschool",
			rating: 4,
			cover: "/colleges/college-2.png",
			location: "New York",
			NIRF_RANK: 180,
			Course: ["B.Tech", "M.Tech"],
			top_mentors: [
				{
					name: "Anamika Sharma",
					expertise: "JEE",
					branch: "Computer Science",
					institution: "IIT Delhi",
					profile_pic: "mentor1.png",
					rating: 5,
				},
				{
					name: "Anant Sharama",
					expertise: "BITSAT",
					branch: "Computer Science",
					institution: "Amity Delhi",
					profile_pic: "mentor3.png",
					rating: 5,
				},
			],
		},
		{
			name: "Hindu College",
			rating: 5,
			cover: "/colleges/college-1.png",
			location: "New York",
			NIRF_RANK: 180,
			Course: ["B.Tech", "M.Tech"],
			top_mentors: [
				{
					name: "Anamika Sharma",
					expertise: "JEE",
					branch: "Computer Science",
					institution: "IIT Delhi",
					profile_pic: "mentor1.png",
					rating: 5,
				},
				{
					name: "Anant Sharama",
					expertise: "BITSAT",
					branch: "Computer Science",
					institution: "Amity Delhi",
					profile_pic: "mentor3.png",
					rating: 5,
				},
			],
		},
		{
			name: "Greendale University",
			rating: 5,
			cover: "/colleges/college-2.png",
			location: "New York",
			NIRF_RANK: 180,
			Course: ["B.Tech", "M.Tech"],
			top_mentors: [
				{
					name: "Anamika Sharma",
					expertise: "JEE",
					branch: "Computer Science",
					institution: "IIT Delhi",
					profile_pic: "mentor1.png",
					rating: 5,
				},
				{
					name: "Anant Sharama",
					expertise: "BITSAT",
					branch: "Computer Science",
					institution: "Amity Delhi",
					profile_pic: "mentor3.png",
					rating: 5,
				},
			],
		},
		{
			name: "Luheran Highschool",
			rating: 4,
			cover: "/colleges/college-1.png",
			location: "New York",
			NIRF_RANK: 180,
			Course: ["B.Tech", "M.Tech"],
			top_mentors: [
				{
					name: "Anamika Sharma",
					expertise: "JEE",
					branch: "Computer Science",
					institution: "IIT Delhi",
					profile_pic: "mentor1.png",
					rating: 5,
				},
				{
					name: "Anant Sharama",
					expertise: "BITSAT",
					branch: "Computer Science",
					institution: "Amity Delhi",
					profile_pic: "mentor3.png",
					rating: 5,
				},
			],
		},
		{
			name: "Hindu College",
			rating: 5,
			cover: "/colleges/college-2.png",
			location: "New York",
			NIRF_RANK: 180,
			Course: ["B.Tech", "M.Tech"],
			top_mentors: [
				{
					name: "Anamika Sharma",
					expertise: "JEE",
					branch: "Computer Science",
					institution: "IIT Delhi",
					profile_pic: "mentor1.png",
					rating: 5,
				},
				{
					name: "Anant Sharama",
					expertise: "BITSAT",
					branch: "Computer Science",
					institution: "Amity Delhi",
					profile_pic: "mentor3.png",
					rating: 5,
				},
			],
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [hovered, setHovered] = useState<number | null>(null);
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Auto-scroll logic
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(
				(prevIndex) => (prevIndex + 1) % dummyColleges.length
			);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	// Scroll to the active index if not hovering
	useEffect(() => {
		// if (hoveredIndex !== null) return;

		const node = cardRefs.current[activeIndex];
		const container = scrollContainerRef.current;
		if (node && container) {
			const nodeLeft = node.offsetLeft;
			const nodeRight = nodeLeft + node.offsetWidth;
			const containerLeft = container.scrollLeft;
			const containerRight = containerLeft + container.offsetWidth;

			if (nodeLeft < containerLeft || nodeRight > containerRight) {
				container.scrollTo({
					left: nodeLeft - 16, // offset for gap
					behavior: "smooth",
				});
			}
		}
	}, [activeIndex]);

	return (
		<div className="py-10">
			<div className="flex items-center justify-between px-30">
				<h1 className="text-5xl font-bold">Find Colleges -</h1>
				<button className="flex items-center gap-4 bg-accent rounded-full px-8 py-2">
					View All
					<i className="far fa-graduation-cap" />
				</button>
			</div>

			<br />

			{/* Filters */}
			<div className="flex items-center justify-between py-4 bg-blue-300 px-30">
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-3">
						<h3 className="font-bold text-lg">Filters</h3>
						<i className="fas fa-bars-filter text-xl" />
					</div>
					<div className="h-full py-6 w-2 bg-black"></div>
					<button className="font-semibold px-4 rounded-full py-2 border flex gap-3 items-center border-black cursor-pointer">
						Courses <i className="far fa-books" />
						<i className="pr-4 pl-2 fas fa-chevron-right font-[600] text-white" />
					</button>
					<button className="font-semibold px-4 rounded-full py-2 border flex gap-3 items-center border-black cursor-pointer">
						Institution Type{" "}
						<i className="far fa-building-columns" />
						<i className="pr-4 pl-2 fas fa-chevron-right font-[600] text-white" />
					</button>
				</div>
				<button className="font-semibold px-4 rounded-full bg-white py-2 border flex gap-3 items-center border-black cursor-pointer">
					Advanced Filters <i className="far fa-sliders" />
				</button>
			</div>

			{/* Colleges Scroll Section */}
			<div>
				<div
					className="relative py-12 px-4 overflow-auto flex items-center gap-4 scroll-smooth"
					ref={scrollContainerRef}
				>
					{dummyColleges.map((college, index) => {
						const isActive = index === activeIndex;
						const width = isActive ? 708 : 354;

						return (
							<div
								key={index}
								ref={(el) =>
									(cardRefs.current[index] = el) as any
								}
								onMouseEnter={() => setHovered(index)}
								onMouseLeave={() => setHovered(null)}
								className="shrink-0 transition-all duration-500 ease-in-out relative rounded-lg overflow-hidden"
								style={{
									width,
									height: "354px",
									backgroundImage: `url(${college.cover})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="absolute  flex flex-col gap-4 p-4 w-[70%] left-[15%] bottom-0 text-xl bg-white rounded-t-md">
									<div className="flex items-center justify-between">
										<p>{college.name}</p>
										<div className="flex items-center gap-2">
											<p>
												Rating:{" "}
												<strong>
													{college.rating}
												</strong>
											</p>
											<i className="fas fa-star text-yellow-300" />
										</div>
									</div>
									{/* Show hovered content only if hovered and active */}
									{index === activeIndex &&
										hovered === index && (
											<motion.div
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: 20 }}
												transition={{
													duration: 0.35,
													ease: "easeOut",
												}}
											>
												<div className="transition-all items-center justify-between flex">
													<p className="flex items-center gap-2 text-sm font-light">
														<i className="far fa-location-dot" />
														{college.location}
													</p>
													<div className="flex items-center gap-2 text-sm font-light">
														NIRF RANK :{" "}
														<span className="font-semibold">
															{college.NIRF_RANK}
														</span>
													</div>
												</div>
												<div className="transition-all flex flex-col gap-2">
													<h2>Top Mentors</h2>
													<div className="flex items-center gap-2">
														{college.top_mentors.map(
															(mentor, index) => {
																return (
																	<div
																		key={
																			index
																		}
																		className="cursor-pointer flex flex-col flex-1 justify-center items-center gap-2 p-4 bg-accent-active/50 rounded-md transition-all overflow-hidden"
																	>
																		<img
																			src={`/mentors/${mentor.profile_pic}`}
																			alt={
																				mentor.name
																			}
																			className="w-14 h-14 rounded-full object-cover bg-cover"
																		/>
																		<div className="flex flex-col items-center justify-center w-full gap-1">
																			<p className="text-xl font-semibold">
																				{
																					mentor.name
																				}
																			</p>
																			<p className="text-sm font-light">
																				{
																					mentor?.branch
																				}
																			</p>
																			<p className="text-md font-light flex items-center gap-2">
																				<span className="font-medium">
																					Expertise:
																				</span>
																				{
																					mentor.expertise
																				}
																			</p>
																			<button className="py-1 mt-1 rounded-full w-full flex items-center justify-center bg-white font-semibold text-md">
																				View
																			</button>
																		</div>
																	</div>
																);
															}
														)}
													</div>
												</div>
											</motion.div>
										)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FindColleges;
