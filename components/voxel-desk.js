import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DeskSpinner, DeskContainer } from './voxel-desk-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Desk = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  const deskGLB = ('/desk.glb')

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Optional, for softer shadows
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()
      const shadowMaterial = new THREE.ShadowMaterial();
      shadowMaterial.opacity = 0.35;  // Adjust for desired shadow opacity
      const groundGeometry = new THREE.PlaneGeometry(15, 15);
      const ground = new THREE.Mesh(groundGeometry, shadowMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.receiveShadow = true;
      ground.position.y = 0.25;
      scene.add(ground);

      const target = new THREE.Vector3(0, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        0 * Math.sin(0.2 * Math.PI),
        10,
        30 * Math.cos(0.2 * Math.PI)
      )

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.004 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1.2, 1000)
      ambientLight.castShadow= true;
      scene.add(ambientLight)


      const light = new THREE.DirectionalLight(0xffffff, 1.8);
      light.position.set(20, 19, 19);
      light.castShadow = true;
      light.shadow.mapSize.width = 1024;  // Default is 512, increase for higher resolution shadow
      light.shadow.mapSize.height = 1024; // Default is 512
      light.shadow.camera.near = 0.5;    // Default is 0.5
      light.shadow.camera.far = 500;
      scene.add(light);


      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.autoRotateSpeed = .5; // default is 2.0
      controls.target = target

      loadGLTFModel(scene, deskGLB, {
        receiveShadow: false,
        castShadow: true,
      }).then((model) => {
        model.scale.set(3.5, 3.5, 3)
        animate()
        setLoading(false)
      });

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <DeskContainer ref={refContainer}>{loading && <DeskSpinner />}</DeskContainer>
  )
}

export default Desk
