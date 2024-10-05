"use client";
import React from "react";
import { LampContainer } from "../ui/lamp";
import { Github, Linkedin, Instagram } from "lucide-react";

const Contact: React.FC = () => {
	return (
		<LampContainer>
			<section
				id="contact"
				className="text-white flex items-start flex-col lg:flex-row gap-8"
			>
				<div className="container mx-auto px-4">
					<h1 className="text-5xl font-bold text-white mb-8">
						Let&apos;s Work Together
					</h1>
					<p className="text-xl mb-12 max-w-2xl">
						I&apos;m currently looking for a new opportunity.
						Whether you have a question or just want to say hi,
						I&apos;ll try my best to get back to you!
					</p>
				</div>
				<div className="flex flex-col gap-8 w-full">
					<div className="flex flex-row gap-8 w-full">
						<div className="flex flex-col gap-4">
							<p className="text-2xl font-bold">Phone</p>
							<p className="text-xl">+91 720-6689-153</p>
							<p className="text-xl">+91 830-7366-873</p>
						</div>
						<div className="flex flex-col gap-4">
							<p className="text-2xl font-bold">Email</p>
							<a
								className="text-xl"
								href={
									"mailto:tanmayror19@gmail.com?subject=Hey!%20Lets%20colaborate%20on%20this%20project%20...."
								}
								target={"_blank"}
							>
								tanmayror19@gmail.com
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-2xl font-bold">Socials -</p>
						<div className="flex flex-row gap-4">
							<a
								href="https://github.com/tanmay41"
								target="_blank"
								className="hover:scale-150 transition-all duration-500"
							>
								<Github />
							</a>
							<a
								href="https://www.linkedin.com/in/tanmaysagwal/"
								target="_blank"
								className="hover:scale-150 transition-all duration-500"
							>
								<Linkedin />
							</a>
							<a
								href="https://www.instagram.com/tanmayror19/"
								target="_blank"
								className="hover:scale-150 transition-all duration-500"
							>
								<Instagram />
							</a>
						</div>
					</div>
				</div>
			</section>
		</LampContainer>
	);
};

export default Contact;
