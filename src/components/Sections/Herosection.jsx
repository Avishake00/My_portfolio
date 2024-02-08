"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

// Herosection component
const Herosection = () => {
	return (
		<section id="" className="mb-4 md:mb-1 lg:mb-1">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="grid grid-cols-1 lg:grid-cols-12 lg:mt-28 mt-20 "
			>
				{/* Text Section */}
				<div className="lg:col-span-7 place-self-center mb-10 lg:text-left sm:text-left text-center relative">
					<h1 className="mb-4 text-5xl lg:text-7xl font-extrabold ">
						<span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 mr-2 ">
							Hello, I am
						</span>
						<br />
						<TypeAnimation
							sequence={[
								"Avishake Bardhan",
								3000,
								"A  Developer",
								3000,
								"A  Web Designer",
								3000,
								"A Passionate Coder",
								3000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
							className="text-slate-100"
						/>
					</h1>
					<p className="text-slate-300 text-lg lg:text-xl mb-6">
						Welcome to my portfolio! Dive into my projects and skills to
						discover the passion behind my work.
					</p>
					<div className="flex flex-col lg:flex-row gap-3">
						<Link
							className="Hire px-6 py-3 font-bold text-center"
							activeClass="active"
							to="contact-section"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Hire me
						</Link>
						<button className="px-6 py-3 rounded-full text-white hover:bg-slate-100 hover:text-black border lg:w-44 focus:outline-none">
							<a href="/resume.pdf" download="resume.pdf">
								Download CV
							</a>
						</button>
					</div>
				</div>

				{/* Image Section */}
				<div className="col-span-12 lg:col-span-5 place-self-center lg:ml-8 relative">
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden mt-2 border border-purple-400 shadow-lg shadow-pink-400 transition-transform duration-300 transform hover:scale-105">
						<Image
							src={"/profile.png"}
							alt="Hero image"
							width={400}
							height={400}
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Herosection;
