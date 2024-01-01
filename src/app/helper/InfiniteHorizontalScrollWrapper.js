//normal, reverse
//Puedes usar direction para asigarle una direccion manualmente al asigarlo cuando llamas al componente SkillScroll
const InfiniteHorizontalScrollWrapper = ({
    children,
    duration,
    reverse = false,
    direction,
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
  