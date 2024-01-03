import InfiniteHorizontalScrollWrapper from "./InfiniteHorizontalScrollWrapper";
import { random } from "../config/random";

const InfiniteHorizontalScroller = ({
  duration = 15000,
  rows = 3,
  direction,
  tag,
  Items,
  background = 'rgb(75 85 99 / var(--tw-text-opacity))'
}) => {

  const Tags = tag;
  return (
    <div className="flex flex-col shrink-0 gap-y-3 relative py-2 overflow-hidden" style={{
      background: background,
    }}>
      {[...new Array(rows)].map((_, i) => (
        <InfiniteHorizontalScrollWrapper
          key={i}
          duration={random(duration - 5000, duration + 5000)}
          reverse={Boolean(i % 2)}
          direction={direction}
        >
              <Tags Items={Items} />
        </InfiniteHorizontalScrollWrapper>
      ))}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" />
    </div>
  );
};

export default InfiniteHorizontalScroller;
