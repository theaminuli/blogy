/**
 * ReplyForm component renders a form for users to leave a reply.
 *
 * @component
 * @example
 * return (
 *   <ReplyForm />
 * )
 *
 * @returns {JSX.Element} The rendered ReplyForm component.
 */
const ReplyForm = () => {
	return (
		<section className="mt-8 mb-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow border-t border-t-sky-100 dark:border-t-gray-700">
			<h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
				Leave a Reply
			</h3>
			<form>
				<label className="block text-gray-700 dark:text-gray-300">Comment*</label>
				<textarea
					className="w-full border dark:border-gray-600 p-2 rounded mt-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
					rows="4"
					required
				></textarea>
				<div className="flex gap-4 mt-4">
					<div className="w-1/2">
						<label className="block text-gray-700 dark:text-gray-300">Name*</label>
						<input
							type="text"
							className="w-full border dark:border-gray-600 p-2 rounded mt-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
							required
						/>
					</div>
					<div className="w-1/2">
						<label className="block text-gray-700 dark:text-gray-300">Email*</label>
						<input
							type="email"
							className="w-full border dark:border-gray-600 p-2 rounded mt-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
							required
						/>
					</div>
				</div>
				<div className="mt-4 flex items-start gap-2">
					<input type="checkbox" id="save-info" className="mt-1 dark:accent-gray-600" />
					<label htmlFor="save-info" className="text-sm text-gray-600 dark:text-gray-400">
						Save my name and email for the next time I comment.
					</label>
				</div>
				<button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700">
					Post Comment
				</button>
			</form>
		</section>
	);
};
export default ReplyForm;
