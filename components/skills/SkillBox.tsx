import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface SkillBoxProps {
  title: string;
  icon: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ icon, title }) => {
  return (
    // <div className={"w-fit h-fit flex justify-center items-center flex-col"}>
    //   <div
    //     className={
    //       "w-[75px] h-[75px] border-2 border-opacity-45 hover:border-opacity-100 border-[#fb3a67] transition-all duration-500 rounded-lg flex justify-center items-center"
    //     }
    //   >

    //   </div>
    //   <p className={"text-center"}>{title}</p>
    // </div>
    <CardContainer
      className={"group w-fit h-fit flex justify-center items-center flex-col"}
    >
      <CardBody
        className={
          "w-[75px] h-[75px] border-2 border-opacity-45 hover:border-opacity-100 border-[#fb3a67] transition-all duration-500 rounded-lg flex justify-center items-center"
        }
      >
        <CardItem translateZ={250}>
          <Image
            src={icon}
            alt={title}
            height={45}
            width={45}
            className={"rounded-md group-hover:blur-[0.5px] dark:invert"}
          />
        </CardItem>
      </CardBody>
      <CardItem translateZ={100}>
        <p className={"group-hover:blur-[0.5px]"}>{title}</p>
      </CardItem>
    </CardContainer>
  );
};

export default SkillBox;
