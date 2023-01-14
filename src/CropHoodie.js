import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import cropHoodieModel from './models/cropHoodie.glb';
import Prototypes from 'prop-types';


function CropHoodie({x, y, z}) {
    const loader = new GLTFLoader();
    loader.load(cropHoodieModel, (d) => {
        const entity = document.getElementById('crophoodie');
        entity.object3D.add(d.scene);
    })

    return(
        <a-entity id="crophoodie" position={`${x} ${y} ${z}`} scale="15 15 15" rotation="0 0 40"></a-entity>
    );
}

CropHoodie.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}


export default CropHoodie;
