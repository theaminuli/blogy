import { Newsletter, Tags, Topics } from "../sidebar";
import BlogLoadMore from "./BlogLoadMore";
import BlogPostCard from "./BlogPostCard";

const BlogLayout = () => {
	return (
		<div className="min-h-screen bg-gray-100 py-20">
			<div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
				<div className="md:col-span-2">
					<h2 className="text-2xl text-gray-900 font-bold mb-6">
						Latest Blog Post
					</h2>
					<div className="grid gap-6">
						{/* Blog Card */}
						{[
							{
								title:
									"Building microservices with Dropwizard, MongoDB & Docker",
								category: "Database",
								author: "Julia Walker",
								date: "Jan 17, 2022",
								readTime: "3 min",
								image: "https://via.placeholder.com/150",
							},
							{
								title: "Fast web page loading on a $20 feature phone",
								category: "Web Performance",
								author: "Julia Walker",
								date: "Dec 10, 2021",
								readTime: "3 min",
								image: "https://placehold.co/150",
							},
							{
								title: "Accessibility Tips for Web Developers",
								category: "Accessibility",
								author: "Julia Walker",
								date: "Nov 28, 2021",
								readTime: "4 min",
								image: "https://placehold.co/150",
							},
						].map((post, index) => (
							<BlogPostCard key={index} post={post} />
						))}
					</div>
					<BlogLoadMore />
				</div>

				<div className="md:col-span-1">
					<Topics />
					<Tags />
					<Newsletter />
				</div>
			</div>
		</div>
	);
};
export default BlogLayout;
