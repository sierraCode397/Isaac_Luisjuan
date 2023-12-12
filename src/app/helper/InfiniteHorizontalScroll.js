import InfiniteHorizontalScrollWrapper from "./InfiniteHorizontalScrollWrapper";
import Tag from "./TagCertificate";
import { random } from "../config/random";

const InfiniteHorizontalScroller = ({
  duration = 15000,
  rows = 5,
  tags,
  direction
}) => {

  return (
    <div className="flex flex-col shrink-0 gap-y-4 relative py-6 overflow-hidden" >
      {[...new Array(rows)].map((_, i) => (
        <InfiniteHorizontalScrollWrapper
          key={i}
          duration={random(duration - 5000, duration + 5000)}
          reverse={Boolean(i % 2)}
          direction={direction}
        >
              <Tag certificateItems={tags} key="" />
        </InfiniteHorizontalScrollWrapper>
      ))}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" />
    </div>
  );
};

export default InfiniteHorizontalScroller;
