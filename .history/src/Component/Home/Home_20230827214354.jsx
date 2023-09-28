import React from 'react';

const Home = () => {
  return (
    <div id="Home">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://medicaleducationsjp.com/-/media/Project/SXA/St-John-Providence-MedEd/providence-providence-park-hospital-southfield.jpg?la=en&hash=6BFBFC9A4CD3C2C67CDD857FB88B5C53FA24BCE4)'
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
