import { FunctionComponent, useEffect } from 'react';
import { Box, Flex } from '@mantine/core';
import { useProductsList } from 'modules/products/hooks/use-product-list';

import Boxes from './components/box';
import BoxCategories from './components/boxcategories';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
	const i = 0;
	const { products } = useProductsList({});

	useEffect(() => {
		console.log(products);
	}, []);
	return (
		<>
			<Flex h="84.5vh">
				<Box h="100%" w="26%">
					<BoxCategories mt={0} />
				</Box>
				<Box h="100%" w="100%">
					<Boxes />
				</Box>
			</Flex>
		</>
	);
};

export default Home;
