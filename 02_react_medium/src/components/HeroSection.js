import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Framework REACT</h1>
        <h2>
          Jour 2 (7h) - API, useEffect/cycle de vie, Context avancé &
          Architecture multicouche — Pratiques professionnelles
        </h2>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Workspace avec ordinateur portable"
          />
        </div>
        <div className="hero-info">
          <h3>Formation CDA Bac+3 - Concepteur Développeur d'Applications</h3>
          <p className="date">Mercredi 03 Décembre 2025</p>
          <div className="concepts">
            <h4>Concepts abordés :</h4>
            <ul>
              <li>useEffect & cycle de vie des composants React</li>
              <li>Appels API et gestion des états asynchrones</li>
              <li>Architecture multicouche d'un projet React professionnel</li>
              <li>Context API avancé pour la gestion d'état global</li>
              {/* <li>Router basique et avancé pour la navigation</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
