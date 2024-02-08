import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterSection from "./FooterSection";
import Emailsection from "../SmallComps/Emailsection";
const ContactSection = () => {
	return (
		<>
			<section
				className=" flex flex-col lg:flex-row md:grid-col-2 my-12 md:my-12 py-24 gap-5 relative"
				id="contact-section"
			>
				<div className="bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full w-40 h-40 md:h-60 md:w-60 lg:h-80 lg:w-80 z-0 blur-lg absolute top-3/4 -left-10 transform -translate-x-1/2 -translate-1/2"></div>

				<div className="lg:mt-12">
					<h5 className="text-xl font-bold text-white my-2">
						{`Let's`} Connect
					</h5>

					<p className="text-[#ADB7BE] mb-4 max-w-md">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
						totam, itaque cum quibusdam molestias dolores atque, consequatur
						repellendus quos reiciendis magnam id laboriosam ratione deserunt?
						Aut voluptatum asperiores id sapiente?
					</p>
					<div className="socials flex flex-row gap-2">
						<Link href={"https://github.com/Avishake00"}>
							<FaGithub className="text-white text-5xl" />
						</Link>
						<Link href={"https://www.linkedin.com/in/avishake-bardhan-67133875"}>
							<FaLinkedin className="text-white text-5xl" />
						</Link>
						<Link href={"https://www.instagram.com/avishake_18/"}>
							<FaInstagram className="text-white text-5xl" />
						</Link>
					</div>
				</div>

				<Emailsection />
			</section>
		</>
	);
};

export default ContactSection;
