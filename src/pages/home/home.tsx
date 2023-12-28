import { FunctionComponent } from "react";
import { Box, Flex } from "@mantine/core";

import Boxes from "./components/box";
import BoxCategories from "./components/boxcategories"


interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    const i= 0 ;
    
    return ( 

        <>
           <Flex h="84.5vh" >
            <Box h="100%" w="26%"  >
            <BoxCategories mt={0}/>
           </Box>
           <Box h="100%" w="100%" >

           <Boxes/>
           </Box>
           </Flex>
        </>
     );
}
 
export default Home;