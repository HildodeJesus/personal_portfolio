import aboutImg from "../../assets/about-img.png";
import nodeLogo from "../../assets/NodeLogo.png";
import AWSLgo from "../../assets/AWSLgo.png";
import reactLogo from "../../assets/react.svg";
import gitLogo from "../../assets/GITLogo.png";
import mSqlLogo from "../../assets/MySqlLogo.png";
import typeLogo from "../../assets/TypeLogo.png";

export default function About() {
	return (
		<section id="about" className="flex w-full px-80 h-screen bg-black">
			<div className="flex flex-col items-center justify-center w-1/2 my-[-50px] h-full gap-9">
				<img className="h-[420px] mt-10" src={aboutImg} alt="Inlustração" />
			</div>

			<div className="flex items-center flex-col gap-10 w-1/2 h-full justify-center">
				<h2 className="text-white w-full text-4xl font-bold">Sobre mim</h2>
				<p className="text-white text-2xl text-justify">
					Eu sou{" "}
					<span className="text-default-green">desenvolvedor Full-Stack</span>{" "}
					com 4 anos de experiência. Além de especializado em criar interfaces
					visuais rápidas e fluídas, atuo no{" "}
					<span className="text-default-green">
						desenvolvimento da regra de negócio
					</span>
					do sistema. Entregando ainda mais valor e qualidade ao cliente com as
					melhores <span className="text-default-green">tecnológias</span>:
				</p>
				<ul className="flex gap-6 items-center justify-center">
					<li title="Typescript">
						<a
							href="https://www.typescriptlang.org/"
							target="_blank"
							className="block"
						>
							<img className="h-12" src={typeLogo} alt="Inlustração" />
						</a>
					</li>
					<li title="react">
						<a href="https://react.dev/" target="_blank" className="block">
							<img className="h-12" src={reactLogo} alt="Inlustração" />
						</a>
					</li>
					<li title="nodejs">
						<a href="https://nodejs.org/pt" target="_blank" className="block">
							<img className="h-12" src={nodeLogo} alt="Inlustração" />
						</a>
					</li>
					<li title="mysql">
						<a href="https://www.mysql.com/" target="_blank" className="block">
							<img className="h-12" src={mSqlLogo} alt="Inlustração" />
						</a>
					</li>
					<li title="git">
						<a href="https://git-scm.com/" target="_blank" className="block">
							<img className="h-12" src={gitLogo} alt="Inlustração" />
						</a>
					</li>
					<li title="Amazon web service">
						<a href="https://aws.amazon.com/" target="_blank" className="block">
							<img className="h-12" src={AWSLgo} alt="Inlustração" />
						</a>
					</li>
				</ul>

				<p className="text-white text-2xl text-justify">
					Possuo experiência em desenvolvimento{" "}
					<span className="text-default-green">web</span> e{" "}
					<span className="text-default-green">mobile</span> com metodologias{" "}
					<span className="text-default-green">agéis</span>.
				</p>
			</div>
		</section>
	);
}
