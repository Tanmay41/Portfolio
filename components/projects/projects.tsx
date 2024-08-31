import ProjectCard from "@/components/projects/ProjectCard";
import { Sparkle } from "lucide-react"

const Projects = () => {
	return (
		<div className={"my-52"}>
			<h1
				className={
					"text-[#fb3a67] font-bold text-7xl uppercase font-script tracking-widest ml-16 mb-24"
				}
			>
				Projects
			</h1>
			<div className={"grid grid-cols-3 grid-rows-4 mx-32 gap-x-32 gap-y-32 h-[100vh]"}>
				<ProjectCard className={"group col-start-1 col-end-3 row-start-1 row-end-3 bg-red-200 rounded-3xl hover:-translate-y-[10px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] duration-500"} >
					<Sparkle size={35} stroke={"#ffffff"} fill={"#ffffff"} className={"opacity-0 group-hover:opacity-100 duration-500 relative -top-7 left-32"} />
				</ProjectCard>
				<ProjectCard className={"col-start-3 col-end-4 row-start-1 row-end-3 bg-red-200 rounded-3xl hover:-translate-y-[10px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] duration-500"} >
					<img src="https://picsum.photos/303/202" alt="" />
				</ProjectCard>
				<ProjectCard className={"col-start-1 col-end-2 row-start-3 row-end-5 bg-red-200 rounded-3xl hover:-translate-y-[10px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] duration-500"} >
					<img src="https://picsum.photos/297/198" alt="" />
				</ProjectCard>
				<ProjectCard className={"col-start-2 col-end-4 row-start-3 row-end-5 bg-red-200 rounded-3xl hover:-translate-y-[10px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] duration-500"} >
					<img src="https://picsum.photos/300/200" alt="" />
				</ProjectCard>
			</div>
		</div>
	);
};

export default Projects;
