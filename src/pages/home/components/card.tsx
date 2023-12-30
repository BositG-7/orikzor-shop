import { FunctionComponent } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Progress, Text } from '@mantine/core';

import star from '../../../assets/images/star.png';

import './index.css';

export interface CardProps {
	id:string;
	title: string;
	price: string;
	image: string;
	description: string;
	cartImage: string;
	percentage: number;
}

export const Card: FunctionComponent<CardProps> = ({ id, price, title, description, image, cartImage, percentage }) => {
	const i = 0;

    const navigate = useNavigate()


	return (
		<>
	
			<Box
				sx={{
					border: '1px solid grey',
					borderRadius: '10px',
					'&:hover': {
						transform: 'translateY(-10px)'
					},
					transition: '0.3s'
				}}
				p={10}>
				<Flex justify="center" w="100%" direction="column" pl={0} pr={0} p={24} gap="4px">
					
					<img onClick={()=>navigate(`/product/${id}`)} style={{ borderRadius: '10px', backgroundColor: 'grey', cursor: 'pointer' }} src={image} width="100%" height="190" alt="" />
					<Flex justify="space-between">
						<Text
							sx={{ color: '#F81155', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: '25px', fontWeight: 700, letterSpacing: '4px' }}>
							{price}
						</Text>
						<Text sx={{ color: '#F81155', fontSize: '18px', marginTop: '3px' }}>-{percentage}%</Text>
					</Flex>
					<Box w={150}>
						<Text>осталось 7шт</Text>
						<Progress radius="md" h={7} value={40} />
					</Box>
					<Box sx={{ color: '#070707', fontWeight: 500 }}>
						<Text
							w="auto"
							sx={{
								'&:hover': {
									color: '#0050e0'
								},
								lineHeight: '24px',
								fontSize: '16px',
								letterSpacing: '.2px',
								color: '#070707'
							}}
							className="title">
							{title}
						</Text>
					</Box>
					<Text className="title">{description}</Text>
					<Flex>
						<img src={star} width="20px" height="20px" alt="title" />
						<Text sx={{ color: 'rgba(0, 26, 52, 0.6)', fontSize: '15px' }}>4.7</Text>
					</Flex>
					<Button w="100%" h={50} mt={10} sx={{ backgroundColor: '#005bff' }}>
						<img src={cartImage} width="20px" height="20px" alt="" />
						<Text pl={10} sx={{ fontSize: '16px', fontWeight: 500, letterSpacing: '.2px', lineHeight: '20px' }}>
							Add to Cart
						</Text>
					</Button>
					
				</Flex>
			</Box>
		</>
	);
};

export default Card;
