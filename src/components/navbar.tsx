import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex } from '@mantine/core';
import { useAuth } from 'modules/auth/context';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
	const navigete = useNavigate();
	const { user } = useAuth();

	return (
		<>
			<Flex w="100%" h="100px" justify="center" align="center" bg="red">
				dqw
			</Flex>
		</>
	);
};

export default Navbar;
