import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ title, description, url, image }) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg border border-purple-500 shadow-lg shadow-blue-400">
      <div className="md:w-[450px] md:h-[350px] lg:w-[500px] lg:h-[400px] sm:w-[400px] sm:h-[300px]  w-[350px] h-[250px]">
        <Image
          className="object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 md:w-[450px] md:h-[350px] lg:w-[500px] lg:h-[400px] sm:w-[400px] sm:h-[300px]  w-[350px] h-[250px]"
          src={image}
          alt={title}
          width={400}
          height={400}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif lg:text-3xl md:text-2xl text-xl font-bold text-white mt-3">{title}</h1>
        <p className="mb-3 lg:text-lg text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{description}</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
          <Link href={url}> See More</Link>
         </button>
      </div>
    </div>
  );
};

export default ProjectCard;
