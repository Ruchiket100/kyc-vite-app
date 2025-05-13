import Button from "../components/Button";

const Header = () => {
	return (
		<div>
			<div className="bg-secondary w-full px-4 md:px-30 flex items-center justify-between py-4 border-b-2 border-black">
				<img src="/logo.png" alt="Logo" />
				<div className="flex gap-4 items-center">
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
							className={`${
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
