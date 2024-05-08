import React, { useEffect, useRef } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
import {   IconButton, Icon, Menu, MenuButton, MenuList,Flex, MenuItem,Link, useDisclosure, Button, ChevronDownIcon } from "@chakra-ui/react";
import { HamburgerIcon,CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import '../style/header.css'
import { 
 faGithub, 
 faLinkedin, 
 faMedium, 
 faStackOverflow, 
} from "@fortawesome/free-brands-svg-icons"; 
import { Box, HStack } from "@chakra-ui/react"; 
import { useTheme } from '../context/ThemeContext';
import { Switch, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const socials = [ 
 { 
   icon: faEnvelope, 
   url: "mailto: hello@example.com", 
 }, 
 { 
   icon: faGithub, 
   url: "https://github.com/NaivoRZK", 
 }, 
 { 
   icon: faLinkedin, 
   url: "https://www.linkedin.com/feed/", 
 }, 
 { 
   icon: faMedium, 
   url: "https://medium.com/@sureskills", 
 }, 
 { 
   icon: faStackOverflow, 
   url: "https://stackoverflow.com/users/sureskills", 
 }, 
]; 

/** 
* This component illustrates the use of both the useRef hook and useEffect hook. 
* The useRef hook is used to create a reference to a DOM element, in order to tweak the header styles and run a transition animation. 
* The useEffect hook is used to perform a subscription when the component is mounted and to unsubscribe when the component is unmounted. 
* Additionally, it showcases a neat implementation to smoothly navigate to different sections of the page when clicking on the header elements. 
*/ 
const Header = () => { 
 const { isOpen, onOpen, onClose } = useDisclosure();
 const headerRef = useRef(null); 
 const { theme, toggleTheme } = useTheme();
  const { toggleColorMode, colorMode } = useColorMode();
  const MotionIconButton = motion(IconButton);
  const MotionMenu = motion(Menu);
 // Modifiez le style en fonction du thème
 const headerStyle = {
  backgroundColor: theme === 'light' ? 'black' : "#4d4d4d",
  color: theme === 'light' ? '#1a1a1a' : 'white',
};
// Modification de l'animation pour le Menu
const menuAnimation = {
  initial: { y: "100%", opacity: 0 }, // Position initiale en dehors de la vue
  animate: { y: "50%", opacity: 1 }, // Position finale juste en dessous du header
  exit: { y: "100%", opacity: 0 }, // Position initiale lors de la fermeture
  transition: { duration: 0.3 }
 };
 
 useEffect(() => { 
   let prevScrollPos = window.scrollY; 
 
   const handleScroll = () => { 
     const currentScrollPos = window.scrollY; 
     const headerElement = headerRef.current; 
     if (!headerElement) { 
       return; 
     } 
     if (prevScrollPos > currentScrollPos) { 
       headerElement.style.transform = "translateY(0)"; 
     } else { 
       headerElement.style.transform = "translateY(-200px)"; 
     } 
     prevScrollPos = currentScrollPos; 
   } 
   window.addEventListener('scroll', handleScroll) 
 
   return () => { 
     window.removeEventListener('scroll', handleScroll) 
   } 
 }, []); 
 
 const handleClick = (anchor) => () => { 
   const id = `${anchor}-section`; 
   const element = document.getElementById(id); 
   if (element) { 
     element.scrollIntoView({ 
       behavior: "smooth", 
       block: "start", 
     }); 
   } 
 }; 
 return ( 
   <Box 
     position="fixed" 
     top={0} 
     left={0} 
     right={0} 
     translateY={0} 
     transitionProperty="transform" 
     transitionDuration=".3s" 
     transitionTimingFunction="ease-in-out" 
     style={headerStyle}
     ref={headerRef} 
   > 

         <MotionMenu
        isOpen={isOpen}
        onClose={onClose}
        initial={menuAnimation.initial}
        animate={menuAnimation.animate}
        exit={menuAnimation.exit}
        transition={menuAnimation.transition}
        style={{ width: "100%px", height: "10000px",margin:"45px" ,position: "absolute", top: 0, left: 0, right: 0 }} // Positionnement absolu
      >
        <MenuList p="40px"
           w="100%"
           h="100%"
        >
          <IconButton
            aria-label="Close menu"
            icon={<CloseIcon />}
            onClick={onClose}
            color="black"
            mb={4} 
          />
          <MenuItem onClick={handleClick("projects")} color="black">Projects</MenuItem>
          <MenuItem onClick={handleClick("Skills")} color="black">My skills</MenuItem>
          <MenuItem onClick={handleClick("contactme")} color="black">Contact Me</MenuItem>
        </MenuList>
      </MotionMenu>
     <Box color="white" maxWidth="1280px" margin="0 auto"> 
       <HStack 
         px={16} 
         py={4} 
         justifyContent="space-between" 
         alignItems="center" 
       >    
  
  <Flex
      color="white"
      maxWidth={{ base: "100%", lg: "1280px" }} 
      py={0}
      px={{ base: "0", lg: "200" }}
      justifyContent={{ base: "flex-start", lg: "space-between" }} 
      gap={{ base: "0", lg: "400" }}
     
    >
         <nav> 
           <HStack spacing={8}> 
             {socials.map(({ icon, url }) => ( 
               <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 

               > 
                <FontAwesomeIcon icon={icon} size="2x" key={url} className="monIcon" />
               </a> 
             ))} 
           </HStack> 
         </nav> 
         <nav className="nav-link"> 
   
           <HStack spacing={8}> 
           <Link href="#projects" fontSize="sm" onClick={handleClick("projects")} display={{ base: "none", md: "inline-flex" }}>
                Projects
              </Link>
              <Link href="#skills" fontSize="sm"onClick={handleClick("skills")} display={{ base: "none", md: "inline-flex" }}>
                My skills
              </Link>
              <Link href="#contactme" fontSize="sm" onClick={handleClick("contactme")} display={{ base: "none", md: "inline-flex" }}>
                Contact Me
              </Link>
             

             <Switch
      size="md"
      colorScheme={theme === "dark" ? "gray" : "yellow"}
      isChecked={theme === "dark"}
      onChange={toggleTheme}
      className="monSwitch"
    />
         <MotionIconButton
         display={{ base: "block", md: "none" }}
         aria-label="Menu"
         icon={<HamburgerIcon />}
        onClick={onOpen}
        whileTap={{ scale: 0.9 }}
        color= 'black'
      
/>
    
           </HStack>
         </nav> 
         </Flex>
        
       </HStack> 
       
     </Box> 
     
     
      </Box> 
 ); 
}; 

export default Header; 