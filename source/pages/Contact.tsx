import classes from "./Contact.module.css";
import { StarShower } from "@/components/StarShower";

const Contact = () => {
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
        >
          read my resume →
        </a>

        <div class={classes.socials}>
          <a
            href="https://www.twitter.com/adebola_io"
            class={classes.socialLink}
            target="_blank"
          >
            twitter
          </a>
          <a
            href="https://www.linkedin.com/in/oluwasefunmi-akomolafe-3a6a42214/"
            class={classes.socialLink}
            target="_blank"
          >
            linkedin
          </a>
          <a
            href="https://bsky.app/profile/adebola.online"
            class={classes.socialLink}
            target="_blank"
          >
            bluesky
          </a>
          <a
            href="https://www.github.com/adebola-io"
            class={classes.socialLink}
            target="_blank"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
