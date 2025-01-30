import { useEffect, useState } from "react";
import styles from "./assets/Module/styles.module.css";

function Cookie({ count, setCount, resetCount }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount !== null) {
      setCount(Number(storedCount));
    }
  }, [setCount]);

  useEffect(() => {
    if (count !== 0) {
      localStorage.setItem("count", count);
    }
  }, [count]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 100);
  };

  return (
    <>
      <div className={styles.cookiebg}>
        <h1>Cookie Clicker</h1>
        <img
          src="https://cookieclicker.wiki.gg/images/thumb/5/5a/PerfectCookie.png/210px-PerfectCookie.png"
          alt="A cookie"
          className={isAnimating ? "cookie animate" : "cookie"}
          onClick={handleClick}
        />
        <p>Count is {count}</p>
        <button onClick={resetCount}>Reset count</button>
      </div>
    </>
  );
}

export default Cookie;
