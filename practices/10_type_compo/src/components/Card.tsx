// CComposant (non typé)
// const Card = ({ title, description }) => {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// };

// export default Card;

// Définition claire des données attendues par le composant

interface CardProps {
  title: string;
  description?: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description || "Pas de description"}</p>
    </div>
  );
};

export default Card;
