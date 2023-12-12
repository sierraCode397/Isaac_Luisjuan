import InfiniteHorizontalScroller from "./InfiniteHorizontalScroll";

const rows = 1;
const duration = 300000; // must be greater than 5000
const tagsPerRow = 5;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "Next.js",
  "Gatsby",
  "UI/UX",
  "Git",
  "animation",
  "webdev",
  
];

const SkillsScroller = () => {
  return (
    <InfiniteHorizontalScroller
      duration={duration}
      rows={rows}
      tags={skills}
      tagsPerRow={tagsPerRow}
    />
  );
};

export default SkillsScroller;
