import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import sweatpantsModel from '../models/sweatpants.glb';
import Prototypes from 'prop-types';


function Sweatpants({x, y, z}) {
    const loader = new GLTFLoader();
    loader.load(sweatpantsModel, (d) => {
        const entity = document.getElementById('sweatpants');
        entity.object3D.add(d.scene);
    })

    return(
        <a-entity id="sweatpants" position={`${x} ${y} ${z}`} scale="15 15 15" rotation="0 0 0" 
        animation="property:rotation; from: 0 0 0; to: 0 360 0; loop: true; dur: 10000"></a-entity>
    );
}

Sweatpants.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}


export default Sweatpants;
