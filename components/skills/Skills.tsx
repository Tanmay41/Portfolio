"use client";
import {
  Tab,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/skills/tab";
import { Meteors } from "@/components/skills/meteors";
import Image from "next/image";
import SkillTab from "@/components/skills/tabs/Skills";

const Skills = () => {
  // const [activeTab, setActiveTab] = useState("skills");

  return (
    <div id="skills" className={"relative py-5"}>
      <div className={"flex justify-center items-start w-full h-full mt-16"}>
        <div className={"hidden lg:w-1/2 lg:flex justify-center items-center top-0"}>
          <Image
            src={"/asset/image/skill.svg"}
            alt={"Image of a team planning"}
            width={600}
            height={600}
            draggable={false}
          />
        </div>
        <div className={"relative w-full lg:w-1/2np"}>
          <Tab
            defaultValue="skills"
            className="w-full flex justify-center items-center flex-col"
          >
            <TabsList className={"h-[60px] rounded-xl flex items-center py-10"}>
              <TabsTrigger
                className={
                  "text-[#fb3a67] font-bold text-7xl uppercase font-script tracking-widest"
                }
                value="skills"
              >
                SKILLS
              </TabsTrigger>
              {/*<Separator orientation="vertical" className={"h-[70%]"} />*/}
              {/*<TabsTrigger*/}
              {/*  onClick={() => setActiveTab("experience")}*/}
              {/*  value="experience"*/}
              {/*  className={*/}
              {/*    activeTab === "experience"*/}
              {/*      ? "text-[#fb3a67] font-bold"*/}
              {/*      : "text-gray-500"*/}
              {/*  }*/}
              {/*>*/}
              {/*  Experience*/}
              {/*</TabsTrigger>*/}
            </TabsList>
            <TabsContent
              value="skills"
              className={"w-full flex justify-center items-center mt-16"}
            >
              <SkillTab />
            </TabsContent>
            {/*<TabsContent value="experience">*/}
            {/*  <Experience />*/}
            {/*</TabsContent>*/}
          </Tab>
        </div>
      </div>
      {/*<Meteors number={50} className={"-z-10"} />*/}
    </div>
  );
};

export default Skills;
