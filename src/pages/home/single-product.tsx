import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Flex, Grid, Image, Text, Title } from '@mantine/core';

import { data } from './components/box';

interface SingleProductProps {}

const SingleProduct: FunctionComponent<SingleProductProps> = () => {
	const { productId } = useParams<{ productId: string }>();

	console.log(typeof productId);

	return (
		<>
		<Box w="1300px" >
			{data
				.filter(element => element.id === productId)
				.map(item => (
					<Grid key={item.id} gutter="sm">
						<Grid.Col span={5}>
							<Image radius="md" h="100%" w="100%" fit="contain" src={item.image} />
						</Grid.Col>
						<Grid.Col span={2}>
							<Title>О товоре</Title>
							<Flex>
								<Text>{item.title}</Text>
							</Flex>
							<Flex>
								<Text>{item.description}</Text>
							</Flex>
						</Grid.Col>
						<Grid.Col offset={1} span={3}>
							<Box
								w={348}
								bg="#fff"
								sx={{
									boxShadow: '0 20px 12px -16px rgba(0,30,85,.1), 0 8px 24px 18px rgba(0,30,85,.05)',
									borderRadius: '20px',
									minHeight: '66px',
									padding: '20px'
								}}>
								<Flex align="center" justify="space-between" pb={30}>
									<Text bg="#10c44c;"  p={10} color='#fff' sx={{ borderRadius: '10px',fontSize: "30px",fontWeight: 700,lineHeight: "38px"}}>{item.price}</Text>
									<Text bg="#F91155" p={5} color='#fff' sx={{borderRadius:"10px",fontSize:"20px",fontWeight:600,lineHeight:"35px"}}>-{item.percentage}%</Text>
								</Flex>
								<Button h={54} w="100%" radius={15} sx={{alignItems:"center",backgroundColor:"rgba(0, 91, 255, 1)",color:"rgba(255, 255, 255, 1)",cursor:"pointer",textAlign:"center",fontSize:"17px"}}>Add to Cart</Button>
							</Box>
						</Grid.Col>
					</Grid>
				))}
			</Box>
		</>
	);
};

export default SingleProduct;
