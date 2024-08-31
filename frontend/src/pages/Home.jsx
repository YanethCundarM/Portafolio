// En el archivo Home.js
import React from 'react';
import "../style/Home.css"
import TextNike from '../components/Text_Nike';
import Icons from '../components/Icons';
import shoes from '../../src/style/shoes.png';





function Home() {
  return (
    <div className='home'>
      <div className='text'>
        <TextNike />
      </div>
      <div className='img'>
       <div className='shoes'>
        <img src={shoes} alt="" width="600px" height="600px"/>
       </div>
      </div>
      <div className='Icons'>
        <Icons />
      </div>
    </div>
  );
}

export default Home;
