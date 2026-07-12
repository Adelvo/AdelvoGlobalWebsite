"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const GLOBE_RADIUS = 1.5;

export default function GlobeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 3.75);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
    const textureLoader = new THREE.TextureLoader();

    const dayMap = textureLoader.load("/textures/earth_day.jpg");
    dayMap.colorSpace = THREE.SRGBColorSpace;
    dayMap.anisotropy = maxAnisotropy;

    const lightsMap = textureLoader.load("/textures/earth_lights.jpg");
    lightsMap.colorSpace = THREE.SRGBColorSpace;
    lightsMap.anisotropy = maxAnisotropy;

    const specularMap = textureLoader.load("/textures/earth_specular.jpg");
    specularMap.anisotropy = maxAnisotropy;

    const cloudsMap = textureLoader.load("/textures/earth_clouds.jpg");
    cloudsMap.colorSpace = THREE.SRGBColorSpace;
    cloudsMap.anisotropy = maxAnisotropy;

    const globeGroup = new THREE.Group();
    globeGroup.rotation.y = -0.36;
    globeGroup.rotation.x = 0.26;
    globeGroup.rotation.z = 0.05;
    scene.add(globeGroup);

    const earthGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 96, 96);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: dayMap,
      color: new THREE.Color(0xa8b6d6),
      specularMap,
      specular: new THREE.Color(0x6f93d6),
      shininess: 42,
      emissiveMap: lightsMap,
      emissive: new THREE.Color(0xffe2ab),
      emissiveIntensity: 1.5,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    const cloudsGeometry = new THREE.SphereGeometry(GLOBE_RADIUS * 1.012, 96, 96);
    const cloudsMaterial = new THREE.MeshLambertMaterial({
      alphaMap: cloudsMap,
      color: new THREE.Color(0x2a3a55),
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    globeGroup.add(cloudsMesh);

    const atmosphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS * 1.05, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.BackSide,
      uniforms: {
        glowColor: { value: new THREE.Color(0x5fb0ff) },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform vec3 glowColor;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
          gl_FragColor = vec4(glowColor, intensity * 0.8);
        }
      `,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphereMesh);

    const hemiLight = new THREE.HemisphereLight(0x9fc4ff, 0x101830, 0.6);
    scene.add(hemiLight);
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.1);
    sunLight.position.set(-1.6, 2.6, 3.4);
    scene.add(sunLight);
    const rimLight = new THREE.DirectionalLight(0x5fb0ff, 0.5);
    rimLight.position.set(-3, -1, -2.5);
    scene.add(rimLight);

    let frameId = 0;
    const animate = () => {
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudsGeometry.dispose();
      cloudsMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      dayMap.dispose();
      lightsMap.dispose();
      specularMap.dispose();
      cloudsMap.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="globe-scene" aria-hidden="true">
      <div className="globe-canvas-mount" ref={mountRef} />
    </div>
  );
}
