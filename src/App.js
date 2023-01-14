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

      <a-sky
        color = "#FFFFFF"
        material="src: #sky"
        rotation="0 0 0"
      >
      </a-sky>
      <a-entity id="store" position="-200 -12 170" scale="12 12 12"></a-entity>
      <CropHoodie x={0} y={-22} z={0}/>
    </a-scene> 
  );
}

export default App;
