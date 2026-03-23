import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import classes from "./HomePage.module.css";
import { BentoGrid } from "@/components/ui/Bento/BentoGrid";
import { BentoCard } from "@/components/ui/Bento/BentoCard";
import { HeroWidget } from "@/components/ui/Bento/HeroWidget";
import { MusicWidget } from "@/components/ui/Bento/MusicWidget";
import { ExperienceWidget } from "@/components/ui/Bento/ExperienceWidget";
import { ReadingWidget } from "@/components/ui/Bento/ReadingWidget";
import { StackWidget } from "@/components/ui/Bento/StackWidget";
import { ConnectWidget } from "@/components/ui/Bento/ConnectWidget";
import { SITE_URL } from "@/constants";

const PortfolioHome: RouteComponent<PageMeta> = () => {
  const experiences = [
    { year: "2023", company: "Software Engineer @ Private Company" },
    { year: "2022", company: "Frontend Dev @ Tech Solutions" },
    { year: "2021", company: "Intern @ Creative Agency" },
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      url: "https://github.com/", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ) 
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ) 
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ) 
    },
  ];

  const technologies = [
    "TypeScript",
    "React / Next.js",
    "Node.js",
    "Docker",
    "TailwindCSS",
    "Golang",
    "PostgreSQL",
    "Figma",
    "WebGL",
  ];

  return (
    <div class={classes.home}>
      <div class={classes.container}>
        <BentoGrid>
          <BentoCard span={3}>
            <HeroWidget 
               name="Oluwasefunmi"
               role="Software Engineer"
               company="V2"
               prevCompany="Apple"
               avatar="https://github.com/adebola-io.png"
               bio="I am a full-stack software engineer focused on creating interactive digital experiences and tackling complex design challenges."
            />
          </BentoCard>

          <BentoCard span={1}>
            <ExperienceWidget items={experiences} />
          </BentoCard>

          <BentoCard span={1}>
             <MusicWidget title="Midnight Melodies" artist="Vibe Master" />
          </BentoCard>

          <BentoCard span={1}>
            <ReadingWidget title="The Design of Everything" author="Don Norman" />
          </BentoCard>

          <BentoCard span={1}>
            <ConnectWidget links={socialLinks} />
          </BentoCard>

          <BentoCard span={2}>
            <StackWidget techs={technologies} />
          </BentoCard>
        </BentoGrid>
      </div>
    </div>
  );
};

PortfolioHome.metadata = async () => {
  return {
    title: "Oluwasefunmi | Software Engineer",
    description:
      "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
    ogTitle: "Oluwasefunmi | Software Engineer",
    ogDescription:
      "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
    ogImage: `${SITE_URL}/og/home.png`,
    twitterTitle: "Oluwasefunmi | Software Engineer",
    twitterDescription:
      "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
    twitterImage: `${SITE_URL}/og/home.png`,
  };
};

export default PortfolioHome;
