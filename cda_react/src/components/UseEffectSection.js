import "../styles/UseEffectSection.css";

const UseEffectSection = () => {
  return (
    <section id="useeffect" className="use-effect-section">
      <h2>useEffect & Cycle de vie</h2>

      <div className="content-box">
        <h3>📚 Introduction au cycle de vie des composants</h3>
        <p>
          Dans React, chaque composant passe par différentes phases : montage
          (création), mise à jour et démontage (destruction). Le hook{" "}
          <code>useEffect</code> permet de synchroniser un composant avec des
          systèmes externes (API, timers, abonnements).
        </p>
      </div>

      <div className="content-box">
        <h3>🔄 Rappels : Cycle de rendu et réexécution</h3>
        <p>
          React réexécute un composant à chaque fois que son état (
          <code>useState</code>) ou ses props changent. Comprendre ce mécanisme
          est essentiel pour éviter les bugs de performance.
        </p>
        <ul>
          <li>
            <strong>Premier rendu :</strong> Le composant est monté dans le DOM
          </li>
          <li>
            <strong>Rendus suivants :</strong> Déclenchés par un changement
            d'état ou de props
          </li>
          <li>
            <strong>Démontage :</strong> Le composant est retiré du DOM
          </li>
        </ul>
      </div>

      <div className="content-box">
        <h3>⚙️ Fonctionnement de useEffect</h3>

        <h4>1. useEffect sans dépendances</h4>
        <p>
          S'exécute après <strong>chaque rendu</strong> du composant. À utiliser
          avec précaution car peut causer des problèmes de performance.
        </p>
        <pre>
          <code>{`useEffect(() => {
  // Ce code s'exécute après CHAQUE rendu
  console.log('Composant rendu');
});`}</code>
        </pre>

        <h4>2. useEffect avec tableau de dépendances vide</h4>
        <p>
          S'exécute <strong>une seule fois</strong> après le premier rendu
          (équivalent à componentDidMount en classe).
        </p>
        <pre>
          <code>{`useEffect(() => {
  // Ce code s'exécute UNE SEULE FOIS au montage
  console.log('Composant monté');
}, []); // Tableau vide = pas de dépendances`}</code>
        </pre>

        <h4>3. useEffect avec dépendances spécifiques</h4>
        <p>
          S'exécute après le premier rendu et à chaque fois qu'une dépendance
          change.
        </p>
        <pre>
          <code>{`const [count, setCount] = useState(0);

useEffect(() => {
  // S'exécute au montage ET quand count change
  document.title = \`Compteur: \${count}\`;
}, [count]); // S'exécute quand count change`}</code>
        </pre>

        <h4>4. Fonction de nettoyage (cleanup)</h4>
        <p>
          Essentielle pour éviter les fuites mémoire. Le cleanup s'exécute avant
          que l'effet ne se relance et avant le démontage du composant.
        </p>
        <pre>
          <code>{`useEffect(() => {
  // Création d'un abonnement
  const subscription = dataSource.subscribe();

  // Fonction de nettoyage (cleanup)
  return () => {
    subscription.unsubscribe();
  };
}, []);`}</code>
        </pre>
      </div>

      <div className="example-box">
        <h4>💼 Exemple professionnel : Timer avec cleanup</h4>
        <p>
          Dans une application de gestion de projet, vous devez afficher le
          temps écoulé sur une tâche.
        </p>
        <pre>
          <code>{`function TaskTimer({ taskId }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Démarrage du timer
    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // CLEANUP : arrêter le timer quand le composant se démonte
    // ou quand taskId change
    return () => {
      clearInterval(intervalId);
      console.log('Timer arrêté pour la tâche', taskId);
    };
  }, [taskId]); // Redémarre si taskId change

  return <div>Temps écoulé : {seconds}s</div>;
}`}</code>
        </pre>
      </div>

      <div className="example-box">
        <h4>💼 Cas d'usage professionnel : Suivi d'un champ de formulaire</h4>
        <p>
          Dans un CRM, sauvegarder automatiquement les modifications d'un
          formulaire après 2 secondes d'inactivité.
        </p>
        <pre>
          <code>{`function ClientForm() {
  const [clientName, setClientName] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!clientName) return; // Ne rien faire si vide

    setIsSaving(true);

    // Debounce : attendre 2 secondes avant de sauvegarder
    const timeoutId = setTimeout(() => {
      // Simulation sauvegarde API
      saveToAPI(clientName).then(() => {
        setIsSaving(false);
        console.log('Sauvegardé:', clientName);
      });
    }, 2000);

    // CLEANUP : annuler le timeout si l'utilisateur tape à nouveau
    return () => {
      clearTimeout(timeoutId);
    };
  }, [clientName]); // S'exécute quand clientName change

  return (
    <div>
      <input
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        placeholder="Nom du client"
      />
      {isSaving && <span>💾 Sauvegarde...</span>}
    </div>
  );
}`}</code>
        </pre>
      </div>

      <div className="warning-box">
        <h4>⚠️ Pièges courants à éviter</h4>
        <ul>
          <li>
            <strong>Boucle infinie :</strong> Modifier un état sans dépendances
            ou avec des dépendances incorrectes
            <pre>
              <code>{`// ❌ MAUVAIS : boucle infinie
useEffect(() => {
  setCount(count + 1); // Provoque un nouveau rendu infini
});

// ✅ BON
useEffect(() => {
  // Logique sans modification d'état
  // OU avec setState dans une condition
}, []);`}</code>
            </pre>
          </li>
          <li>
            <strong>Dépendances manquantes :</strong> Toujours inclure toutes
            les valeurs utilisées dans l'effet
            <pre>
              <code>{`// ❌ MAUVAIS
useEffect(() => {
  console.log(userName); // userName est utilisé mais pas dans les deps
}, []);

// ✅ BON
useEffect(() => {
  console.log(userName);
}, [userName]);`}</code>
            </pre>
          </li>
          <li>
            <strong>Oublier le cleanup :</strong> Toujours nettoyer les timers,
            abonnements, listeners
          </li>
          <li>
            <strong>Appeler des fonctions asynchrones directement :</strong>{" "}
            useEffect ne peut pas être async
            <pre>
              <code>{`// ❌ MAUVAIS
useEffect(async () => {
  const data = await fetchData();
});

// ✅ BON
useEffect(() => {
  const loadData = async () => {
    const data = await fetchData();
  };
  loadData();
}, []);`}</code>
            </pre>
          </li>
        </ul>
      </div>

      <div className="content-box">
        <h3>🎯 Exercices pratiques</h3>
        <div className="grid-layout">
          <div className="card">
            <h4>Exercice 1 : Timer avec cleanup</h4>
            <p>
              Créer un chronomètre qui se met à jour chaque seconde et s'arrête
              proprement au démontage.
            </p>
          </div>
          <div className="card">
            <h4>Exercice 2 : Effets conditionnels</h4>
            <p>
              Créer un composant qui change le titre de la page uniquement si un
              utilisateur est connecté.
            </p>
          </div>
          <div className="card">
            <h4>Exercice 3 : Debounce de recherche</h4>
            <p>
              Implémenter une barre de recherche qui attend 500ms avant de
              lancer la recherche (optimisation).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseEffectSection;
