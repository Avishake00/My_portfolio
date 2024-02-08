
import { RiLinksFill } from "react-icons/ri";
export const TabData = [
	{
		title: "Skills",
		id: "Skills",
		content: (
		  <ul className="list-disc text-sm font-semibold font-sans">
			<li>ReactJs</li>
			<li>NextJs</li>
			<li>Express</li>
			<li>Tailwind</li>
			<li>Java & Servlet</li>
		  </ul>
		),
	  },
	  
	  
	{
		title: "Work ",
		id: "Work ",
		content: (
		  <ul className="list-disc text-sm font-semibold font-sans">
			<li className="mb-2">
			  <h1>Next.js Developer at Betazen Infotech</h1>
			  <p>
				As a Next.js developer at Betazen Infotech, I played a crucial role in the development
				and maintenance of our web applications. My responsibilities included:
			  </p>
			  <ul className="list-disc ml-5">
				<li>Integrating payment gateways to facilitate secure and seamless transactions.</li>
				<li>Collaborating with the development team to enhance platform functionality and user experience.</li>
				<li>Implementing new features and functionalities based on client requirements.</li>
				<li>Identifying and fixing bugs and performance issues to ensure smooth operation of the applications.</li>
			  </ul>
			</li>
		  </ul>
		),
	  },
	  
	{
		title: "Education",
		id: "Education",
		content: (
			<ul className="list-disc text-sm font-semibold font-sans">
				<li className="mb-2">
					<span className="flex justify-between">
						Vellore Institute of Technology, Vellore
						<p>2020-present</p>
					</span>
				</li>
				<li className="mb-2">
					<span className="flex justify-between">
						Vidyasagar Vidyapith, Midnapore
						<p>2018-2020</p>
					</span>
				</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "Certification",
		content: (
			<ul className="list-disc">
				<li>
					<a href="#" className="flex items-center gap-1 hover:underline hover:text-blue-500">
						Java and Data Structures
					<RiLinksFill className="text-blue-500" />
					</a>
				</li>
				<li >
					<a
						href="#"
						className="flex items-center gap-1 hover:underline hover:text-blue-500"
					>
						Microsoft SC-900
						<RiLinksFill className="text-blue-500" />
					</a>
				</li>
			</ul>
		),
	},
	
];
