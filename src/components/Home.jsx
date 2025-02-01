import { BlogLayout } from "./posts";
import { PortfolioHero } from "./profile";

/**
 * Home component that renders the PortfolioHero and BlogLayout components.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
const Home = () => {
	return (
		<>
			<PortfolioHero />
			<BlogLayout />
		</>
	);
};

export default Home;
