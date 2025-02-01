/**
 * A functional React component that renders a copyright notice.
 *
 * @component
 * @example
 * return (
 *   <Copyright />
 * )
 *
 * @returns {JSX.Element} A JSX element containing the copyright notice.
 */
const Copyright = () => {
	return (
		<div className="container text-center py-4 text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 m-auto">
			<p>
				© Copyright 2025{" "}
				<a
					href="https://theaminul.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 dark:text-blue-400 hover:underline"
				>
					Theaminul
				</a>
			</p>
		</div>
	);
};

export default Copyright;
