import * as React from "react"; 
import { VStack } from "@chakra-ui/react"; 
import { useTheme } from '../context/ThemeContext';
/** 
* Illustrates the use of children prop and spread operator 
*/ 
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => 
  
  { 
    
const { theme, toggleTheme } = useTheme();

    const headerStyle = {
      backgroundColor: theme === 'light' ? '#e6e6e6' : 'black',
      color: theme === 'light' ? 'black' : 'white',
    };
 return ( 
   <VStack 
   style={headerStyle}
   > 
     <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}> 
       {children} 
     </VStack> 
   </VStack> 
 ); 
}; 
 
export default FullScreenSection;