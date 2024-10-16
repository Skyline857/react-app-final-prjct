const Welcome = ({ title }) => {
	return (
		<section className="py-5 text-center">
			<div className="container">
				<h2 className="display-4">{title}</h2>
				<p className="lead">
					Explore our exclusive range of cosmetics to find your
					perfect match.
				</p>
			</div>
		</section>
	);
};

export default Welcome;
