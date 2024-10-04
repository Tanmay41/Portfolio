import ShinyButton from "@/components/hero/shiny-button";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import BlurFade from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import Image from "next/image";

const Hero = () => {
	return (
		<div id="home">
			<div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background mt-32 lg:mt-5">
				<main
					className={
						"flex flex-col md:flex-row justify-center w-full lg:mt-56"
					}
				>
					<div
						className={
							"w-full lg:w-1/2 h-full pl-7 lg:pl-52 mt-[5%]"
						}
					>
						<BlurFade delay={0.25} inView>
							<h3 className={"text-2xl font-thin"}>
								Hello there, my name is
							</h3>
						</BlurFade>
						<BlurFade delay={0.25 * 2} inView>
							<h1
								className={"text-5xl lg:text-7xl font-semibold"}
							>
								Tanmay Sagwal
							</h1>
							<div className="h-[2px] bg-black w-[78px] mt-[24px] mb-[-14px] dark:bg-white"></div>
							<h1 className="tracking-[-0.02em] relative font-normal lg:text-xl text-lg pl-[97px]">
								<span>Full </span>
								<span>Stack </span>
								<span>Web </span>
								<span>Developer </span>
							</h1>
						</BlurFade>

						<BlurFade delay={0.25 * 4} inView>
							<h3
								className={
									"text-gray-500 tracking-wider dark:text-gray-200"
								}
							>
								I&apos;m a 14 year old school student <br />{" "}
								based in Haryana, India 📍
							</h3>
							<ShinyButton
								text={"Say Hello"}
								className={"bg-[#fb3a67] mt-7"}
								link={"/contact"}
							/>
						</BlurFade>
					</div>
					<div className={"w-full lg:w-1/2 flex justify-center"}>
						<Image
							src={
								Math.random() > 0.5
									? "/asset/image/me.png"
									: "/asset/image/me2.png"
							}
							alt={"my image"}
							width={700}
							height={700}
							className={"rounded-lg z-10"}
						/>
					</div>
				</main>
				<VelocityScroll
					text="Tanmay Sagwal "
					default_velocity={5}
					className={
						"text-center text-4xl font-bold tracking-[-0.02em] relative -left-10 md:text-7xl md:leading-[5rem] text-[#ffc547] z-40"
					}
				/>
				<DotPattern className="absolute inset-0" />
			</div>
		</div>
	);
};

export default Hero;
