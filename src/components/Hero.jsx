import React, { useRef } from "react";
import my2 from "../assets/images/mypic.png";
import Type from "./Type";

const socialMediaLinks = [
  "https://www.instagram.com/#",
  "https://github.com/codewithmuideen",
  "https://www.linkedin.com/in/#",
  "https://twitter.com/#",
];

const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const social_media = [
    "logo-instagram",
    "logo-github",
    "logo-linkedin",
    "logo-twitter",
  ];

  const imageStyle = {
    boxShadow: "0px 4px 8px white",
    border: "2px solid white", // Change the color and width as needed
    borderRadius: "8px" // Optional: to add rounded corners
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full mobile">
        <img src={my2} alt="My Image" className="md:w-2/3 h-auto object-cover" style={imageStyle} />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Muideen</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                <Type/>
              </h4>
          <button className="btn-primary mt-8" onClick={scrollToContact}>Connect with Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
