/**
 * Comments component renders a section displaying user comments.
 *
 * @component
 * @example
 * return (
 *   <Comments />
 * )
 *
 * @returns {JSX.Element} A section containing user comments with user details and comment text.
 */
const Comments = () => {
	return (
		<section className="mt-12 bg-white p-6 rounded-lg shadow">
			<h3 className="text-xl font-bold mb-4">Comments</h3>
			<div className="border-b pb-4 mb-4">
				<div className="flex items-center">
					<img
						src="https://via.placeholder.com/40"
						className="w-10 h-10 rounded-full"
						alt="User"
					/>
					<div className="ml-4">
						<p className="font-semibold">KAYSWELL</p>
						<p className="text-sm text-gray-500">kayswell@email.com</p>
					</div>
				</div>
				<p className="mt-2">I wanted to say, this blog is really great!...</p>
			</div>
		</section>
	);
};
export default Comments;
