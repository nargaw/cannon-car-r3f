import { RigidBody, CuboidCollider } from "@react-three/rapier"

export default function TestObj()
{
    return(
        <>
            <RigidBody colliders={'cuboid'} restitution={2}>
                <mesh castShadow>
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>
            </RigidBody>
            
        </>
    )
}