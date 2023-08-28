import React from 'react';
import companyimg from '../../img/companyimg.jpg';

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen  bg-fuchsia-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={companyimg}
            className="  hover:shadow-lg hover:shadow-yellow-800 z-0 h-96 w-96"
          />
          <div>
            <h1 className="text-5xl font-bold">ABOUT US</h1>
            <h2 className="text-3xl font-bold">Best IT in the World</h2>
            <p className="py-6">
              A software company is in charge of creating different products that take the form of
              various types of software. They mainly focus on utilizing modern technology,
              distribution, and product development.
            </p>
            <button className="btn btn-primary">About More Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
