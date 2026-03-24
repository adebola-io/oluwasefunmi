import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import classes from "./HomePage.module.css";
import { BentoGrid } from "@/features/home/components/widgets/BentoGrid";
import { BentoCard } from "@/features/home/components/widgets/BentoCard";
import { HeroWidget } from "@/features/home/components/widgets/HeroWidget";
import { MusicWidget } from "@/features/home/components/widgets/MusicWidget";
import { ExperienceWidget } from "@/features/home/components/widgets/ExperienceWidget";
import { ReadingWidget } from "@/features/home/components/widgets/ReadingWidget";
import { StackWidget } from "@/features/home/components/widgets/StackWidget";
import { ConnectWidget } from "@/features/home/components/widgets/ConnectWidget";
import { PlaygroundWidget } from "@/features/home/components/widgets/PlaygroundWidget";
import { GitHubWidget } from "@/features/home/components/widgets/GitHubWidget";
import { SITE_URL } from "@/shared/constants";
import { playgroundItems } from "@/features/playground/data/playground";
import { EXPERIENCES } from "@/features/home/data/experiences";
import { socialLinks } from "@/features/home/data/socialLinks";
import { TECHNOLOGIES } from "@/features/home/data/technologies";

const PortfolioHome: RouteComponent<PageMeta> = () => {
  return (
    <div class={classes.home}>
      <div class={classes.container}>
        <BentoGrid>
          <BentoCard span={2} rowSpan={5}>
            <HeroWidget
              name="oluwasefunmi"
              avatar="https://github.com/adebola-io.png"
              bio="I am a full-stack software engineer focused on creating interactive digital experiences and tackling complex design challenges."
            />
          </BentoCard>

          <BentoCard span={1} rowSpan={2}>
            <ConnectWidget links={socialLinks} />
          </BentoCard>

          <BentoCard span={1} rowSpan={3}>
            <PlaygroundWidget projects={playgroundItems.slice(0, 2)} />
          </BentoCard>

          <BentoCard span={1} rowSpan={3}>
            <MusicWidget />
          </BentoCard>

          <BentoCard span={1} rowSpan={3}>
            <ExperienceWidget items={EXPERIENCES} />
          </BentoCard>

          <BentoCard span={1} rowSpan={3}>
            <GitHubWidget />
          </BentoCard>

          <BentoCard span={2} rowSpan={2}>
            <StackWidget techs={TECHNOLOGIES} />
          </BentoCard>

          <BentoCard span={1} rowSpan={2}>
            <ReadingWidget
              title="The Design of Everything"
              author="Don Norman"
            />
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
