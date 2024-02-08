"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import RightAlignedDropdown from "./DropDown";

const Navbar = () => {
	return (
		<nav className="fixed bg-[#121212] hover:bg-[#111111]  border-b border-slate-600 backdrop-filter backdrop-blur-sm bg-opacity-30 flex items-center justify-between w-full p-3  z-10">
			<div className="flex justify-between items-center w-full mt-2">
				<div className="flex items-center">
					<Link
						className=" ml-5 cursor-pointer"
						activeClass="active"
						to="hero-section"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<Image src={"/logo.png"} alt="Logo" width={60} height={60}    priority={true}/>
					</Link>
				</div>

				<div className="hidden sm:flex gap-12 mr-12 text-slate-200">
					<Link
						activeClass="active"
						to="about-section"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className="nav-link cursor-pointer"
					>
						About
					</Link>
					<Link
						activeClass="active"
						to="projects-section"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className="nav-link cursor-pointer"
					>
						Projects
					</Link>
					<Link
						activeClass="active"
						to="contact-section"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className="nav-link cursor-pointer"
					>
						Contact
					</Link>
				</div>

				<div className="mr-4 sm:hidden">
					<RightAlignedDropdown />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
