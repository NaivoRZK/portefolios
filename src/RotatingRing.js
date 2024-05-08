import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RotatingRing = React.forwardRef((props, ref) => {
 const containerRef = useRef();

 useEffect(() => {
    // Scène
    const scene = new THREE.Scene();

    // Caméra
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Rendu
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Création du rond 3D
    const geometry = new THREE.RingGeometry(0.1, 1.5, 32);
    const material = new THREE.MeshBasicMaterial({ color: "#5c743b", side: THREE.DoubleSide });
    const ring = new THREE.Mesh(geometry, material);
    scene.add(ring);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      ring.rotation.y += 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Nettoyage
    return () => {
      renderer.dispose();
      // Suppression de la ligne scene.dispose() car elle n'est pas nécessaire
    };
 }, []);

 return <div ref={containerRef} />;
});

export default RotatingRing;
