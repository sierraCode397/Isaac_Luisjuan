import InfiniteHorizontalScroller from "./InfiniteHorizontalScroll";

const duration = 100000; // must be greater than 5000

const SkillsScroller = ({Items, direction, rows}) => {
  return (
    <InfiniteHorizontalScroller
      duration={duration}
      rows={rows}
      tags={Items}
      direction={direction}
    />
  );
};

export default SkillsScroller;
