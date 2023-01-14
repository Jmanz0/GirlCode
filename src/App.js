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

      <a-entity
          // animation="property: visible; to: true; startEvents: mouseclick;"
          position="-2.5 1 0"
          text="anchor: left; width: 10; color: black; value: [LEFT ANCHOR] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam">
     </a-entity>


      <a-sky
        color = "#FFFFFF"
        material="src: #ceiling"
        rotation="0 0 0"
      >
      </a-sky>
      <a-entity id="store" position="-200 -12 170" scale="12 12 12"></a-entity>
      <CropHoodie x={0} y={-22} z={0}/>
      <Dress x={20} y={-15} z={0}/>
      <SecondDress x={40} y={-15} z={0}/>
      <Jeans x={80} y={-15} z={0}/>
      <Sweatpants x={-0} y={-15} z={0}/>
      <a-entity id="store" position="-200 -12 170" scale="12 12 12" color="black"></a-entity>

    </a-scene> 
  );
}

export default App;
