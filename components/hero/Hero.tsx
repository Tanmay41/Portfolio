import ShinyButton from "@/components/hero/shiny-button";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import BlurFade from "@/components/magicui/blur-fade";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <>
      <main
        className={"flex flex-col md:flex-row justify-center w-full lg:mt-56"}
      >
        <div className={"w-full lg:w-1/2 h-full pl-7 lg:pl-52 mt-[7%]"}>
          <BlurFade delay={0.25} inView>
            <h3 className={"text-2xl font-thin"}>Hello there, my name is</h3>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <h1 className={"text-5xl lg:text-7xl font-semibold"}>
              Tanmay Sagwal
            </h1>
            <div className="h-[2px] bg-black w-[78px] mt-[24px] mb-[-14px]"></div>
            <h1 className="tracking-[-0.02em] relative font-normal lg:text-xl text-lg pl-[97px]">
              <span>Full </span>
              <span>Stack </span>
              <span>Web </span>
              <span>Developer </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.25 * 4} inView>
            <h3 className={"text-gray-500 tracking-wider"}>
              I&apos;m a 14 year old school student <br /> based in Haryana,
              India 📍
            </h3>
            <ShinyButton
              text={"Say Hello"}
              className={"bg-[#fb3a67] mt-7"}
              link={"/contact"}
            />
          </BlurFade>
        </div>
        <div className={"w-full lg:w-1/2 flex justify-center"}>
          {/*<BlurFade delay={0.25 * 7}>*/}
          <div className={"w-[70%] bg-gray-600 rounded-lg"}>
            <AspectRatio ratio={1} />
          </div>
          {/*</BlurFade>*/}
        </div>
      </main>
      <VelocityScroll
        text="Tanmay Sagwal "
        default_velocity={5}
        className={
          "text-center text-4xl font-bold tracking-[-0.02em] relative -left-10 md:text-7xl md:leading-[5rem] text-[#ffc547]"
        }
      />
    </>
  );
};

export default Hero;
