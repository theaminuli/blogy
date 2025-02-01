/**
 * Newsletter component renders a subscription form for users to subscribe to a newsletter.
 * 
 * @component
 * @example
 * return (
 *   <Newsletter />
 * )
 * 
 * @returns {JSX.Element} A React component that displays a newsletter subscription form.
 */
const Newsletter = () => {
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
			<h3 className="text-lg text-gray-900 dark:text-white font-bold mb-4">Newsletter</h3>
			<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
				Subscribe to our newsletter to keep up with the latest updates.
			</p>
			<form>
				<input
					type="email"
					placeholder="Email Address"
					className="w-full mb-4 p-2 border border-gray-300 dark:border-gray-700 rounded"
				/>
				<button className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-300">
					Subscribe
				</button>
			</form>
		</div>
	);
};

export default Newsletter;
