import { For } from "retend";
import uiClasses from "@/components/ui/ui.module.css";

const experiences = [
  { company: "Summitech", role: "Full Stack Developer", year: "Now" },
  { company: "Lighthaus Eko", role: "Full Stack Developer", year: "2024" },
  { company: "TechMadeEazy", role: "Developer", year: "2023" },
  { company: "Panoramic Synergy", role: "Intern", year: "2022" },
];

export const ExperiencePreviewList = () => {
  return (
    <ul class={uiClasses.twoColumnList}>
      {For(experiences, (item) => (
        <li class={uiClasses.twoColumnItem}>
          <span class={uiClasses.textStack}>
            <span>{item.company}</span>
            <span class={uiClasses.subtleText}>{item.role}</span>
          </span>
          <span class={uiClasses.subtleText}>{item.year}</span>
        </li>
      ))}
    </ul>
  );
};
