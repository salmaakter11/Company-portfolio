import React from 'react';

const Home = () => {
  return (
    <div id="Home">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://www.moderndata.com/wp-content/uploads/2014/03/it-company.jpg)'
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">We Care Medical & Health </h1>
            <p className="mb-5">
              We will conduct a complete dental examination and create an individualized treatment
              plan for you .
            </p>
            <button className="btn btn-primary">Make an Appointment +</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
