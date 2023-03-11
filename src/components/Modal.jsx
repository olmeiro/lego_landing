import "../styles/Modal.css";

import spider1 from '../assets/spider-man.png';
import spider2 from '../assets/spider-man-2.png';
import spider3 from '../assets/spider-man-3.png';

import batman1 from '../assets/batman.png';
import batman2 from '../assets/batman-2.png';
import batman3 from '../assets/batman-3.png';

import robin1 from '../assets/robin.png';
import robin2 from '../assets/robin-2.png';
import robin3 from '../assets/robin-3.png';

import data from '../assets/data'
import { useState, useEffect } from "react";

function Modal({ handleClose, show, hero }) {
  const showHideclassNameName = show ? "visible" : "hidden";

  const [urlImg, setUrlImg] = useState('');

  useEffect(() => {
    setUrlImg(hero)
  }, [hero])
  console.log("heroo", hero)

  return (
      <section className={`modal ${showHideclassNameName}`}>
        <div className="modal__content">
          <img
            className="modal__content--close"
            onClick={handleClose}
            src="https://img.icons8.com/windows/32/000000/macos-close.png"
            alt="icon cerrar"
          />
          <div className="modal__content--slider">
            <input type="radio" name="slider-1" id="radio-1" defaultChecked />
            <input type="radio" name="slider-1" id="radio-2" />
            <input type="radio" name="slider-1" id="radio-3" />
            <div className="cards">
              <label htmlFor="radio-1" id="card-1" className="card">
                <img src={urlImg === 'batman' ? batman1 : 'robin' ? robin1 : 'spider' ? spider1 : 'heroe'} alt="heroe" />
              </label>
              <label htmlFor="radio-2" id="card-2" className="card">
              <img src={urlImg === 'batman' ? batman2 : 'robin' ? robin2 : 'spider' ? spider2 : 'heroe'} alt="heroe" />
              </label>
              <label htmlFor="radio-3" id="card-3" className="card">
              <img src={urlImg === 'batman' ? batman3 : 'robin' ? robin3 : 'spider' ? spider3 : 'heroe'} alt="heroe" />
              </label>
            </div>
          </div>
          <button className="button-red">Lo quiero!</button>
        </div>
      </section>
  );
}
export default Modal;
