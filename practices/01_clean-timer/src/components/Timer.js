import { useState, useEffect } from "react";

/**
 * Timer professionnel avec cleanup.
 * - Met à jour un compteur chaque seconde.
 * - Nettoie le setInterval au démontage.
 */

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    // Si le timer n'est pas en marche → on ne crée pas d’intervalle
    if (!running) return;

    console.log("Timer démarré");

    // Création du timer
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    /**
     * CLEANUP :
     * Cette fonction est exécutée :
     * - lorsque le composant se démonte
     * - ou lorsque running change
     * Elle évite que plusieurs timers continuent en parallèle.
     */
    return () => {
      console.log("Cleanup du timer");
      clearInterval(intervalId);
    };
  }, [running]); // Dépend de running → redémarre / stoppe proprement

  return (
    <div style={styles.container}>
      <h2>Timer professionnel</h2>
      <p>Temps écoulé : {seconds}s</p>

      <button onClick={() => setRunning(!running)} style={styles.button}>
        {running ? "Arrêter" : "Démarrer"}
      </button>
    </div>
  );
};
export default Timer;

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "250px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  button: {
    padding: "10px 20px",
    marginTop: "10px",
    cursor: "pointer",
  },
  reset: {
    padding: "5px 10px",
    marginTop: "10px",
    marginLeft: "10px",
    cursor: "pointer",
    background: "#eee",
  },
};
