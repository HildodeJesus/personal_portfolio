import homeImg from "../../assets/home_img.png";
import BtnToDown from "./components/BtnToDown";

export default function Home() {
	return (
		<section
			id="home"
			className="flex w-full px-80 h-screen bg-default-gradient relative"
		>
			<div className="w-full h-1/6 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
			<div className="flex flex-col items-start justify-center w-1/2 my-[-50px] h-full gap-9">
				<h1 className="w-[550px] text-white text-6xl font-bold ">
					<span className="text-default-green">&lt;</span>Coloque o código na
					mesa! <span className="text-default-green">/&gt;</span>
				</h1>
				<p className="text-2xl w-[500px] text-justify text-white font-light">
					Olá! Me chamo Hildo, um compulteiro ao dispor.
				</p>
				<a
					href="#FAQ"
					className="block bg-none ml-28 border-default-green text-lg py-3 px-7 text-default-green border-[1px]"
				>
					Entre em contato
				</a>{" "}
				<BtnToDown />
			</div>

			<div className="flex items-end w-1/2 h-full justify-end">
				<img
					src={homeImg}
					className="h-[500px]"
					alt="Inslustração de boneco com oculos no home"
				/>
			</div>
		</section>
	);
}
