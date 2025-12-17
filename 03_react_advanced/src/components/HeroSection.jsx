import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Framework REACT</h1>
        <h2>
          {" "}
          Jour 3 (4h) - Router, TypeScript & Tests - Pratiques professionnelles
        </h2>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Workspace avec ordinateur portable"
          />
        </div>
        <div className="hero-info">
          <h3>Formation CDA Bac+3 - Concepteur Développeur d'Applications</h3>
          <p className="date">Mercredi 17 Décembre 2025</p>
          <div className="concepts">
            <h4>Concepts abordés :</h4>
            <ul>
              <li>Router React - Navigation basique et avancée</li>
              <li>React avec TypeScript - Typage strict des composants</li>
              <li>Tests unitaires avec Jest et React Testing Library</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
