// En el archivo About.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import '../style/about.css';

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  
  return (
    <>
      <div className="container">
        <div className="box_title">
          <h1 className="title">WEB <span id="about">ABOUT</span></h1>
        </div>
        <div className="box_container">
          <div className="colection">
            <div className="box_colection">
              <img 
                src="https://raw.githubusercontent.com/jorleo021978/MODULO_CUATRO_JORGE/95c7fef28631446465fdd8d0f022b8d6b1052665/proyecto-ricky/imageDeTrabajo/puma_2.png" 
                alt="Descripción de la imagen" 
              />
            </div>
            <div className="box_colection">
              <img 
                src="https://raw.githubusercontent.com/jorleo021978/MODULO_CUATRO_JORGE/95c7fef28631446465fdd8d0f022b8d6b1052665/proyecto-ricky/imageDeTrabajo/puma_2.png" 
                alt="Descripción de la imagen" 
              />
            </div>
            <div className="box_colection">
              <img 
                src="https://raw.githubusercontent.com/jorleo021978/MODULO_CUATRO_JORGE/95c7fef28631446465fdd8d0f022b8d6b1052665/proyecto-ricky/imageDeTrabajo/puma_2.png" 
                alt="Descripción de la imagen" 
              />
            </div>
            <div className="box_colection">
              <img 
                src="https://raw.githubusercontent.com/jorleo021978/MODULO_CUATRO_JORGE/95c7fef28631446465fdd8d0f022b8d6b1052665/proyecto-ricky/imageDeTrabajo/puma_2.png" 
                alt="Descripción de la imagen" 
              />
            </div>
          </div>
          <div className="colection1">
            <div>
              <img 
                className="colection1_img" 
                src="https://raw.githubusercontent.com/jorleo021978/MODULO_CUATRO_JORGE/95c7fef28631446465fdd8d0f022b8d6b1052665/proyecto-ricky/imageDeTrabajo/puma_2.png" 
                alt="Descripción de la imagen" 
              />
            </div>
          </div>
          <div className="button">
            <div className="box_button">
              <button onClick={handleClick}>Shop Now</button>
            </div>
          </div>
          <div className="colection3">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a 
            Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes 
            from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
            for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also 
            reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
