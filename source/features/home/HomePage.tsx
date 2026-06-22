import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import { SimpleListPage } from "@/components/layout/SimpleListPage";
import { SITE_URL } from "@/shared/constants";

const homeItems = [
  {
    title: "Works",
    subtitle: "Selected products, frameworks, tools, and client work.",
    href: "/works",
  },
  {
    title: "Playground",
    subtitle: "Interactive UI experiments and visual studies.",
    href: "/playground",
  },
  {
    title: "Random Notes",
    subtitle: "Loose notes on software, design, and consequence.",
    href: "/random-notes",
  },
  {
    title: "Bookmarks",
    subtitle: "Saved writing, tools, references, and interface material.",
    href: "/bookmarks",
  },
  {
    title: "Contact",
    subtitle: "Email, social links, and resume.",
    href: "/contact",
  },
];

const PortfolioHome: RouteComponent<PageMeta> = () => {
  return (
    <SimpleListPage
      title="oluwasefunmi."
      subtitle="Hello, this is Sefunmi. I am a software engineer focused on clear systems, expressive interfaces, and useful web products."
      items={homeItems}
      avatar="https://github.com/adebola-io.png"
    />
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
