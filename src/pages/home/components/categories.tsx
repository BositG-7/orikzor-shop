import { FunctionComponent } from "react";
import { Box, Text } from "@mantine/core";

import "./index.css"

interface CategoriesProps {
    id:number
    name:string
}
 
const Categories: FunctionComponent<CategoriesProps> = ({id,name}) => {
    const i= 0 ;
    
    return ( 

        <>
            <Box w="100%" sx={{flexDirection:"column"}}>
            <Text fz="md" className="categories_name" sx={{color: "#070707",lineHeight: "23px",fontWeight: 400,letterSpacing: ".2px",cursor: "pointer",'&:hover': {color: '#0050e0'}}}>{name}</Text>
            
            </Box>
        </>
     );
}
 
export default Categories;