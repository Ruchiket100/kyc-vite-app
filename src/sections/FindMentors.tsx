const FindMentors = () => {
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
			<div className="flex items-center justify-between gap-2 px-30 py-8">
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
			</div>
		</div>
	);
};

export default FindMentors;
