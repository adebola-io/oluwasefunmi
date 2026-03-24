import { If } from "retend";
import classes from "./ReadingWidget.module.css";

interface ReadingWidgetProps {
  title: string;
  author: string;
  image?: string;
}

export function ReadingWidget(props: ReadingWidgetProps) {
  const { title, author, image } = props;

  return (
    <div class={classes.widget}>
      <div class={classes.head}>
        <span class={classes.label}>What I'm reading</span>
      </div>

      <div class={classes.content}>
        <div class={classes.bookInfo}>
          <h4 class={classes.title}>{title}</h4>
          <span class={classes.author}>{author}</span>
        </div>

        <div class={classes.bookContainer}>
          <div class={classes.book}>
            <div class={[classes.bookFace, classes.bookFront]}>
              {If(
                image,
                () => (
                  <img src={image} alt={title} class={classes.cover} />
                ),
                () => (
                  <div class={classes.placeholderCover} />
                )
              )}
            </div>
            <div class={[classes.bookFace, classes.bookBack]} />
            <div class={[classes.bookFace, classes.bookSpine]} />
            <div class={[classes.bookFace, classes.bookRight]} />
            <div class={[classes.bookFace, classes.bookTop]} />
            <div class={[classes.bookFace, classes.bookBottom]} />
          </div>
        </div>
      </div>
    </div>
  );
}
