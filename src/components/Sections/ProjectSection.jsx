import React from "react";
import ProjectCard from "../SmallComps/ProjectCard";
import { projectData } from "@/lib/ProjectData";

const ProjectSection = () => {
	return (
		<section className="text-white" id="projects-section">
			<h1 className="flex text-center justify-center text-5xl font-bold font-sans mt-6">
				My Projects
			</h1>
			<div className="mt-14 flex flex-wrap gap-20 justify-center lg:justify-center p-4 mb-10">
				{projectData.map((p) => (
					<ProjectCard
						key={p.id} // Ensure each card has a unique key
						title={p.title} // Use the title from the project data
						description={p.description} // Use the description from the project data
						image={p.image.url} // Use the image from the project data
						url={p.link.url}
					/>
				))}
			</div>
		</section>
	);
};

export default ProjectSection;
