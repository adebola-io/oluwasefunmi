import { Link } from "retend/router";
import classes from "./RandomNotes.module.css";

interface Note {
  slug: string;
  number: number;
  title: string;
  date: string;
  summary: string;
}

const notes: Note[] = [
  {
    slug: "1-sefunmi-makes-a-blog",
    number: 1,
    title: "sefunmi makes a blog.",
    date: "March 22, 2025",
    summary:
      "After much procrastination, Sefunmi finally launches a blog, bracing for potential failure and future regret, with content ranging from tech to existential musings.",
  },
];

const RandomNotes = () => {
  return (
    <div class={classes.page}>
      <div class={classes.container}>
        <h1 class={classes.title}>random notes.</h1>
        <p class={classes.subtitle}>
          Disjoint musings, incoherent rants and streams of consciousness that I
          have decided to write down. Anything about life, technology and
          consequence.
        </p>

        <div class={classes.notesList}>
          {notes.length === 0 ? (
            <p class={classes.empty}>No notes yet.</p>
          ) : (
            notes.map((note) => (
              <Link
                href={`/random-notes/${note.slug}`}
                class={classes.noteCard}
              >
                <div class={classes.noteNumber}>#{note.number}</div>
                <h2 class={classes.noteTitle}>{note.title}</h2>
                <div class={classes.noteDate}>{note.date}</div>
                <p class={classes.noteSummary}>{note.summary}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomNotes;
