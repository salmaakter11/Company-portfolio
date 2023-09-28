import React from 'react';
import companyimg from '../../img/companyimg.jpg';

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen  bg-fuchsia-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={companyimg}
            className=" lg:w-96 hover:shadow-lg hover:shadow-yellow-800 z-0 h-48 w-96"
          />
          <div>
            <h1 className="text-5xl font-bold">ABOUT US</h1>
            <h2 className="text-3xl font-bold">Best IT in the World</h2>
            <p className="py-6">
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

export default About;
