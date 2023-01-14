import './App.css';
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import sky from './white.jpg';
import store from './models/store.glb';
import CropHoodie from './CropHoodie';

function App() {
  const loader  = new GLTFLoader();

  loader.load(store, (d) =>{
    const entity = document.getElementById("store");
    entity.object3D.add(d.scene);
  })

  return (
    <a-scene>
      <a-assets>
        <img id= "sky" src={sky} />
      </a-assets>
      <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>
      <a-entity 
      animation="property: visible; to: true; startEvents: mouseclick;"
      position="-2.5 1 0"
                text="anchor: left; width: 10; color: black; value: [LEFT ANCHOR] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam">
      </a-entity>
      <a-sky
        color = "#FFFFFF"
        material="src: #sky"
        rotation="0 0 0"
      >
      </a-sky>
      {/* <a-entity id="store" position="-200 -12 170" scale="12 12 12" color="black"></a-entity> */}
      <CropHoodie x={0} y={-22} z={0}/>
    </a-scene> 
  );
}

export default App;
