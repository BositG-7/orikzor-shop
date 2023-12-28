import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mantine/core';

import { Card } from './card';

import boxImage from '../../../assets/images/BoxImage.png';
import cart from '../../../assets/images/cart.png';

interface BoxProps {}
const data = [
	{
		title: 'Iphone',
		description: 'Iphone3',
		image: boxImage,
		cartImage: cart,
		price: '1000$',
		percentage: 10
	},
	{
		title: 'Iphone',
		description: 'Iphone3',
		image: boxImage,
		cartImage: cart,
		price: '2000$',
		percentage: 20
	},
	{
		title: 'Iphone',
		description: 'Iphone3',
		image: boxImage,
		cartImage: cart,
		price: '3000$',
		percentage: 35
	},
	{
		title: 'Iphone',
		description: 'Iphone3',
		image: boxImage,
		cartImage: cart,
		price: '4000$',
		percentage: 13
	},
	{
		title: 'Iphone',
		description: 'Iphone3',
		image: boxImage,
		cartImage: cart,
		price: '4000$',
		percentage: 23
	},
	{
		title: 'Iphone',
		description: 'Iphone3',
		image: boxImage,
		cartImage: cart,
		price: '4000$',
		percentage: 42
	},
	{
		title: 'Iphone',
		description: 'Iphone3',
		image: boxImage,
		cartImage: cart,
		price: '4000$',
		percentage: 31
	},
	{
		title: 'Iphone',
		description: 'Iphone3',
		image: boxImage,
		cartImage: cart,
		price: '4000$',
		percentage: 10
	}
];

const Boxes: FunctionComponent<BoxProps> = () => {
	const navigete = useNavigate();

	return (
		<>
			<Box h="100%" p={20} w="100%" sx={{ overflow: 'scroll', overflowX: 'hidden', maxHeight: '100%' }}>
				<Grid gutter="md">
					{data.map((item, index) => (
						<Grid.Col
							onClick={() => {
								navigete(`/product/${index}`);
							}}
							key={+index}
							span={12}
							sm={6}
							md={4}
							lg={3}>
							<Card
								title={item.title}
								image={item.image}
								description={item.description}
								cartImage={item.cartImage}
								price={item.price}
								percentage={item.percentage}
							/>
						</Grid.Col>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default Boxes;
