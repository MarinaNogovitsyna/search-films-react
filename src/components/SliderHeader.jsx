import React, { useEffect, useState } from "react";

export default function SliderHeader() {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jfif",
    "/images/img4.jpg",
    "/images/img5.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      style={{
        "backgroundImage": `url(${images[currentImageIndex]})`
      }}
    ></header>
  );
}
