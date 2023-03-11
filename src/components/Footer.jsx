import { useState } from "react";
import "../styles/Footer.css";
import Modal from "./Modal";

function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [hero, setHero] = useState('')

  const handleHero = (hero) => {
    setHero(hero);
  }

  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <section className="footer">
        <div onClick={() => {handleClose(); handleHero('spider') }}>
          <img src="https://i.ibb.co/tKWqw8J/spiderman.png" alt="spider lego" />
        </div>
        <div onClick={() => {handleClose(); handleHero('robin') }}>
          <img src="https://i.ibb.co/Xzsdvgg/robin.png" alt="robin lego" />
        </div>
        <div onClick={() => {handleClose(); handleHero('batman') }}>
          <img src="https://i.ibb.co/M18p91c/batman.webp" alt="batman lego" />
        </div>
      </section>
      <Modal show={showModal} handleClose={handleClose} hero={hero}/>
    </>
  );
}
export default Footer;
