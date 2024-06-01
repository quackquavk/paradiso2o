// pages/Earth.js

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Earth() {
  const canvasRef = useRef();
  const modelRef = useRef();

  useEffect(() => {
    let scene, camera, renderer, controls;

    // Initialize scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Initialize camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    // Initialize renderer
    renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load('/images/Earth_1_12756.glb', function (gltf) {
      modelRef.current = gltf.scene;
      scene.add(modelRef.current);
    });

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1).normalize();
    scene.add(directionalLight);

    // Add orbit controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      if (modelRef.current) {
        scene.remove(modelRef.current);
        modelRef.current.traverse(child => {
          if (child.isMesh) {
            child.geometry.dispose();
            child.material.dispose();
          }
        });
      }
      controls.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
