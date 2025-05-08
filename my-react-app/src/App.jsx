import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Slideshow from "./components/Slideshow";

import "./App.css";
import Lightbox from "./components/Lightbox";

function App() {
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  useEffect(() => {
    console.log("lightbox activated ");
  }, [lightboxDisplay]);
  const [quantity, setQuantity] = useState(0);

  const addFunction = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };
  const minusFunction = () => {
    setQuantity((prev) => {
      if (prev - 1 < 0) {
        return 0;
      } else return prev - 1;
    });
  };
  return (
    <>
      <div className={lightboxDisplay ? "body grey" : "body"}>
        <header>
          <Nav />

          <img className="logo " src="/images/logo.svg" alt="" />

          <img className="cart" src="/images/icon-cart.svg" alt="" />

          <img className="icon" src="/images/image-avatar.png" alt="" />
        </header>

        <main>
          <Slideshow setLightboxDisplay={setLightboxDisplay} />
          <section className="information">
            <div className="text">
              <h1> Sneaker Company</h1>
              <h2>Fall Limited Edition Sneakers</h2>
              <p>
                These low-profile sneakers are your perfectcasual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
            </div>

            <section className="prices">
              <h3>$125.00</h3>
              <p className="percentage">50%</p>
              <p>
                <s>$250.00</s>
              </p>
            </section>

            <section className="add-container">
              <div className="quantity">
                <img
                  src="/images/icon-minus.svg"
                  alt="minus"
                  onClick={minusFunction}
                />
                <span> {quantity} </span>
                <img
                  src="/images/icon-plus.svg"
                  onClick={addFunction}
                  alt="plus"
                />
              </div>
              <button className="buy-button">
                <img src="/images/icon-cart.svg" alt="cart" />
                <p>add to cart</p>
              </button>
            </section>
          </section>
        </main>
      </div>

      <Lightbox
        lightboxDisplay={lightboxDisplay}
        setLightboxDisplay={setLightboxDisplay}
      />
    </>
  );
}

export default App;
