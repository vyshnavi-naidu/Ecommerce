import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route/pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default Scroll;