import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (!width) setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}
