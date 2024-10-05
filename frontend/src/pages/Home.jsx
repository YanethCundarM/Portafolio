// En el archivo Home.js
import React from 'react';
import "../style/Home.css"
import TextNike from '../components/Text_Nike';
import Icons from '../components/Icons';
import ButtonHome from '../components/ButtonHome';
import ImgShoes from '../components/ImgShoes';

//import shoes from '../../src/style/shoes.png';


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
      
      <div className='img'>
       <div className='shoes'>
        <ImgShoes/>
        
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
