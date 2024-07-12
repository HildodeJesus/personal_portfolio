import { FaAngleDown } from "react-icons/fa6";

export default function BtnToDown() {
	return (
		<>
			<a
				href="#about"
				className="flex absolute cursor-pointer items-center left-[470px] bottom-28 flex-col justify-center animate-bounce"
			>
				<span className=" text-white">Role para baixo</span>
				<FaAngleDown className="text-default-green" size={25} />
				<FaAngleDown className="text-white m-[-10px]" size={25} />
			</a>
		</>
	);
}
