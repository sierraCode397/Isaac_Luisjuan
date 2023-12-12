const InfiniteHorizontalScrollWrapper = ({
    children,
    duration,
    reverse = false,
  }) => {
    return (
      <div
        className="flex w-fit"
        style={{
          animation: `loop ${duration}ms linear infinite ${
            reverse ? "reverse" : "normal"
          }`,
        }}
      >
        {children}
        {children}
      </div>
    );
  };
  
  export default InfiniteHorizontalScrollWrapper;
  