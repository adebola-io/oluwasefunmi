import type { RouteComponent } from "retend/router";
import classes from "./Contact.module.css";
import { StarShower } from "@/components/ui/StarShower";
import { SITE_URL } from "@/constants";

const Contact: RouteComponent = () => {
  return (
    <div class={classes.page}>
      <StarShower />
      <div class={classes.container}>
        <p class={classes.intro}>
          Got a cool idea or a big dream? Don't just sit on it! Hit me up, and
          let's turn it into something awesome together. You can reach me at:
        </p>
        <h1 class={classes.emailLink}>
          <a href="mailto:adebolaakomolafe@gmail.com">
            adebolaakomolafe@gmail.com
          </a>
        </h1>
        <br />

        <a
          href="/oluwasefunmi-akomolafe.pdf"
          class={classes.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          read my resume →
        </a>

        <div class={classes.socials}>
          <a
            href="https://www.twitter.com/adebola_io"
            class={classes.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          <a
            href="https://www.linkedin.com/in/oluwasefunmi-akomolafe-3a6a42214/"
            class={classes.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            href="https://bsky.app/profile/oluwasefunmi.com"
            class={classes.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            bluesky
          </a>
          <a
            href="https://www.github.com/adebola-io"
            class={classes.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
};

Contact.metadata = () => ({
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
});

export default Contact;
