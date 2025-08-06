import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const ChangingProgressProvider = ({ values = [], interval = 500, children }) => {
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView && !start && values.length > 1) {
      setStart(true);
      let i = 0;
      const id = setInterval(() => {
        i++;
        if (i < values.length) {
          setIndex(i);
        } else {
          clearInterval(id);
        }
      }, interval);
    }
  }, [inView, start, values.length, interval]);

  return (
    <div ref={ref}>
      {children(values[index])}
    </div>
  );
};

export default ChangingProgressProvider;
