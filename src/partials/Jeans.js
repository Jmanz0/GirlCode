import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import jeansModel from './models/jeans.glb';
import Prototypes from 'prop-types';


function Jeans({x, y, z}) {
    const loader = new GLTFLoader();
    loader.load(jeansModel, (d) => {
        const entity = document.getElementById('jeans');
        entity.object3D.add(d.scene);
    })

    return(
        <a-entity id="jeans" position={`${x} ${y} ${z}`} scale="15 15 15" rotation="0 0 0" 
        animation="property:rotation; from: 0 0 0; to: 0 360 0; loop: true; dur: 10000"></a-entity>
    );
}

Jeans.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}


export default Jeans;
