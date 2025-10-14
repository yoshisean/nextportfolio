import {Clouds, Cloud} from '@react-three/drei'
import {MeshBasicMaterial} from "three";

export default function Atmosphere() {
    return (
        <Clouds
            material={MeshBasicMaterial} // use default shader
        >

            <Cloud
                position={[-2, 1, 0]}
                scale={0.5}
                segments={12}
                bounds={[2, 1, 1]}
                volume={4}
                opacity={1}
                color="#F0E7D8"
                fade={40}
                seed={5}
            />
            <Cloud
                position={[0.5, 0, 0]}
                scale={0.2}
                segments={15} // fewer = faster
                bounds={[2, 1, 1]}
                volume={5} // how dense the cloud is
                opacity={0.4}
                color="#E3D8F1"
                fade={50}
                seed={2}
            />
        </Clouds>
    )
}
