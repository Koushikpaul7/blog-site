import { useEffect } from "react";

 function ScrollToTop() {
    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, []);
  
    return null;
}
 
 export default ScrollToTop;