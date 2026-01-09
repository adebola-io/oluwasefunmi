import { useRouter, Link } from "retend/router";
import classes from "./RandomNote.module.css";

interface NoteData {
  slug: string;
  number: number;
  title: string;
  date: string;
  content: string;
}

const notesData: Record<string, NoteData> = {
  "1-sefunmi-makes-a-blog": {
    slug: "1-sefunmi-makes-a-blog",
    number: 1,
    title: "sefunmi makes a blog.",
    date: "March 22, 2025",
    content: `After much procrastination, I finally decided to launch a blog. It's been on my to-do list for years, sitting there, mocking me with its incompleteness.

Why now? I honestly don't know. Maybe it's the realization that thoughts left unwritten tend to fade. Maybe it's the desire to have a small corner of the internet that's truly mine—no algorithms, no engagement metrics, just words.

This space will contain everything and nothing. Tech musings, existential questions, half-formed ideas, and the occasional rant about software that doesn't work the way it should.

Will anyone read it? Probably not. Does it matter? Also probably not.

But here we are. Let's see where this goes.`,
  },
};

const RandomNote = () => {
  const router = useRouter();
  const slug = router.getCurrentRoute().get().params.get("slug");
  const note = slug ? notesData[slug] : null;

  return (
    <div class={classes.page}>
      <div class={classes.container}>
        <Link href="/random-notes" class={classes.backLink}>
          ← back to notes
        </Link>

        {note ? (
          <>
            <header class={classes.header}>
              <div class={classes.number}>#{note.number}</div>
              <h1 class={classes.title}>{note.title}</h1>
              <div class={classes.date}>{note.date}</div>
            </header>
            <div class={classes.content}>
              {note.content.split("\n\n").map((paragraph) => (
                <p>{paragraph}</p>
              ))}
            </div>
          </>
        ) : (
          <div class={classes.notFound}>
            <h1>Note not found.</h1>
            <p>The note you're looking for doesn't exist.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomNote;
