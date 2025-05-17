const Video = () => {
	return (
		<div className="relative aspect-video bg-[#2D2D2D] p-8  flex items-center justify-center">
			<h1 className="text-8xl font-extrabold text-white ">
				Get to
				<br />
				know us
			</h1>
			<div className="absolute mt-[1%] text-[200px] opacity-100 z-10 mix-blend-difference">
				{" "}
				<i className="fas fa-play text-white " />
			</div>

			<div className="absolute px-30 pb-8 text-2xl bottom-0 left-0 flex gap-6 items-center text-white p-4">
				<i className="fas fa-play" />
				<i className="fas fa-volume" />
			</div>
		</div>
	);
};

export default Video;
