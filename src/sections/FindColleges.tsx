import React from "react";

const FindColleges = () => {
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
		</div>
	);
};

export default FindColleges;
