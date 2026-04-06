import React from "react";

const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
            <div className="w-79.5">

          <img
            src="https://i.ibb.co.com/fGLGsX7b/hero-img.webp"
            className="object-cover w-full h-full rounded-lg shadow-2xl"
          />
            </div>
          <div className=" space-y-5 md:space-y-6 lg:space-y-8">
            <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold">Books to freshen up <br className="hidden lg:block" /> your bookshelf</h1>
            <button className="btn btn-success">View The List</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
