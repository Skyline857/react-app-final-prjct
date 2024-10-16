import NavigationLink from './NavigationLink';

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavigationLink title="Home" link="" />
						</li>
						<li className="nav-item">
							<NavigationLink title="Products" link="products" />
						</li>
						<li className="nav-item">
							<NavigationLink title="Gallery" link="gallery" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
