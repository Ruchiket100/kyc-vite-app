const FindColleges = () => {
	const dummyColleges = [
		{
			name: "Greendale University",
			rating: 5,
			cover: "/colleges/college-1.png",
		},
		{
			name: "Luheran Highschool",
			rating: 4,
			cover: "/colleges/college-2.png",
		},
		{
			name: "Hindu College",
			rating: 5,
			cover: "/colleges/college-1.png",
		},
		{
			name: "Greendale University",
			rating: 5,
			cover: "/colleges/college-2.png",
		},
		{
			name: "Luheran Highschool",
			rating: 4,
			cover: "/colleges/college-1.png",
		},
		{
			name: "Hindu College",
			rating: 5,
			cover: "/colleges/college-2.png",
		},
	];
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
			<div>
				<div className="relative py-8 px-4 overflow-auto flex items-center gap-4">
					{dummyColleges.map((college, index) => (
						<div
							key={index}
							className="shrink-0"
							style={{
								backgroundImage: `url(${college.cover})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								position: "relative",
								width: "708px",
								height: "354px",
							}}
						>
							<div className="absolute flex items-center justify-between p-4 w-[70%] left-[15%] bottom-0 text-xl px-4 bg-white rounded-t-md ">
								<p>{college.name}</p>
								<div className="flex items-center text-center text-xl gap-2">
									<p>
										Rating:{" "}
										<strong>{college.rating}</strong>
									</p>
									<i className="fas fa-star text-yellow-300" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FindColleges;
