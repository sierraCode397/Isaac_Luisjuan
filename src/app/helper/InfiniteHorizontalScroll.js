import InfiniteHorizontalScrollWrapper from "./InfiniteHorizontalScrollWrapper";
import Tag from "./TagCeparate";
import { random } from "../config/random";

const InfiniteHorizontalScroller = ({
  duration = 15000,
  rows = 5,
  tags,
  direction,
}) => {

  return (
    <div className="flex flex-col shrink-0 gap-y-4 relative py-4 bg-black overflow-hidden" >
      {[...new Array(rows)].map((_, i) => (
        <InfiniteHorizontalScrollWrapper
          key={i}
          duration={random(duration - 5000, duration + 5000)}
          reverse={Boolean(i % 2)}
          direction={direction}
        >
              <Tag  />
        </InfiniteHorizontalScrollWrapper>
      ))}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" />
    </div>
  );
};

export default InfiniteHorizontalScroller;
