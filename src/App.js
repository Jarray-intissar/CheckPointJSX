import React from 'react'
import './Style.css';
import mypht from "./photo.jpg";



function App() {
  return (
    <div className="App">     
<div style={{border:'solid 1px black' , maxWidth:'100vw'}}>

<h1 className="title red">I N T I S S A R</h1>

<img src={mypht} className='photo' alt ='myphoto'/>


<img src="image.jpg" className='image' alt = 'myimage' />

</div>

<video className="video" width ="320"  height ="240"  controls >

<source src="myvideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;

