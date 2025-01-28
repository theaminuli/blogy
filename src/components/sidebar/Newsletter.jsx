const Newsletter = () => {
	return (
		<div className="bg-white rounded-lg shadow-md p-4">
			<h3 className="text-lg text-gray-900 font-bold mb-4">Newsletter</h3>
			<p className="text-sm text-gray-600 mb-4">
				Subscribe to our newsletter to keep up with the latest updates.
			</p>
			<form>
				<input
					type="email"
					placeholder="Email Address"
					className="w-full mb-4 p-2 border border-gray-300 rounded"
				/>
				<button className="w-full bg-blue-500 text-white py-2 rounded">
					Subscribe
				</button>
			</form>
		</div>
	);
};
export default Newsletter;