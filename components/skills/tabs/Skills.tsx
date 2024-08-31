import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/skills/accordion";
import SkillBox from "@/components/skills/SkillBox";

const Skills = [
  {
    title: "Languages",
    items: [
      { title: "TypeScript", icon: "/asset/icons/typescript.svg" },
      { title: "JavaScript", icon: "/asset/icons/javascript.svg" },
      { title: "Python", icon: "/asset/icons/python.svg" },
      { title: "C", icon: "/asset/icons/c.svg" },
      { title: "C++", icon: "/asset/icons/cpp.svg" },
      { title: "Rust", icon: "/asset/icons/rust.svg" },
      { title: "Go", icon: "/asset/icons/go.svg" },
    ],
    icon: "/asset/icons/language.svg",
  },
  {
    title: "Web Frameworks",
    items: [
      { title: "Express", icon: "/asset/icons/express.svg" },
      { title: "React", icon: "/asset/icons/react.svg" },
      { title: "Node.JS", icon: "/asset/icons/node.svg" },
      { title: "Next.JS", icon: "/asset/icons/next.svg" },
      { title: "Vite", icon: "/asset/icons/vite.svg" },
      { title: "Django", icon: "/asset/icons/django.svg" },
    ],
    icon: "/asset/icons/web.svg",
  },
  {
    title: "Databases",
    items: [
      { title: "MongoDB", icon: "/asset/icons/mongodb.svg" },
      { title: "MySQL", icon: "/asset/icons/mysql.svg" },
      { title: "PostgreSQL", icon: "/asset/icons/postgresql.svg" },
      { title: "SupaBase", icon: "/asset/icons/supabase.svg" },
    ],
    icon: "/asset/icons/database.svg",
  },
  {
    title: "Frontend Technologies",
    items: [
      { title: "HTML5", icon: "/asset/icons/html.svg" },
      { title: "CSS3", icon: "/asset/icons/css.svg" },
      { title: "TailwindCSS", icon: "/asset/icons/tailwind.svg" },
      { title: "Shadcn UI", icon: "/asset/icons/shadcn.svg" },
      { title: "Magic UI", icon: "/asset/icons/magicui.svg" },
      { title: "Bootstrap", icon: "/asset/icons/bootstrap.svg" },
    ],
    icon: "/asset/icons/frontend.svg",
  },
  {
    title: "Tools",
    items: [
      { title: "Git", icon: "/asset/icons/git.svg" },
      { title: "VS Code", icon: "/asset/icons/vscode.svg" },
      { title: "WebStorm", icon: "/asset/icons/webstorm.svg" },
      { title: "PowerShell", icon: "/asset/icons/powershell.svg" },
      { title: "Bash", icon: "/asset/icons/bash.svg" },
      { title: "Blender", icon: "/asset/icons/blender.svg" },
      { title: "NPM", icon: "/asset/icons/npm.svg" },
    ],
    icon: "/asset/icons/tools.svg",
  },
  {
    title: "Cloud Services",
    items: [
      { title: "Vercel", icon: "/asset/icons/vercel.svg" },
      { title: "Netlify", icon: "/asset/icons/netlify.svg" },
      { title: "Cloudflare", icon: "/asset/icons/cloudflare.svg" },
      { title: "CockroachDB", icon: "/asset/icons/cockroachdb.svg" },
    ],
    icon: "/asset/icons/cloud.svg",
  },
];

const SkillTab = () => {
  return (
    <Accordion type="single" collapsible className={"w-[65%]"}>
      {Skills.map((item, index) => {
        return (
          <AccordionItem value={"item-" + index} key={index}>
            <AccordionTrigger
              className={
                "hover:text-[#fb3a67] [&[data-state=open]]:text-[#fb3a67]"
              }
            >
              <img src={item.icon} alt="" className={"w-[25px] h-[25px] m-0"} />
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className={"grid grid-cols-3 lg:grid-cols-4 gap-4 w-full"}>
                {item.items.map((item, index) => {
                  return (
                    <SkillBox key={index} title={item.title} icon={item.icon} />
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default SkillTab;
