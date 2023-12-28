import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

interface SingleProductProps {}

const SingleProduct: FunctionComponent<SingleProductProps> = () => {
	const { productId } = useParams();

	return (
		<>
			<h1>{productId}</h1>
		</>
	);
};

export default SingleProduct;
