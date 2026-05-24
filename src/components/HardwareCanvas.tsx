import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HardwareCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Lighting Setup (Futuristic Lab Aesthetic)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambientLight);

    // Luz fría desde la esquina superior para reflejos especulares de cristal
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    // Luz de relleno sutil para volumen
    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // Núcleo LED Rojo Central
    const ledLight = new THREE.PointLight(0xff2a2a, 4, 15);
    ledLight.position.set(0, 0, 0);
    scene.add(ledLight);

    // 4. Hardware Assembly (Nothing × Liquid Glass Geometry)
    const hardwareGroup = new THREE.Group();
    scene.add(hardwareGroup);

    // A. Carcasa Exterior: Caja Redondeada Translúcida (Apple Liquid Glass)
    const outerGeo = new THREE.BoxGeometry(2.2, 2.2, 2.2);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
      transmission: 0.95, // Refracción máxima
      roughness: 0.08,
      metalness: 0.05,
      ior: 1.52,          // Índice de refracción del vidrio
      thickness: 1.2,     // Profundidad de la refracción
      specularIntensity: 1.0,
      clearcoat: 1.0,     // Capa pulida brillante
      clearcoatRoughness: 0.02,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    hardwareGroup.add(outerMesh);

    // B. Chasis Interno: Placa de Aluminio Cepillado Estructural (Nothing Aesthetic)
    const innerPlateGeo = new THREE.BoxGeometry(1.6, 1.6, 0.2);
    const innerPlateMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.95,
      roughness: 0.25,
    });
    const innerPlate = new THREE.Mesh(innerPlateGeo, innerPlateMat);
    hardwareGroup.add(innerPlate);

    // C. Micro-rejilla o microdetalles perforados (Nothing dot grid pattern in 3D)
    const detailsGroup = new THREE.Group();
    hardwareGroup.add(detailsGroup);

    const pillarGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.0);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0xdcdcdc,
      metalness: 0.9,
      roughness: 0.1,
    });

    // 4 pilares estructurales en las esquinas
    const positions = [
      [-0.9, -0.9], [0.9, -0.9], [-0.9, 0.9], [0.9, 0.9]
    ];
    positions.forEach(([x, y]) => {
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(x, y, 0);
      pillar.rotation.x = Math.PI / 2;
      detailsGroup.add(pillar);
    });

    // D. Núcleo LED Esférico (Silicon Reactor)
    const coreGeo = new THREE.SphereGeometry(0.32, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xff2a2a,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    hardwareGroup.add(coreMesh);

    // Halo de brillo alrededor del núcleo
    const glowGeo = new THREE.SphereGeometry(0.55, 16, 16);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xff2a2a,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    hardwareGroup.add(glowMesh);

    // E. Micro-bobinas de cobre en el fondo
    const coilGeo = new THREE.TorusGeometry(0.2, 0.05, 8, 32);
    const coilMat = new THREE.MeshStandardMaterial({
      color: 0xb87333, // Cobre
      metalness: 0.8,
      roughness: 0.2
    });
    const coil1 = new THREE.Mesh(coilGeo, coilMat);
    coil1.position.set(0, 0, -0.4);
    hardwareGroup.add(coil1);

    // 5. Environmental Micro-Particles (Ambient dust)
    const particleCount = 250;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 10;
      particlePositions[i + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.025,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Mouse Interaction Event Listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -((e.clientY - rect.top) / height) * 2 + 1;
      mouseRef.current.targetX = x * 0.45;
      mouseRef.current.targetY = y * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 7. Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Flotador inercial magnético sutil
      hardwareGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;
      hardwareGroup.position.x = Math.cos(elapsedTime * 0.8) * 0.05;

      // Rotación pasiva lenta
      hardwareGroup.rotation.y += 0.003;
      hardwareGroup.rotation.x += 0.001;

      // Rotación interactiva inercial (lerp suave)
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      hardwareGroup.rotation.y += mouse.x * 0.5;
      hardwareGroup.rotation.x -= mouse.y * 0.5;

      // Animación suave de la luz LED
      const pulse = 3.5 + Math.sin(elapsedTime * 4) * 0.8;
      ledLight.intensity = pulse;
      glowMesh.scale.setScalar(1.0 + Math.sin(elapsedTime * 4) * 0.05);

      // Rotación de las partículas flotantes
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Responsive Resize Setup
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup Setup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      innerPlateGeo.dispose();
      innerPlateMat.dispose();
      pillarGeo.dispose();
      pillarMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      coilGeo.dispose();
      coilMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative cursor-grab active:cursor-grabbing flex items-center justify-center"
      style={{ minHeight: '400px' }}
    />
  );
};
export default HardwareCanvas;
