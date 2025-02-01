/* eslint-disable react/prop-types */
/**
 * BlogContent component renders the content of a blog post.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.post - The blog post object.
 * @param {Object} props.post.content - The content object of the blog post.
 * @param {string} props.post.content.rendered - The rendered HTML content of the blog post.
 * @returns {JSX.Element} The rendered blog content.
 */
const BlogContent = ({ post }) => {
	return (
		<article
			className="mt-8 text-[17px] leading-relaxed text-gray-900 dark:text-white"
			dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
		></article>
	);
};
export default BlogContent;
