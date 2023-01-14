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
import React, { useState } from 'react';


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
          position="-34 10 -40"
          text="font: mozillavr; anchor: left; width: 15; color: white; value: CropHoodie: \n Made with real cotton">
          
     </a-entity>
     <a-entity
          position="-8 10 -40"
          text="font: mozillavr; anchor: left; width: 15; color: white; value: Dress: \n Made with real cotton">
     </a-entity>
     <a-entity
          position="35 10 -40"
          text="font: mozillavr; anchor: left; width: 15; color: white; value: Sweatpants: \n Made with real cotton">
     </a-entity>


      <a-sky
        color = "#FFFFFF"
        material="src: #ceiling"
        rotation="0 0 0"
      >
      </a-sky>
      <a-entity id="store" position="-230 -12 130" scale="12 12 12"></a-entity>
      <CropHoodie x={-30} y={-22} z={-40}/>
      <Dress x={-6} y={-9} z={-40}/>
      <SecondDress x={6} y={-20} z={-40}/>
      <Jeans x={50} y={-15} z={-40}/>
      <Sweatpants x={40} y={-10} z={-40}/>o
    </a-scene> 
  );
}

export default App;
