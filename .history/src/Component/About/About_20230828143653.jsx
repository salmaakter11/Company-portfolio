import React from 'react';
import companyimg from '../../img/companyimg.jpg';

const About = () => {
  return (
    <div id="About" className="hero min-h-screen bg-pink-50 px-12">
      <div className="hero min-h-screen  bg-fuchsia-50 h-screen">
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
              various types of <br /> software. They mainly focus on utilizing modern technology,
              distribution, and product development.
            </p>

            {/* About logo */}

            <div className="flex gap-4 mt-5 ">
              <a target="blank" href="https://www.linkedin.com/in/salma-akter-263447222">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 450 450"
                  className="fill-current"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a target="blank" href="https://www.facebook.com/Salma.com.37">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>

            <button className="btn btn-primary my-10">About More Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
