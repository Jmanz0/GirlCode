import './App.css';
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import ceiling from './white.jpg';
import store from './models/store.glb';
import CropHoodie from './partials/CropHoodie';
import Dress from './partials/Dress';
import SecondDress from './partials/SecondDress';
import Jeans from './partials/Jeans';
import Sweatpants from './partials/Sweatpants';


function App() {
  const loader  = new GLTFLoader();

  loader.load(store, (d) =>{
    const entity = document.getElementById("store");
    entity.object3D.add(d.scene);
  })

  return (
    <a-scene>
      <a-assets>
        <img id= "ceiling" src={ceiling} />
      </a-assets>

      <a-ceiling
        color = "#FFFFFF"
        material="src: #ceiling"
        rotation="0 0 0"
      >
      </a-ceiling>
      <a-entity id="store" position="-200 -12 170" scale="12 12 12"></a-entity>
      <CropHoodie x={0} y={-22} z={0}/>
      <Dress x={-180} y={-22} z={0}/>
      <SecondDress x={-165} y={-22} z={0}/>
      <Jeans x={-220} y={-22} z={0}/>
      <Sweatpants x={-235} y={-22} z={0}/>
    </a-scene> 
  );
}

export default App;
