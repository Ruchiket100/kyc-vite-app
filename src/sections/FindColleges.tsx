import { useEffect, useRef, useState } from "react";

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
	// const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
				<h1 className="text-4xl font-extrabold">Find Colleges -</h1>
				<button className="flex items-center gap-4 bg-accent rounded-full px-8 py-2">
					View All
					<i className="far fa-graduation-cap" />
				</button>
			</div>

			<br />

			{/* Filters */}
			<div className="flex items-center justify-between py-4 bg-blue-300 px-30">
				<div className="flex items-center gap-4">
					<h3>Filters</h3>
					<div className="h-full py-2 w-1 bg-gray-500"></div>
					<button className="px-4 rounded-full py-2 border flex gap-2 items-center border-black cursor-pointer">
						Courses <i className="far fa-books" />
					</button>
					<button className="px-4 rounded-full py-2 border flex gap-2 items-center border-black cursor-pointer">
						Institution Type{" "}
						<i className="far fa-building-columns" />
					</button>
				</div>
				<button className="px-4 rounded-full bg-white py-2 border flex gap-2 items-center border-black cursor-pointer">
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
						// const isHovered = index === hoveredIndex;
						const width = isActive ? 708 : 354;

						return (
							<div
								key={index}
								ref={(el) =>
									(cardRefs.current[index] = el) as any
								}
								onMouseEnter={() => setActiveIndex(index)}
								// onMouseLeave={() => setHoveredIndex(null)}
								className="group shrink-0 transition-all duration-500 ease-in-out relative rounded-lg overflow-hidden"
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
									<div className="hidden group-hover:flex transition-all items-center justify-between">
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
									<div className="hidden group-hover:flex transition-all flex-col gap-2 ">
										<h2>Top Mentors</h2>
										<div className="flex items-center gap-2">
											{college.top_mentors.map(
												(mentor, index) => {
													return (
														<div
															key={index}
															className="cursor-pointer flex flex-1 items-center gap-2 p-4 bg-accent-active rounded-md transition-all overflow-hidden"
														>
															<img
																src={`/mentors/${mentor.profile_pic}`}
																alt={
																	mentor.name
																}
																className="w-10 h-10 rounded-full *:object-cover"
															/>
															<div className="flex flex-col">
																<p className="text-sm font-semibold">
																	{
																		mentor.name
																	}
																</p>
																<p className="text-xs font-light">
																	{
																		mentor.expertise
																	}
																</p>
															</div>
														</div>
													);
												}
											)}
										</div>
									</div>
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
