import React from "react";
import '../style/landing.css'
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { Typewriter } from 'react-simple-typewriter';
import { useSpring, animated } from 'react-spring';
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moiImage from '../images/moi.png';
import { useTheme } from '../context/ThemeContext';
const greeting = "Hello, I am Andry";
const bio1 = ["A frontend developer"];
const bio2 = ["specialized in React"];
library.add(faSmile);

const LandingSection = () => {
  const { theme, toggleTheme } = useTheme();
  
  
  const animation = useSpring({
    from: { transform: 'translate3d(0, 100%, 0)' },
    to: { transform: 'translate3d(0, 0%, 0)' },
    config: { mass: 7, tension: 75, friction: 45 },
   });
  

 //Foncton pour le telechargment de cv
 const onButtonClick = () => {
  const pdfUrl = "cv.pdf"; 
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "CV Andry"; // Spécifiez le nom du fichier téléchargé
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
   

 return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      

    >
      <animated.div style={animation}>
        <VStack spacing={16} mt="80px">
          <VStack spacing={4} alignItems="center">
            <Avatar
               src={moiImage}
              size="2xl"
              name="Andry Malala"
            />
            <Heading as="h4" size="md"  noOfLines={1}>
              {greeting}  <FontAwesomeIcon icon="smile" />
            </Heading>
          </VStack>
          <VStack spacing={6}>
            <Heading as="h1"   size={{ base: "xl", md: "3xl" }}  noOfLines={1}>
              <Typewriter words={bio1} loop="false" typeSpeed="80" />
            </Heading>
            <Heading as="h1"   size={{ base: "xl", md: "3xl" }}  noOfLines={1}>
              <Typewriter words={bio2} loop="false" typeSpeed="100" />
            </Heading>
            <button onClick={onButtonClick} className= {theme === 'light' ? 'btn-white-cv' : 'btn-dark-cv'}>
             Download my CV
           </button>
      
    
          </VStack>
        </VStack>
      </animated.div>
    </FullScreenSection>
 );
};

export default LandingSection;
