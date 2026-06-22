import type { RouteComponent } from "retend/router";
import {
  SimpleList,
  SimpleListBackLink,
  SimpleListHeader,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import { SITE_URL } from "@/shared/constants";

const contactItems = [
  {
    title: "Email",
    subtitle: "adebolaakomolafe@gmail.com",
    href: "mailto:adebolaakomolafe@gmail.com",
    external: true,
  },
  {
    title: "Resume",
    subtitle: "Read the current PDF resume.",
    href: "/oluwasefunmi-akomolafe.pdf",
    external: true,
  },
  {
    title: "Twitter",
    subtitle: "Short posts and working notes.",
    href: "https://www.twitter.com/adebola_io",
    external: true,
  },
  {
    title: "LinkedIn",
    subtitle: "Professional profile and work history.",
    href: "https://www.linkedin.com/in/oluwasefunmi-akomolafe-3a6a42214/",
    external: true,
  },
  {
    title: "Bluesky",
    subtitle: "Social profile for lighter updates.",
    href: "https://bsky.app/profile/oluwasefunmi.com",
    external: true,
  },
  {
    title: "GitHub",
    subtitle: "Code, libraries, experiments, and public repositories.",
    href: "https://www.github.com/adebola-io",
    external: true,
  },
];

const Contact: RouteComponent = () => {
  return (
    <SimpleListPageLayout>
      <SimpleListBackLink href="/" label="back to home" />
      <SimpleListHeader
        title="Contact"
        subtitle="A simple list of places to reach me or inspect my work."
      />
      <SimpleList items={contactItems} />
    </SimpleListPageLayout>
  );
};

Contact.metadata = () => {
  return {
    title: "Contact | Oluwasefunmi Akomolafe",
    description:
      "Get in touch with Oluwasefunmi Akomolafe. Let's collaborate on your next project.",
    ogTitle: "Contact | Oluwasefunmi Akomolafe",
    ogDescription:
      "Get in touch with Oluwasefunmi. Let's collaborate on your next project.",
    ogImage: `${SITE_URL}/og/contact-me.png`,
    twitterTitle: "Contact | Oluwasefunmi Akomolafe",
    twitterDescription:
      "Get in touch with Oluwasefunmi. Let's collaborate on your next project.",
    twitterImage: `${SITE_URL}/og/contact-me.png`,
  };
};

export default Contact;
