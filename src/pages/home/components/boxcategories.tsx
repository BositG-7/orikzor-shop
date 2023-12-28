import { FunctionComponent, useState } from 'react';
import { Box, Button, Checkbox, Flex, NumberInput, Popover, RangeSlider, Switch, Text, Title } from '@mantine/core';

import Categories from './categories';



const data = [
	{
		id: 1,
		name: 'Electronics'
	},
	{
		id: 2,
		name: 'Home and garden'
	},
	{
		id: 3,
		name: 'Kids'
	},
	{
		id: 4,
		name: 'Games'
	},
	{
		id: 5,
		name: 'Iphone'
	},
	{
		id: 6,
		name: 'Iphone'
	},
	{
		id: 7,
		name: 'Iphone'
	},
	{
		id: 8,
		name: 'Iphone'
	},
	{
		id: 9,
		name: 'Iphone'
	},
	{
		id: 10,
		name: 'Iphone'
	},
	{
		id: 11,
		name: 'Iphone'
	},
	{
		id: 12,
		name: 'Iphone'
	},
	{
		id: 13,
		name: 'Iphone'
	}
];

interface BoxProps {
	mt: number;
}

const BoxCategories: FunctionComponent<BoxProps> = () => {
	const i = 0;

	const [minPrice, setMinPrice] = useState<number>(200000); // Minimum qiymat
  const [maxPrice, setMaxPrice] = useState<number>(1000000); // 
 





	return (
		<>
			<Box h="100%" p={20} w="100%" sx={{ overflow: 'scroll', overflowX: 'hidden', overflowY: 'visible' }} className="categories">
				<Text fz="lg" sx={{ fontWeight: 700,marginBottom:"4px",letterSpacing: ".2px",color:"#001a34"}}>
					Categories
				</Text>
				{data.map((item, index) => (
					<Box key={+index}>
						<Categories name={item.name}  id={item.id} />
					</Box>
				))}
				<Flex mt={40} justify="space-between" align="center">
					<Title
						sx={{
							color: '#001a34',
							fontWeight: 700,
							fontSize: '18px',
							letterSpacing: '.2px',
							lineHeight: '24px',
							
						}}>
						Распродажа
					</Title>
					<Switch />
				</Flex>
             <Box>
				<Title 
				sx={{
					color: '#001a34',
					fontWeight: 700,
					fontSize: '18px',
					letterSpacing: '.2px',
					lineHeight: '24px',
					
				}} mt={30} mb={17}>
					Бренды
				</Title>
					<Box w="100%" mb={5}><Flex align="center" gap={10}><Checkbox size="xs"/><Text sx={{fontSize:"15px",fontWeight: 400,fontFamily:"Montseratt,sans-serif",letterSpacing: ".2px",cursor:"pointer",color:"#001a34"}}>Мелочей</Text></Flex></Box>
					<Box w="100%" mb={5}><Flex align="center" gap={10}><Checkbox size="xs"/><Text sx={{fontSize:"15px",fontWeight: 400,fontFamily:"Montseratt,sans-serif", letterSpacing: ".2px",cursor:"pointer",color:"#001a34"}}>Мир разнообразия</Text></Flex></Box>
			 </Box>
			 <Flex mt={40} justify="space-between" align="center">
			 <Popover width={200} position="bottom" withArrow shadow="md" >
      <Popover.Target>
        <Button sx={{width:"10px", padding:"8px",height:"8px",overflow:"visible"}} className='btns'><Text sx={{fontSize:"13px",color:"white",fontFamily:"serif",overflow:"visible"}}>I</Text></Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
					<Title
						sx={{
							color: '#001a34',
							fontWeight: 700,
							fontSize: '14px',
							letterSpacing: '.2px',
							lineHeight: '24px',
							
						}}>
						Еженедельная акция
					</Title>
					<Switch mr={4}/>
				</Flex>
				<Box mt={20}>
					<Text mb={5}>Цены</Text>
					<RangeSlider  min={minPrice} max={maxPrice} step={0.3} onChange={(newRange) => {
        // Agar RangeSlider dan olinayotgan qiymat array bo'lsa, 0-indexdagi va 1-indexdagi elementlarni olish
        const newMinPrice = Array.isArray(newRange) ? newRange[0] : newRange;
        const newMaxPrice = Array.isArray(newRange) ? newRange[1] : newRange;

        setMinPrice(newMinPrice);
        setMaxPrice(newMaxPrice);
      }} value={[minPrice, maxPrice]} />
					<Flex gap={10} mt={20}><NumberInput value={minPrice} hideControls />
					<NumberInput value={maxPrice} hideControls /></Flex>
				</Box>
			</Box>
		</>
	);
};

export default BoxCategories;
