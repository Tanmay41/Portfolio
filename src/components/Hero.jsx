import React from "react";

function Hero() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">
        Full Stack React Developer
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          I code beautiful websites and react apps, I love what I do!
        </p>
        <img
          className="My-Photo"
          src="https://raw.githubusercontent.com/Tanmay41/Portfolio/main/assets/img/Tanmay.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
