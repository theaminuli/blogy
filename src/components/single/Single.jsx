/* eslint-disable no-unused-vars */
import { useParams } from "react-router";
import { useFetchAnyData } from "../../hooks";
import ArticleHeader from "./ArticleHeader";
import BlogContent from "./BlogContent";
import HeroSection from "./HeroSection";
import ReplyForm from "./ReplyForm";

/**
 * Single component fetches and displays a single blog post based on the URL slug.
 * It uses the `useParams` hook to get the slug from the URL and the `useFetchAnyData` 
 * custom hook to fetch the post data.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Single = () => {
	const { slug } = useParams();
	const { data, loading, error } = useFetchAnyData(`/posts?slug=${slug}`);
	const post = data?.[0];

	return (
		<>
			<div className="single-container mx-auto px-4 lg:px-16 ">
				<ArticleHeader post={post} />
				<HeroSection post={post} />
				<BlogContent post={post} />
				<ReplyForm />
			</div>
		</>
	);
};
export default Single;
