const Single = () => {
	return (
		<>
			<div className="container mx-auto px-4 lg:px-16">
				{/* <!-- Article Header --> */}
				<header className="text-center py-6">
					<nav className="text-sm text-gray-500">
						<a href="#" className="hover:underline">
							CSS FUNCTIONS
						</a>
						|
						<a href="#" className="hover:underline">
							RESPONSIVE
						</a>
					</nav>
					<h1 className="text-3xl md:text-5xl font-bold mt-2">
						How to use the Power of CSS Functions
					</h1>
					<p className="text-gray-600 mt-2">
						By
						<a href="#" className="text-blue-600 hover:underline">
							The Author
						</a>
						| October 3, 2023 | 2 Comments
					</p>
				</header>

				{/* <!-- Hero Section --> */}
				<section
					className="relative w-full h-64 md:h-96 bg-cover bg-center"
					style="background-image: url('https://via.placeholder.com/1200x400');"
				>
					<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center">
						<h2 className="text-white text-2xl md:text-4xl font-bold">
							Mastering Responsive Design with CSS min(), max(), and clamp()
						</h2>
					</div>
				</section>

				{/* <!-- Blog Content --> */}
				<article className="mt-8 text-lg leading-relaxed">
					<p>
						In the ever-evolving world of web design, creating responsive
						layouts and typography...
					</p>
					<h2 className="text-2xl font-bold mt-6">
						The Power of CSS Functions
					</h2>
					<p>CSS functions provide flexibility...</p>
				</article>

				{/* <!-- Comments Section --> */}
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
						<p className="mt-2">
							I wanted to say, this blog is really great!...
						</p>
					</div>
				</section>

				{/* <!-- Reply Form --> */}
				<section className="mt-8 bg-white p-6 rounded-lg shadow">
					<h3 className="text-xl font-bold mb-4">Leave a Reply</h3>
					<form>
						<label className="block text-gray-700">Comment*</label>
						<textarea
							className="w-full border p-2 rounded mt-2"
							rows="4"
							required
						></textarea>
						<div className="flex gap-4 mt-4">
							<div className="w-1/2">
								<label className="block text-gray-700">Name*</label>
								<input
									type="text"
									className="w-full border p-2 rounded mt-2"
									required
								/>
							</div>
							<div className="w-1/2">
								<label className="block text-gray-700">Email*</label>
								<input
									type="email"
									className="w-full border p-2 rounded mt-2"
									required
								/>
							</div>
						</div>
						<div className="mt-4 flex items-start gap-2">
							<input type="checkbox" id="save-info" className="mt-1" />
							<label htmlFor="save-info" className="text-sm text-gray-600">
								Save my name and email for the next time I comment.
							</label>
						</div>
						<button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
							Post Comment
						</button>
					</form>
				</section>
			</div>
		</>
	);
};
export default Single;
