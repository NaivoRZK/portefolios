import React, { useState, useEffect } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Skill from "./components/Skill";
import RotatingRing from "./RotatingRing";
import AnimatedCursor from "react-animated-cursor"; // Ajoutez cette ligne
import { useTheme } from './context/ThemeContext';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleLoad);
    } else {
      handleLoad();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleLoad);
    };
  }, []);

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          {isLoading ? <RotatingRing /> : (
            <>
            <AnimatedCursor
                innerSize={600}
                color={theme === 'light' ? 'white' : "white"}
                outerAlpha={20} 
 outerStyle={{
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))', // Gradient opaque noir
    mixBlendMode: 'normal' // Utilisez mixBlendMode pour ajuster l'effet de mélange
 }}
/>
 {/* Ajoutez cette ligne */}
              <Header />
              <LandingSection />
              <ProjectsSection />
              <Skill />
              <ContactMeSection />
              <Footer />
              <Alert />
            </>
          )}
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
