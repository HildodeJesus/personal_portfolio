import { FaGithub, FaLinkedin } from "react-icons/fa";
import personalLogo from "../../assets/personal_logo.png";

export default function Header() {
	return (
		<header className="px-52 h-28 z-10 w-full flex justify-between fixed top-0 left-0">
			<div className="w-1/2 h-full items-center flex">
				<a href="#home" className="block">
					<img className="h-[40px]" src={personalLogo} alt="Logo pessoal" />
				</a>
			</div>
			<div className="w-1/2 h-full items-center flex justify-end gap-9">
				<ul className="flex gap-11">
					<li className="text-white py-1 h-7 hover:border-b-2 duration-100 border-default-green">
						<a href="#about">Sobre mim</a>
					</li>
					<li className="text-white py-1 h-7 hover:border-b-2 duration-100 border-default-green">
						<a href="#project">Meus projetos</a>
					</li>
					<li className="text-white py-1 h-7 hover:border-b-2 duration-100 border-default-green">
						<a href="#faq">FAQ</a>
					</li>
				</ul>
				<span className="border-[1px] border-white h-9"></span>
				<div className="flex gap-5">
					<FaGithub
						className="text-white hover:text-default-green duration-100 cursor-pointer"
						size={35}
					/>
					<FaLinkedin
						className="text-white hover:text-default-green duration-100 cursor-pointer"
						size={35}
					/>
				</div>
			</div>
		</header>
	);
}
