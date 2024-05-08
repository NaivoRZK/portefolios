import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Grid, Fade } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faSass, faBootstrap, faJs, faReact, faFigma, faNodeJs, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/ThemeContext';
import { InView } from 'react-intersection-observer';
const Skill = () => {
 const { theme, toggleTheme } = useTheme();
 //Initialisation de l'état pour rootMargin du deuxième div
 const [firstDivRootMargin, setFirstDivRootMargin] = useState('-100px');

 useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setFirstDivRootMargin('-50px'); 
      } else {
        setFirstDivRootMargin('-200px');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Appel initial pour définir la valeur initiale

    return () => window.removeEventListener('resize', handleResize);
 }, []);

 const headerStyle = {
    backgroundColor: theme === 'light' ? '#e6e6e6' : 'black',
    color: theme === 'light' ? 'black' : 'white',
 };

 // Définition des animations CSS
 const slideInLeft = {
    animation: 'slideInLeft 0.5s ease-out',
    animationFillMode: 'forwards',
 };

 const slideInRight = {
    animation: 'slideInRight 0.5s ease-out',
    animationFillMode: 'forwards',
 };

 // Définition des animations CSS
 const slideInLeftAnimation = `@keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
 }`;

 const slideInRightAnimation = `@keyframes slideInRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
 }`;

 

 return (
    <Box style={headerStyle} id="#skills">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={40}
      >
        <Heading as="h1" id="projects-section">
          My skills
        </Heading>

        <InView rootMargin={firstDivRootMargin} triggerOnce={false}>
          {({ inView, ref }) => (
            <Fade in={inView}>
              <Grid
                ref={ref}
                style={inView ? slideInLeft : {}}
                boxShadow={theme === 'light' ? "0 10px 20px rgba(0, 0, 0, 0.25)" : "0 10px 15px rgba(255, 255, 255, 0.3)"}
                backgroundColor={theme === 'light' ? 'white' : '#4d4d4d'}
                templateColumns="repeat(3, 1fr)"
                gap={2}
                border="2px solid"
                borderColor="gray.300"
                borderRadius="md"
                width="200px"
                height="150px"
                p={2}
                mb="23px"
              >
                <FontAwesomeIcon icon={faHtml5} size="2x" />
                <FontAwesomeIcon icon={faCss3} size="2x" />
                <FontAwesomeIcon icon={faSass} size="2x" />
                <FontAwesomeIcon icon={faBootstrap} size="2x" />
                <FontAwesomeIcon icon={faJs} size="2x" />
                <FontAwesomeIcon icon={faReact} size="2x" />
              </Grid>
            </Fade>
          )}
        </InView>

        <InView rootMargin="-100px" triggerOnce={false}>
          {({ inView, ref }) => (
            <Fade in={inView}>
              <Grid
                ref={ref}
                style={inView ? slideInRight : {}}
                boxShadow={theme === 'light' ? "0 10px 20px rgba(0, 0, 0, 0.25)" : "0 10px 15px rgba(255, 255, 255, 0.3)"}
                backgroundColor={theme === 'light' ? 'white' : '#4d4d4d'}
                templateColumns="repeat(3, 1fr)"
                gap={2}
                border="2px solid"
                borderColor="gray.300"
                borderRadius="md"
                width="200px"
                height="150px"
                p={2}
              >
                <FontAwesomeIcon icon={faFigma} size="2x" />
                <FontAwesomeIcon icon={faNodeJs} size="2x" />
                <FontAwesomeIcon icon={faGit} size="2x" />
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Grid>
            </Fade>
          )}
        </InView>
      </Flex>
      {/* Ajout des styles d'animation CSS */}
      <style>
        {`
          ${slideInLeftAnimation}
          ${slideInRightAnimation}
        `}
      </style>
    </Box>
 );
};

export default Skill;
