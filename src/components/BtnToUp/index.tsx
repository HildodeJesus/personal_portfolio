import { FaAngleUp } from "react-icons/fa6";

export default function BtnToUp() {
	const handleClick = () => {
		window.scrollX = 0;
	};

	return (
		<>
			<div
				onClick={() => handleClick()}
				className="flex flex-col absolute items-center justify-center"
			>
				<FaAngleUp className="text-white" size={20} />
				<FaAngleUp className="text-default-green mt-[-10px]" size={20} />
				<span className="font-light text-white">Para o topo</span>
			</div>
		</>
	);
}
