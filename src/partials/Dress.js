import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import dressModel from '../models/dress.glb';
import Prototypes from 'prop-types';


function Dress({x, y, z}) {
    const loader = new GLTFLoader();
    loader.load(dressModel, (d) => {
        const entity = document.getElementById('dress');
        entity.object3D.add(d.scene);
    })

    return(
        <a-entity id="dress" position={`${x} ${y} ${z}`} scale="15 15 15" rotation="0 0 0" 
        animation="property:rotation; from: 0 0 0; to: 0 360 0; loop: true; dur: 10000"></a-entity>
    );
}

Dress.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}


export default Dress;
