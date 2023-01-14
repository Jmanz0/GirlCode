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
    <div>
      <a-scene>
        <a-assets>
          <img id= "ceiling" src={ceiling} />
        </a-assets>
        <a-entity
            position="-39 14 -40"
            text="font: mozillavr; wrapcount: 30; anchor: left; width: 20; color: white; value: Zip-Up Hoodie: \n This is a zip-up hoodie with kanga pockets, a double-layer hood and a relaxed fit. It’s made from mid-weight fleece with a cozy-brushed inside and a dry, unsueded face.">
            
      </a-entity>
      <a-entity
            position="-15 14 -40"
            text="font: mozillavr; wrapcount: 30; anchor: left; width: 20; color: white; value: Swept Dress: \n This is a puff-sleeve mini dress with sheer sleeves and a ruffled neckline. It's made with Fête Chiffon — lightweight, semi-sheer fabric with an ethereal drape that’s made from 100% recycled materials. ">
      </a-entity>
      <a-entity
            position="30 14 -40"
            text="opacity: 1; font: mozillavr; anchor: left; width: 20; color: white; value: Fleece Mega Sweatpant: \n Huge, actually. These are high-rise sweatpants with an elastic waist and cuffs, an infinity loop drawcord and lots of volume. They're made with Tna’s Terry Fleece — all-season, midweight French terry with a looped back, soft drape and a breezy feel. Très luxe. ">
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
    </div>
  );
}

export default App;
