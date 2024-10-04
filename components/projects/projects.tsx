// pages/Projects.jsx
import ProjectCard from "@/components/projects/ProjectCard";
import { FileText, Sparkle, PencilRuler, Sparkles } from "lucide-react";

const Projects = () => {
	const projects = [
		{
			icon: FileText,
			title: "WiseForge",
			description:
				"An AI-driven platform providing affordable tools to students and teachers, making advanced technology accessible to enhance the learning experience.",
			imageSrc: "/asset/image/WiseForge.png",
			className:
				"col-start-1 col-end-3 row-start-1 row-end-3 bg-white dark:bg-[#111111]",
			isLarge: true,
			link: "https://wiseforge.in/",
		},
		{
			icon: Sparkle,
			title: "Hospital Manager",
			description:
				"A system to manage hospital operations and patient records.",
			imageSrc: "/asset/image/hospital-management.png",
			className: "col-start-1 col-end-2 row-start-3 row-end-5",
			isLarge: false,
			link: "https://hospital-management-system-tanmay.vercel.app/",
		},
		{
			icon: PencilRuler,
			title: "Kahoot Clone",
			description:
				"A kahoot clone with real-time leaderboard and question submission.",
			imageSrc: "/asset/image/kahoot.png",
			className: "col-start-3 col-end-4 row-start-1 row-end-3",
			isLarge: false,
			link: "https://kahoot-nu.vercel.app/",
		},
		{
			icon: Sparkles,
			title: "Certificate Generator",
			description:
				"A tool to generate certificates for events and workshops.",
			imageSrc: "/asset/image/certificate-generator.png",
			className: "col-start-2 col-end-4 row-start-3 row-end-5",
			isLarge: true,
			link: "https://certificate-generator-fake.vercel.app/login",
		},
	];

	return (
		<div id="projects" className="py-10">
			<h1 className="text-[#fb3a67] font-bold text-7xl uppercase font-script tracking-widest ml-16 mb-24">
				Projects
			</h1>
			<div className="grid grid-cols-3 grid-rows-4 mx-32 gap-x-32 gap-y-32 h-[100vh]">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						icon={project.icon}
						title={project.title}
						description={project.description}
						imageSrc={project.imageSrc}
						className={project.className}
						isLarge={project.isLarge}
						link={project.link}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
