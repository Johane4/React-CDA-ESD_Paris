import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo-circle">
            <span className="logo-text">
              WebSculpt <br />
              Creations{" "}
            </span>
          </div>
          <div className="header-title">
            <h1>OMISCAR Johane</h1>
            <p className="subtitle">WebSculpt Creations</p>
          </div>
        </div>
      </div>
      <div className="header-line"></div>
    </header>
  );
};

export default Header;
