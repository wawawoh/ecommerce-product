import { useState, useEffect } from "react";
import Slideshow from "./Slideshow";

function Lightbox({ lightboxDisplay, setLightboxDisplay }) {
  const bufferFunction = () => {
    console.log("this is a buffer because idrk how to do these things");
  };
  return (
    <div className={lightboxDisplay ? "lightbox active" : "lightbox hidden"}>
      <button className="cross" onClick={() => setLightboxDisplay(false)}>
        <img src="/images/icon-close.svg" alt="" />
      </button>
      <Slideshow setLightboxDisplay={bufferFunction} />
    </div>
  );
}
export default Lightbox;
