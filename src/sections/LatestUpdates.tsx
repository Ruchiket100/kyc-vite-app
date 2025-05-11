import React, { useState } from "react";
import { motion } from "framer-motion";

const LatestUpdates = () => {
	const dummyData = {
		blogs: [
			{
				id: 1,
				title: "Career choice that best suits you.",
				description:
					"B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe",
				duration: "20min",
				date: "January 20, 2025",
				image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
			},
			{
				id: 2,
				title: "Career choice that best suits you.",
				description:
					"B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe",
				duration: "20min",
				date: "January 20, 2025",
				image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
			},
			{
				id: 3,
				title: "Career choice that best suits you.",
				description:
					"B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe",
				duration: "20min",
				date: "January 20, 2025",
				image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
			},
		],
		podcasts: [
			{
				id: 1,
				title: "Finding Your Path in Tech",
				description:
					"Explore various career paths in technology from students and professionals.",
				duration: "15min",
				date: "February 15, 2025",
				image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
			},
		],
	};

	const importantLinks = [
		{
			title: "COLLEGE FORMS",
			icon: "fa-clipboard",
			url: "/college-forms",
		},
		{
			title: "CHECK ELIGIBILITY",
			icon: "fa-check",
			url: "/check-eligibility",
		},
		{
			title: "SCHOLARSHIPS",
			icon: "fa-university",
			url: "/scholarships",
		},
		{
			title: "ANSWER KEYS",
			icon: "fa-key",
			url: "/answer-keys",
		},
		{
			title: "COLLEGES FOR YOU",
			icon: "fa-graduation-cap",
			url: "/colleges",
		},
		{
			title: "EXAMINATION DATES",
			icon: "fa-calendar",
			url: "/exam-dates",
		},
	];

	const [activeTab, setActiveTab] = useState<"blogs" | "podcasts">("blogs");

	const data = dummyData[activeTab];

	return (
		<div className="py-30 px-30 bg-blue-300">
			<h1 className="uppercase text-4xl font-bold">Latest Updates</h1>
			<br />
			<div className="">
				{/* Tabs */}
				<div className="flex items-center space-x-6 border-b-4 border-gray-300 pb-2 mb-6">
					<button
						onClick={() => setActiveTab("blogs")}
						className={`text-xl font-semibold ${
							activeTab === "blogs"
								? "text-black border-b-4 border-black"
								: "text-gray-700"
						}`}
					>
						BLOGS
					</button>
					<button
						onClick={() => setActiveTab("podcasts")}
						className={`text-xl font-semibold ${
							activeTab === "podcasts"
								? "text-black border-b-4 border-black"
								: "text-gray-700"
						}`}
					>
						PODCASTS
					</button>
				</div>

				{/* Cards */}
				<div className="flex  gap-6">
					{data.map((item) => (
						<div
							key={item.id}
							className="bg-white rounded-2xl overflow-hidden shadow-md w-[300px]"
						>
							<img
								src={item.image}
								alt="cover"
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h3 className="font-bold text-lg">
									{item.title}
								</h3>
								<p className="text-gray-600 text-sm mt-1">
									{item.description}
								</p>
								<div className="flex space-x-4 mt-3 text-sm text-gray-700">
									<span className="bg-gray-200 rounded-full px-2 py-1">
										{item.duration}
									</span>
									<span className="bg-gray-200 rounded-full px-2 py-1">
										{item.date}
									</span>
								</div>
							</div>
						</div>
					))}
					<a
						href="/more-content"
						className="bg-white p-4 m-auto rounded-full h-20 w-20 flex items-center justify-center shadow-md hover:bg-gray-100 transition"
					>
						<i className="fas fa-arrow-right text-xl" />
					</a>
				</div>
				<div className="py-10">
					<div className="">
						<h2 className="text-2xl font-bold mb-6 border-b-4 border-black w-fit pb-1">
							IMPORTANT DETAILS
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{importantLinks.map((item, index) => (
								<motion.a
									key={index}
									href={item.url}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="flex items-center justify-between bg-yellow-300 px-6 py-4 rounded-2xl font-semibold text-black shadow-md transition"
								>
									<div className="flex items-center space-x-2">
										<i
											className={`fa ${item.icon} text-lg`}
										></i>
										<span>{item.title}</span>
									</div>
									<i className="fa fa-arrow-up-right-from-square"></i>
								</motion.a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestUpdates;
