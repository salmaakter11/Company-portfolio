import React from 'react';
import img1 from '../../img/img1.jpg';

const Home = () => {
  return (
    <div id="Home ">
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <img
              src={img1}
              className=" lg:w-96 hover:shadow-lg hover:shadow-yellow-800 z-0"
              alt="salma"
            />
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
