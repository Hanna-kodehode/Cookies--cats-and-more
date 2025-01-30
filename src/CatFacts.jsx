import { useState, useEffect } from "react";
import styles from "./assets/Module/styles.module.css";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatFacts = async () => {
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");
        if (!response.ok) {
          throw new Error("Something went wrong while fetching data");
        }
        const data = await response.json();
        if (data.data.length === 0) {
          throw new Error("No cat facts found.");
        }
        setFacts(data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCatFacts();
  }, []);

  return (
    <div className={styles.catbg}>
      <div className={styles.catDiv}>
        <div className={styles.container}>
          <h2>Random Cat Facts</h2>
          {error && <p>Error: {error}</p>}
          {!error && facts.length === 0 && <p>No cat facts available.</p>}
          {!error && facts.length > 0 && (
            <ul>
              {facts.map((fact, index) => (
                <p className={styles.pStyling} key={index}>
                  {fact.fact}
                </p>
              ))}
            </ul>
          )}
          <div className={styles.catImage}>
            <img
              src="https://wesvet.com/wp-content/uploads/2022/10/shutterstock_297588962.jpg"
              alt="A cute cat"
              className={styles.catImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatFacts;
