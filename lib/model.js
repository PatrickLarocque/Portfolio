import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three';

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene;
        
        obj.name = 'desk';
        obj.position.set(-1.15, -1.4, 0);
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        // Hemisphere light
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
        hemiLight.position.set(0, 500, 0);
        scene.add(hemiLight);

        obj.traverse((child) => {
          if (child.isMesh && child.material) {
            if (child.material.type === 'MeshPhongMaterial') {
              child.material.shininess = .2;
            } else if (child.material.type === 'MeshStandardMaterial') {
              child.material.roughness = 1;  
              child.material.metalness = 0.5;  
            }
            
            child.receiveShadow = receiveShadow;
            child.castShadow = castShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}