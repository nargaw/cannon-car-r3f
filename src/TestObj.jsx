import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useBox, useRaycastVehicle } from '@react-three/cannon'
import { useEffect, useRef } from "react"
import { Quaternion, Vector3 } from "three"
import { useFrame } from "@react-three/fiber"
import *  as THREE from 'three'
import Environment from "./Environment"

export default function TestObj()
{
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 1, 0]}))
    const [ref2, api2] = useBox(() => ({ mass: 1, position: [0, 2, 0]}))
    const [ref3, api3] = useBox(() => ({ mass: 1, position: [0, 3, 0]}))
    const [ref4, api4] = useBox(() => ({ mass: 1, position: [0, 4, 0]}))

    // useFrame(({clock}) => api.position.set(Math.sin(clock.getElapsedTime()) * 5, 0.5, 0))
    // useFrame(({clock}) => api2.position.set(Math.cos(clock.getElapsedTime()) * 5, 0.5, 0))
    // useFrame(({clock}) => api3.position.set(0, 0.5, Math.sin(clock.getElapsedTime()) * 5))
    // useFrame(({clock}) => api4.position.set(0, 0.5, Math.cos(clock.getElapsedTime()) * 5))

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshNormalMaterial()

    return(
        <>
            <Environment />
            <mesh ref={ref} geometry={geometry} material={material}/>
            <mesh ref={ref2} geometry={geometry} material={material}/>
            <mesh ref={ref3} geometry={geometry} material={material}/>
            <mesh ref={ref4} geometry={geometry} material={material}/>
        </>
    )
}