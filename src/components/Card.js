import React, { useEffect, useState } from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../context/ThemeContext';

const Card = ({ title, description, imageSrc }) => {
 const { theme, toggleTheme } = useTheme();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // On change l'état pour déclencher l'animation
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    observer.observe(document.querySelector('.card'));
    return () => observer.disconnect();
 }, []);

 return (
    <div className="card">
      <VStack
        w="400px"
        color="black"
        backgroundColor="white"
        cursor="pointer"
        borderRadius="xl"
        boxShadow={theme === 'light' ? "0 10px 20px rgba(0, 0, 0, 0.25)" : "0 10px 15px rgba(255, 255, 255, 0.3)"}
      >
        <Image borderRadius="xl" src={imageSrc} alt={title} />
        <VStack spacing={4} p={4} alignItems="flex-start">
          <HStack justifyContent="space-between" alignItems="center">
            <Heading as="h3" size="md">
              {title}
            </Heading>
         
          
            

          </HStack>
          <Text color="#64748b" fontSize="lg">
            {description}
          </Text>
          <HStack spacing={2} alignItems="center">
            <p>See more</p>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </VStack>
    </div>
 );
};

export default Card;
