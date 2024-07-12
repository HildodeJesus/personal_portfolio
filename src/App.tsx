import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
	return (
		<>
			<div className="bg-black duration-100 scroll-smooth overflow-x-hidden w-screen h-screen">
				<Header />
				<main className="flex flex-col">
					<Home />
					<About />
				</main>
			</div>
		</>
	);
}

export default App;
