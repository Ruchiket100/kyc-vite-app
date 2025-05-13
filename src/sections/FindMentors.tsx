import { useEffect, useRef, useState } from "react";

const FindMentors = () => {
	const dummyMentors = [
		{
			id: "mentor1",
			name: "Anamika Sharma",
			expertise: "JEE",
			branch: "Computer Science",
			institution: "IIT Delhi",
			profile_pic: "mentor1.png",
		},
		{
			id: "mentor2",
			name: "Anant Sharama",
			expertise: "BITSAT",
			branch: "Computer Science",
			institution: "Amity Delhi",
			profile_pic: "mentor3.png",
		},
		{
			id: "mentor3",
			name: "Karan Deb",
			expertise: "JEE",
			branch: "Computer Science",
			institution: "IIT Delhi",
			profile_pic: "mentor2.png",
		},
		{
			id: "mentor4",
			name: "Anamika Sharma",
			expertise: "JEE",
			branch: "Computer Science",
			institution: "IIT Delhi",
			profile_pic: "mentor1.png",
		},
		{
			id: "mentor5",
			name: "Anant Sharama",
			expertise: "BITSAT",
			branch: "Computer Science",
			institution: "Amity Delhi",
			profile_pic: "mentor3.png",
		},
		{
			id: "mentor6",
			name: "Anamika Sharma",
			expertise: "JEE",
			branch: "Computer Science",
			institution: "IIT Delhi",
			profile_pic: "mentor1.png",
		},
	];
	const [selectedMentor, setSelectedMentor] = useState<any>(null);

	const mentorScrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = mentorScrollRef.current;
		if (!scrollContainer) return;

		const handleScroll = () => {
			const containerRect = scrollContainer.getBoundingClientRect();
			const containerCenter =
				containerRect.left + containerRect.width / 2;

			let closestElement: HTMLElement | null = null;
			let closestDistance = Infinity;

			document.querySelectorAll(".mentor").forEach((el) => {
				const elRect = el.getBoundingClientRect();
				const elCenter = elRect.left + elRect.width / 2;
				const distance = Math.abs(containerCenter - elCenter);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestElement = el as HTMLElement;
				}
			});

			if (closestElement) {
				const selected = dummyMentors.find(
					(mentor) => mentor.id === closestElement?.id
				);
				setSelectedMentor(selected || null);
			}
		};

		// Run on mount and scroll
		scrollContainer.addEventListener("scroll", handleScroll);
		handleScroll(); // Run initially in case default scroll isn't at start

		return () => {
			scrollContainer.removeEventListener("scroll", handleScroll);
		};
	}, [dummyMentors]);

	return (
		<div className=" py-10">
			<div className="flex items-center justify-between px-30">
				<h1 className="text-4xl font-extrabold">Find Mentors -</h1>
				<button className="flex items-center gap-4 bg-accent rounded-full px-8 py-2">
					View All
					<i className="far fa-graduation-cap" />
				</button>
			</div>
			<br />
			{/* filters */}
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
			{/* <div className="flex items-center justify-between gap-2 px-30 py-8">
				{[
					{
						name: "Anant Sharama",
						expertise: "BITSAT",
						branch: "Computer Science",
						institution: "Amity Delhi",
						profile_pic: "mentor3.png",
					},
					{
						name: "Karan Deb",
						expertise: "JEE",
						branch: "Computer Science",
						institution: "IIT Delhi",
						profile_pic: "mentor2.png",
					},
					{
						name: "Anamika Sharma",
						expertise: "JEE",
						branch: "Computer Science",
						institution: "IIT Delhi",
						profile_pic: "mentor1.png",
					},
				].map((mentor, index) => (
					<div
						key={index}
						className={`relative w-[300px] h-[400px] bg-white rounded-lg shadow-lg overflow-hidden`}
					>
						<div className="absolute bottom-0 z-20 w-full">
							<div className="flex bg-white flex-col mx-4 p-4 gap-1">
								<h3 className="text-2xl font-bold">
									{mentor.name}
								</h3>
								<div className="flex text-xs items-center gap-2">
									<p>{mentor.branch}</p>
									<p>{mentor.institution}</p>
								</div>
								<p className="text-xs">{mentor.expertise}</p>
							</div>
						</div>
						<img
							src={`/mentors/${mentor.profile_pic}`}
							alt={`${mentor.name}'s profile`}
							className="absolute top-0 w-full h-full object-cover"
						/>
					</div>
				))}
			</div> */}
			<div className="flex flex-col gap-4">
				<div className="flex items-center justify-center gap-8 pt-8">
					<button
						onClick={() => {
							const index = dummyMentors?.findIndex(
								(mentor) => mentor.id === selectedMentor?.id
							);
							if (index === 0) {
								setSelectedMentor(
									dummyMentors[dummyMentors.length - 1]
								);
								mentorScrollRef.current?.scrollTo({
									left: mentorScrollRef.current.scrollWidth,
									behavior: "smooth",
								});
							} else {
								setSelectedMentor(
									dummyMentors[index - 1] ||
										dummyMentors[dummyMentors.length - 1]
								);
								const prevElement = document.getElementById(
									dummyMentors[index - 1]?.id
								);
								prevElement?.scrollIntoView({
									behavior: "smooth",
									block: "nearest",
									inline: "center",
								});
							}
						}}
						className="h-full text-center my-auto"
					>
						<i className="fas fa-arrow-left" />
					</button>
					<div className=" flex items-center justify-center gap-2 transition-all">
						{Array(dummyMentors?.length || 1)
							.fill(0)
							.map((_, i) => {
								return (
									<span
										key={i}
										className={`rounded-full ${
											dummyMentors?.findIndex(
												(mentor) =>
													mentor.id ===
													selectedMentor?.id
											) === i
												? "h-2 w-2 bg-gray-600"
												: "h-1 w-1 bg-gray-700"
										} `}
									></span>
								);
							})}
					</div>
					<button
						onClick={() => {
							const index = dummyMentors?.findIndex(
								(mentor) => mentor.id === selectedMentor?.id
							);
							if (index === dummyMentors?.length - 1) {
								setSelectedMentor(dummyMentors[0]);
								mentorScrollRef.current?.scrollIntoView({
									behavior: "smooth",
									block: "nearest",
									inline: "center",
								});
							} else {
								setSelectedMentor(
									dummyMentors[index + 1] || dummyMentors[0]
								);
								const nextElement = document.getElementById(
									dummyMentors[index + 1]?.id
								);
								nextElement?.scrollIntoView({
									behavior: "smooth",
									block: "nearest",
									inline: "center",
								});
							}
						}}
						className="h-full text-center my-auto"
					>
						<i className="fas fa-arrow-right" />
					</button>
				</div>
				<div
					ref={mentorScrollRef}
					className="scrollbar-hide relative w-full h-[600px] overflow-auto flex items-center snap-x snap-mandatory gap-[150px] pl-[170px] pr-[calc((50vw-10px))]"
				>
					{dummyMentors?.length !== 0 &&
						dummyMentors?.map((mentor, index) => {
							const selectedIndex = dummyMentors?.findIndex(
								(mentor) => mentor.id === selectedMentor?.id
							);

							return (
								<button
									key={index}
									id={mentor.id}
									className={`mentor transition-all relative w-[200px] h-[300px] my-1 text-3xl snap-center font-semibold min-w-[100px] leading-normal flex items-center justify-center shrink-0 ripple p-1 
									${
										index === selectedIndex + 1 ||
										index === selectedIndex - 1
											? "h-[400px] w-[300px]"
											: index === selectedIndex
											? "h-[500px] w-[300px]"
											: "w-[200px] h-[300px]"
									}
									`}
									onClick={() => () => {
										//select logic here
										console.log("Hello World");
									}}
								>
									<div className="absolute bottom-0 z-20 w-full">
										<div className="flex bg-white flex-col mx-4 p-4 gap-1">
											<h3 className="text-2xl font-bold">
												{mentor.name}
											</h3>
											<div className="flex text-xs items-center gap-2">
												<p>{mentor.branch}</p>
												<p>{mentor.institution}</p>
											</div>
											<p className="text-xs">
												{mentor.expertise}
											</p>
										</div>
									</div>
									<img
										src={`/mentors/${mentor.profile_pic}`}
										alt={`${mentor.name}'s profile`}
										className="absolute top-0 w-full h-full object-cover"
									/>
								</button>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default FindMentors;
