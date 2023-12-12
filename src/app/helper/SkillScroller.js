import InfiniteHorizontalScroller from "./InfiniteHorizontalScroll";

const rows = 2;
const duration = 100000; // must be greater than 5000

const SkillsScroller = ({certificateItems, direction}) => {
  return (
    <InfiniteHorizontalScroller
      duration={duration}
      rows={rows}
      tags={certificateItems}
      direction={direction}
    />
  );
};

export default SkillsScroller;
