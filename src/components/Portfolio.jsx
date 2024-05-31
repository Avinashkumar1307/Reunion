/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react";

const Portfolio = () => {
  const data = [
    {
      imageLink: "src/gallery/1.jpg",
    },
    {
      imageLink: "src/gallery/2.jpg",
    },
    {
      imageLink: "src/gallery/3.jpg",
    },
    {
      imageLink: "src/gallery/4.jpg",
    },
    {
      imageLink: "src/gallery/5.jpg",
    },
    {
      imageLink: "src/gallery/6.jpg",
    },
    {
      imageLink: "src/gallery/7.jpg",
    },
    {
      imageLink: "src/gallery/8.jpg",
    },
    {
      imageLink: "src/gallery/9.jpg",
    },
    {
      imageLink: "src/gallery/10.jpg",
    },
    {
      imageLink: "src/gallery/11.jpg",
    },
    {
      imageLink: "src/gallery/12.jpg",
    },
    {
      imageLink: "src/gallery/13.jpg",
    },
    {
      imageLink: "src/gallery/14.jpg",
    },
    {
      imageLink: "src/gallery/15.jpg",
    },
    {
      imageLink: "src/gallery/16.jpg",
    },
    {
      imageLink: "src/gallery/17.jpg",
    },
    {
      imageLink: "src/gallery/18.jpg",
    },
    {
      imageLink: "src/gallery/19.jpg",
    },
    {
      imageLink: "src/gallery/20.jpg",
    },
    {
      imageLink: "src/gallery/21.jpg",
    },
    {
      imageLink: "src/gallery/22.jpg",
    },
    {
      imageLink: "src/gallery/23.jpg",
    },
    {
      imageLink: "src/gallery/24.jpg",
    },
    {
      imageLink: "src/gallery/25.jpg",
    },
    {
      imageLink: "src/gallery/26.jpg",
    },
    {
      imageLink: "src/gallery/27.jpg",
    },
    {
      imageLink: "src/gallery/28.jpg",
    },
    {
      imageLink: "src/gallery/29.jpg",
    },
    {
      imageLink: "src/gallery/30.jpg",
    },
    {
      imageLink: "src/gallery/31.jpg",
    },
    {
      imageLink: "src/gallery/32.jpg",
    },
  ];


  return (<>
  <h2 className="md:text-5xl text-4xl text-headingcolor font-bold ml-10 mt-6 mb-6">Gallery
  & Memories</h2>
    <div className="lg:mx-12 mx-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img
            className="h-[300px] w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default Portfolio;
