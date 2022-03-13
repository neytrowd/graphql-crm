import React, {useEffect, useRef} from 'react';
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const Clock: React.FC = () => {
    const blockRef = useRef(null);

    useEffect(() => {
        let scene: any;
        let camera: any;
        let renderer: any;

        function init() {
            let container: any = blockRef.current;
            scene = new THREE.Scene()
            // scene.background = new THREE.Color(0xffffff);
            camera = new THREE.PerspectiveCamera(55, container.offsetWidth / container.offsetHeight, 0.1, 3000);
            camera.position.set(0, 0, 67);
            camera.rotation.set(30, -20.12, 0.04)

            renderer = new THREE.WebGLRenderer({alpha: true, antialias: true})
            renderer.setSize(container.offsetWidth, container.offsetHeight)
            renderer.setClearColor(0xffffff, 0);
            container.appendChild(renderer.domElement)

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.update();
            controls.enableDamping = true;
            // controls.minDistance = 40;
            controls.enableZoom = false;
            controls.minPolarAngle = Math.PI / 3;
            controls.maxPolarAngle = Math.PI / 3;
            // controls.autoRotate = true;

            const ambient = new THREE.AmbientLight(0xffffff, 1);
            scene.add(ambient)

            let light = new THREE.PointLight(0xc4c4c4, 1);
            light.position.set(0, 300, 500);
            scene.add(light)

            let light2 = new THREE.PointLight(0xc4c4c4, 1);
            light2.position.set(500, 300, 500);
            scene.add(light2)

            let light3 = new THREE.PointLight(0xc4c4c4, 1);
            light3.position.set(0, 300, -500);
            scene.add(light3)

            let light4 = new THREE.PointLight(0xc4c4c4, 1);
            light4.position.set(-500, 300, 500);
            scene.add(light4)

            const loader = new GLTFLoader();
            loader.load('./assets/model/scene.gltf', gltf => {
                    let model = gltf.scene;
                    gltf.scene.scale.set(20, 20, 20)
                    model.position.y = -15
                    // model.rotation.x = 45
                    model.rotation.y = -0.4
                    scene.add(gltf.scene);
                }
            )

            window.addEventListener('resize', () => {
                camera.aspect = container.offsetWidth / container.offsetHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.offsetWidth, container.offsetHeight)
            }, false)

            function animate() {
                requestAnimationFrame(animate)
                controls.update();
                renderer.render(scene, camera)
            }

            animate()
        }

        init()
    }, [])

    return (
        <div ref={blockRef} style={{minHeight: '450px', cursor: 'grab'}}>

        </div>
    );
};

export default Clock;