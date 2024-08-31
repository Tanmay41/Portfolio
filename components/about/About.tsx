import NumberTicker from "@/components/magicui/number-ticker";
import ShinyButton from "@/components/about/shiny-button";
import BlurFade from "@/components/magicui/blur-fade";

const About = () => {
  return (
    <main
      className={
        "bg-[#fb3a67] w-full -z-10 -mt-32 lg:-mt-52 flex justify-center items-center flex-col lg:flex-row py-32"
      }
    >
      <BlurFade
        delay={0.25}
        className={
          "text-[50vw] lg:text-[20rem] text-[#ffc547] w-full lg:w-1/2 font-extrabold text-center self-end lg:mb-16"
        }
        inView
      >
        <div>
          0
          <NumberTicker value={4} delay={0.25 * 1.5} />
          <h3
            className={"text-white text-3xl font-light tracking-wider -mt-16"}
          >
            years of experience
          </h3>
        </div>
      </BlurFade>

      <div className={"w-full lg:w-1/2 -mt-10 lg:m-0"}>
        <BlurFade
          delay={0.25 * 3}
          className={
            "text-[3.5rem] text-[#ffc547] lg:w-1/2 ml-5 font-extrabold self-end mt-24 mb-10"
          }
          inView
        >
          <h1>About Me</h1>
        </BlurFade>

        <BlurFade
          delay={0.25 * 5}
          className={"w-10/12 lg:w-2/3 ml-5 text-gray-100 tracking-wider"}
          inView
        >
          <p>
            When I was in class 5<sup>th</sup> class, My friend taught me basic
            HTML that I fell in love with computers kickstarting a neverending
            quest to learn all the technologies and languages in the world which
            is still going on till this day. My journey has since evolved into
            full-stack development, employing frameworks like React, Express and
            NextJS. I love tech and I am always curious kind of person. I took a
            full stack development bootcamp course and made projects and
            portfolio along way, I have very wide interest from swimming to DSA
            and DSA to 3D Modeling.
          </p>
        </BlurFade>
        <BlurFade
          delay={0.25 * 6}
          className={"w-2/3 text-gray-100 tracking-wider"}
          inView
        >
          <ShinyButton
            text={"Download Resume"}
            className={"bg-white ml-5 mt-7 text-black"}
            link={"/tanmay-resume.pdf"}
          />
        </BlurFade>
      </div>
    </main>
  );
};

export default About;
