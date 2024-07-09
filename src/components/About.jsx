import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Worked", count: "3" }
  ];

 
  // const googleDriveLink = "https://drive.google.com/file/d/1OzuOrRm0Rn9g7xwO6RUO9zUZHkvxFjtr/view?usp=drivesdk";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg text-center">Summary</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I hold a Bachelor of Technology in Computer Engineering, completed in 2022. As a developer specializing in web development, I bring a blend of creativity and technical expertise to my role. Currently, I am pursuing a B.Tech in IT.
<br /> <br />
I have secured an internship as a Frontend Developer at a reputable company, where I've immersed myself in Angular development and leveraged Bootstrap for responsive, visually appealing designs. My journey has also acquainted me with Node.js, enabling me to contribute to server-side functionalities.
<br /> <br />
Beyond Angular, I possess a versatile skill set, proficient in JavaScript, TypeScript, React.js, Bootstrap, Firebase, and GitHub. This ensures I am well-equipped to adapt to diverse project requirements. My focus lies in delivering exceptional user experiences through intuitive and scalable UI components, ensuring seamless navigation and optimal performance across devices.
</p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
