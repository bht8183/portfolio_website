// src/components/Starfield.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * Starfield component renders an animated star background using Three.js
 * - Adjust `totalStars` to change the number of stars
 * - Change `cameraSettings` to tweak camera FOV, near/far planes, or initial position
 * - Uses a symmetric box volume so the camera stays inside the field
 */
export default function Starfield() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // === Scene & Camera Setup ===
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();

    const cameraSettings = {
      fov: 75,
      aspect: width / height,
      near: 1,
      far: 20000,
      initialZ: 0      // keep camera at origin inside the starfield
    };

    const camera = new THREE.PerspectiveCamera(
      cameraSettings.fov,
      cameraSettings.aspect,
      cameraSettings.near,
      cameraSettings.far
    );
    camera.position.z = cameraSettings.initialZ;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // === Stars Geometry ===
    const totalStars = 40000;
    const positions = new Float32Array(totalStars * 3);
    const boxSize = { x: 30000, y: 15000, z: 15000 };

    for (let i = 0; i < totalStars; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * boxSize.x;  // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * boxSize.y;  // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * boxSize.z;  // z
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // === Material & Points ===
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // === Animation Loop ===
    let frameId;
    const animate = () => {
      // only rotate the stars around Y-axis
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // === Handle Resize ===
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // === Cleanup ===
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0" />;
}