const ProductCard = ({ info }) => {
	const {name, img, desc, price, category } = info;

	return (
		<div className="col-lg-4 mb-4">
			<div className="card">
				<img src={img} className="card-img-top" alt={name} />
				<div className="card-body text-center">
					<p className="card-category text-uppercase text-muted">
						{category}
					</p>
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{desc}</p>
					<p className="card-price text-muted">{price}</p>
					{/* <a href="#" className="btn btn-primary">
						View Details
					</a> */}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
