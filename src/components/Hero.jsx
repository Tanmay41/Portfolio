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
          src="https://lh3.google.com/u/0/d/1RnJaX_XnYz0giWkuWzRqTvWyuACBZrlb=w1920-h970-iv1"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
