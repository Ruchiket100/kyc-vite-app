interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	accent?: boolean;
	icon?: string;
	children: React.ReactNode;
}

function Button(props: ButtonProps) {
	const { accent, icon, children, ...rest } = props;
	return (
		<button
			{...rest}
			className={`flex flex-row gap-3 px-6 py-2 transition-all cursor-pointer text-center items-center justify-between rounded-full ${
				accent
					? "bg-accent text-black hover:bg-accent-active"
					: "bg-secondary-active text-white border border-border"
			} ${rest.className}`}
		>
			<h2 className="font-[600] text-lg">{children}</h2>
			{icon && <i className={`far fa-${icon} text-lg`}></i>}
		</button>
	);
}

export default Button;
