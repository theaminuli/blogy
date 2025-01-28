import Footer from "./components/footer";
import { Header } from "./components/header";
import PortfolioHero from "./components/PortfolioHero";
import BlogLayout from "./components/posts/BlogLayout";

function App() {
	return (
		<>
			<Header />
			<PortfolioHero />
			<BlogLayout />
			<Footer />
		</>
	);
}

export default App;
