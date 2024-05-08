import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading ,Text} from "@chakra-ui/react"; 
import Card from "./Card"; 
import { useTheme } from '../context/ThemeContext';
const projects = [ 
  
 { 
   title: "React Space", 
   description: 
     "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", 
   getImageSrc: () => require("../images/photo1.jpg"), 
 }, 
 { 
   title: "React Infinite Scroll", 
   description: 
     "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️", 
   getImageSrc: () => require("../images/photo2.jpg"), 
 }, 
 { 
   title: "Photo Gallery", 
   description: 
     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income", 
   getImageSrc: () => require("../images/photo3.jpg"), 
 }, 
 { 
   title: "Event planner", 
   description: 
     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
   getImageSrc: () => require("../images/photo4.jpg"), 
 }, 
]; 
 
const ProjectsSection = () => { 
  const { theme, toggleTheme } = useTheme();
  const headerStyle = {
    backgroundColor: theme === 'light' ? '#e6e6e6' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  };
 return ( 
   <FullScreenSection 
   style={headerStyle}
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading>
     <Text color="#64748b" fontSize="lg">
            Voici les projet personnel que j'ai créér;
          </Text>
    <Box
    display={{ base: "grid", md: "grid" }}
    gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
    gridGap={8}
  >
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;