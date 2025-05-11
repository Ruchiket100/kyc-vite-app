const Video = () => {
	return (
		<div className="relative aspect-video bg-[#2D2D2D] p-8 flex items-center justify-center">
			<h1 className="text-8xl font-extrabold text-white">
				Get to
				<br />
				know us
			</h1>
			<div className="absolute mt-[5%] text-[200px] opacity-50">
				{" "}
				<i className="fas fa-play text-black" />
			</div>

			<div className="absolute bottom-0 left-0 flex gap-6 items-center text-white p-4">
				<i className="fas fa-play" />
				<i className="fas fa-volume" />
			</div>
		</div>
	);
};

export default Video;
