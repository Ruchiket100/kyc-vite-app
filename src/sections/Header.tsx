import { useState } from "react";
import Button from "../components/Button";

const Header = () => {
	const [showDrawer, setShowDrawer] = useState(false);
	return (
		<div>
			<div
				className={`z-[99999] right-0 absolute top-0 w-[60vw] h-screen bg-secondary text-white  transition-all 
				${!showDrawer ? "translate-x-100" : " translate-x-0"}`}
			>
				<div className="py-4 flex items-center justify-end border-b border-border ">
					<button
						onClick={() => setShowDrawer(false)}
						className="text-white px-3 aspect-square"
					>
						<i className="fas fa-times text-2xl" />
					</button>
				</div>
				<div className="p-4 flex flex-col gap-2 border-b border-border">
					<h3>Tools</h3>
					<div className="pl-2 flex flex-col gap-4">
						{[
							{ title: "College Events", icon: "ticket-simple" },
							{
								title: "College Compare",
								icon: "arrow-trend-up",
							},
							{ title: "College Predictors", icon: "sign-post" },
						].map((item, index) => (
							<button className="flex items-center gap-4 text-md font-medium">
								<i className={`far fa-${item.icon}`} />
								{item.title}
							</button>
						))}
					</div>
				</div>
				<div className="p-4 w-full flex flex-col gap-2 ">
					<button className="flex text-md items-center gap-2 py-2 px-4 rounded-full bg-accent text-black font-semibold w-full">
						<i className="far fa-user-circle text-xl" />
						Login
					</button>
					<button className="flex text-md items-center gap-2 py-2 px-4 rounded-full bg-accent text-black font-semibold w-full">
						<i className="far fa-user-circle text-xl" />
						Become a Mentor
					</button>
				</div>
			</div>
			<div
				className={`bg-secondary w-full px-4 md:px-30 md:flex items-center justify-between py-4 border-b-2 border-black 
				`}
			>
				<div className="flex items-center gap-6">
					<img src="/logo.png" alt="Logo" />
					<div className="ml-auto flex items-center w-full justify-between">
						<MobileSearch />
						<button
							onClick={() => setShowDrawer(true)}
							className="md:hidden flex items-center"
						>
							<i className="fas fa-bars text-xl text-white" />
						</button>
						<div className="hidden md:flex rounded-full w-[23vw] bg-secondary-active border text-white border-border py-2 px-4 items-center">
							<input
								placeholder="Search"
								className="outline-none  flex-1 text-lg border-none bg-inherit"
							/>
							<i className="fas fa-search text-lg" />
						</div>
					</div>
				</div>
				<div className=" gap-4 items-center hidden md:flex">
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
							className={`text-lg ${
								!!item.accent ? " " : "hidden md:flex"
							}`}
						>
							{item.title}
						</Button>
					))}
				</div>
			</div>

			{/* Secondary Nav */}
			<div className=" items-center justify-between md:px-30 py-4 bg-secondary hidden md:flex">
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
		</div>
	);
};

export default Header;

const MobileSearch = () => {
	const [showInput, setShowInput] = useState(false);

	return (
		<div
			className={`md:hidden flex rounded-full bg-secondary-active border text-white border-border  items-center justify-between 
		${showInput ? "py-2 px-4" : "aspect-square py-2 px-3"}`}
		>
			{showInput && (
				<input
					placeholder="Search"
					className="outline-none flex-1 text-lg border-none bg-inherit"
				/>
			)}
			<button
				onClick={() => {
					setShowInput(!showInput);
				}}
				className="flex items-center justify-center h-full"
			>
				<i className="fas fa-search text-lg" />
			</button>
		</div>
	);
};
