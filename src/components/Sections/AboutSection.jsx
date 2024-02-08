"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "../SmallComps/TabButton";
import { TabData } from "@/lib/AboutData";
import { motion } from "framer-motion";

const AboutSection = () => {
	const [tab, setTab] = useState("Skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (tab) => {
		startTransition(() => {
			setTab(tab);
		});
	};

	return (
		<section className="text-white mt-4 mb-4 " id="about-section">
			<div className="md:grid md:grid-cols-2 gap-12 px-4 xl:gap-16 sm:py-16 mt-4  ">
				<div className="flex justify-center items-center w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mx-auto">
					<motion.div
						whileHover={{ scale: 1.05 }} // Scale up on hover
						whileTap={{ scale: 0.95 }} // Scale down on tap
						transition={{ duration: 0.2 }} // Smooth transition duration
					>
						<Image
							src={"/about.jpg"}
							alt="about"
							width={500}
							height={500}
							className="border border-blue-500 shadow-lg shadow-blue-500 rounded-lg"
						/>
					</motion.div>
				</div>

				<div>
					<h2 className="text-4xl text-center font-bold text-white mb-4 mt-6">
						About Me
					</h2>
					<p className="text-base md:text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
						assumenda ex. Quidem, rerum velit ea asperiores delectus cupiditate
						fuga reprehenderit accusantium ipsum hic. Hic architecto sint, rerum
						laboriosam rem in.
					</p>

					<div className="flex flex-row items-center justify-center ml-2 mt-8 gap-3">
						{TabData.map((data) => (
							<TabButton
								key={data.id}
								selectTab={() => handleTabChange(data.id)}
								active={tab === data.id}
							>
								{data.title}
							</TabButton>
						))}
					</div>
					<div className="mt-4">
						{TabData.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
