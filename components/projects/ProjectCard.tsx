// components/projects/ProjectCard.tsx
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the type for the props
interface ProjectCardProps {
	icon: LucideIcon;
	title: string;
	description?: string;
	imageSrc: string;
	className?: string;
	isLarge?: boolean;
	link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	icon: Icon,
	title,
	description,
	imageSrc,
	className,
	isLarge,
	link,
}) => {
	const commonCardStyles =
		"group rounded-3xl hover:-translate-y-[10px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] duration-500 border border-gray-200 dark:border-gray-800";
	const iconStyle = "opacity-0 group-hover:opacity-100 duration-500";
	var imgClass;
	if (isLarge) {
		imgClass =
			"relative left-1/2 object-cover object-top overflow-hidden rounded-md group-hover:translate-y-[15px] duration-500 top-1/4 shadow-tl";
	} else {
		imgClass =
			"relative left-1/2 object-cover object-top overflow-hidden rounded-md group-hover:translate-y-[15px] duration-500 top-1/2 shadow-tl";
	}

	// Custom style for images to achieve a shadow effect
	const customImageStyle = {
		boxShadow: "0 8px 8px rgba(0, 0, 0, 0.5)",
	};

	return (
		<a href={link ? link : "#"} className={cn(commonCardStyles, className)}>
			{Icon && (
				<Icon
					size={50}
					stroke="#ffc547"
					strokeWidth={1}
					fill="#fb3a67"
					className={`${iconStyle} absolute left-32 -top-7`}
				/>
			)}
			<div className="relative h-full w-full overflow-hidden rounded-3xl">
				<div className="absolute left-[3%] top-[15%]">
					<h1 className="font-crash text-5xl text-[#ffc547] blur-[1.5px]">
						{title}
					</h1>
					{description && (
						<p className="relative w-[50%] mt-[30px]">
							{description}
						</p>
					)}
				</div>
				<img
					src={imageSrc}
					alt={`${title} thumbnail`}
					className={imgClass}
					style={customImageStyle}
				/>
			</div>
		</a>
	);
};

export default ProjectCard;
