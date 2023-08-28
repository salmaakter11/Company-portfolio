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
            <h1 className="mb-5 text-5xl font-bold">Welcome to Our IT Company Ltd. </h1>
            <p className="mb-5">
              We study our clients interest from all possible ways so, we can assure that we catch
              all points to deliver with our offerings and work. Our team is experienced and
              focussed to make you happy!
            </p>
            <button className="btn btn-primary">Make an Appointment +</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
