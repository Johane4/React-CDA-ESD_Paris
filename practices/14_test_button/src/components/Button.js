/*
  Composant Button réutilisable
  Props :
  - label : texte du bouton
  - onClick : action au clic
  - disabled : bouton désactivé
  - variant : style du bouton
*/

const Button = ({ label, onClick, disabled = false, variant = "primary" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  );
};

export default Button;
