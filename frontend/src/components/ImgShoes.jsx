import React from 'react';
import shoes from '../style/shoes.png';
import '../style/ImgShoes.css'; // Importación correcta del archivo CSS

const ImgShoes = ({ alt }) => {
  return (
    <div className='card_img_shoes'>
      <img src={shoes} alt={alt} className="ImgShoes" /> {/* Uso de la clase CSS */}
    </div>
  );
};

export default ImgShoes;





