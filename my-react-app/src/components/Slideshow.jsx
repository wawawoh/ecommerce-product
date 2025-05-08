import { useEffect, useState, useRef } from "react";
import "./slideshow.css";

function Slideshow({ setLightboxDisplay }) {
  const [mobileView, setMobileView] = useState(true);
  const [imageNumber, setImageNumber] = useState(0);
  const selectedThumbnail = useRef(0);

  const imageArray = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  const leftArrow = () => {
    setImageNumber((prev) => {
      if (prev - 1 < 0) {
        return 3;
      }
      return prev - 1;
    });
  };
  const rightArrow = () => {
    setImageNumber((prev) => {
      if (prev + 1 > 3) {
        return 0;
      }
      return prev + 1;
    });
  };
  useEffect(() => {
    if (screen.width > 1000) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  }, []);
  return (
    <section className="slideshow-for-desktop">
      <div className="image-container">
        <img
          onClick={() => setLightboxDisplay(true)}
          src={imageArray[imageNumber]}
          alt="image 1"
        />

        <div className={mobileView ? "active" : "hidden"}>
          <button className="left click" onClick={leftArrow}>
            <img src="/images/icon-previous.svg" alt="left-button" />
          </button>
          <button className="right click" onClick={rightArrow}>
            <img src="/images/icon-next.svg" alt="right-button" />
          </button>
        </div>
      </div>
      <div className={mobileView ? "hidden" : "active"}>
        <article className="thumbnail">
          <img
            src="/images/image-product-1-thumbnail.jpg"
            alt="thumb 1"
            onClick={() => setImageNumber(0)}
            className={imageNumber === 0 ? "light" : "normal"}
          />
          <img
            src="/images/image-product-2-thumbnail.jpg"
            alt="thumb 2"
            onClick={() => setImageNumber(1)}
            className={imageNumber === 1 ? "light" : "normal"}
          />
          <img
            src="/images/image-product-3-thumbnail.jpg"
            alt="thumb 3"
            onClick={() => setImageNumber(2)}
            className={imageNumber === 2 ? "light" : "normal"}
          />
          <img
            src="/images/image-product-4-thumbnail.jpg"
            alt="thumb 4"
            onClick={() => setImageNumber(3)}
            className={imageNumber === 3 ? "light" : "normal"}
          />
        </article>
      </div>
    </section>
  );
}

export default Slideshow;

//container for images
//decide whether its mobile or desktop then cahngge accordingly
//mobile has you click arrows so we do mobile fist hoe
