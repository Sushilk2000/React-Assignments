import { useEffect, useState, useRef } from "react";

const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const ImageSearch = () => {
  const [data, setData] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const containerRef = useRef(null);
  const count = 5;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`
      );
      const imageData = await response.json();
      setData((prevData) => [...prevData, ...imageData]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const handleImageLoad = () => {
      setLoadedImages((prevCount) => prevCount + 1);
    };

    const images = document.querySelectorAll(".image");
    images.forEach((image) => {
      image.addEventListener("load", handleImageLoad);
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
      });
    };
  }, [data]);
  useEffect(() => {
    if (loadedImages === data.length) {
      setIsReady(true);
    }
  }, [loadedImages, data]);
  const handleScroll = () => {
    if (
      containerRef.current &&
      window.scrollY + window.innerHeight >=
        containerRef.current.offsetHeight &&
      isReady
    ) {
      setIsReady(false);
      setLoadedImages(0);
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-8 justify-center items-center bg-pink-200 pt-16"
    >
      <h1 className="font-bold text-5xl ">Infinte Scrolling App</h1>
      {data.map((image, index) => (
        <div
          key={index}
          className="max-w-[50rem] object-contain border-4 border-black"
        >
          <img src={image.urls.regular} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSearch;
