// En el archivo Home.js
import React from 'react';
import "../style/Home.css"
import TextNike from '../components/Text_Nike';
import Icons from '../components/Icons';
import ButtonHome from '../components/ButtonHome';


function Home() {
  return (
    <>
    <div className='cardHome'>
      <div className= 'home'>
        <div className='text'>
          <TextNike />
        <div className='cardButtonEnHome'>
          <ButtonHome/>
       </div>
      </div>
      <div className='Icons'>
        <Icons />
      </div>
      </div>
    </div>    
    </>

  );
}

export default Home;
