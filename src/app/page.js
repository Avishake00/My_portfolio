import AboutSection from "@/components/Sections/AboutSection";
import ContactSection from "@/components/Sections/ContactSection";
import Herosection from "@/components/Sections/Herosection";
import Navbar from "@/components/SmallComps/Navbar";
import React from "react";
import FooterSection from "@/components/Sections/FooterSection";
import ProjectSection from "@/components/Sections/ProjectSection";

const page = () => {
	return (
		<>
			<main className="flex min-h-screen flex-col  bg-[#121212] ">
				<div className="flex justify-center ">
					<Navbar />
				</div>

				<div className="container mx-auto px-12 py-6">
				<div className="mt-4 p-2" id="hero-section"></div>
					<Herosection />
					<hr className="lg:hidden md:hidden" />
					<AboutSection />
					<hr className="lg:hidden md:hidden" />
					<div className="mt-4 p-2" id="projects-section"></div>
					<ProjectSection/>
					<hr className="lg:hidden md:hidden" />
					<ContactSection/>
			
				</div>
				<div>

					<hr className="w-full mx-auto  border-slate-500 rounded-lg"/>

					<FooterSection/>
				</div>
			</main>
		</>
	);
};

export default page;
