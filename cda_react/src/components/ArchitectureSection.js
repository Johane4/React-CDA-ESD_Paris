import "../styles/ArchitectureSection.css";

function ArchitectureSection() {
  return (
    <section id="architecture" className="architecture-section">
      <h2>Architecture d'un projet React</h2>

      <div className="content-box">
        <h3>🏛️ Introduction à l'architecture multicouche</h3>
        <p>
          Dans le référentiel CDA (Concepteur Développeur d'Applications),
          l'architecture multicouche est une compétence fondamentale. Elle
          permet de créer des applications maintenables, évolutives et testables
          en séparant clairement les responsabilités.
        </p>
        <p>
          <strong>Principe clé :</strong> Chaque couche a une responsabilité
          unique et communique uniquement avec les couches adjacentes. Cela
          respecte le principe SOLID de responsabilité unique (Single
          Responsibility Principle).
        </p>
      </div>

      <div className="content-box">
        <h3>📁 Architecture standard d'un projet React</h3>
        <p>
          Voici l'organisation de dossiers recommandée pour un projet React
          professionnel :
        </p>

        <div className="architecture-diagram">
          <pre>
            {`src/
├── api/              → Appels API et gestion des endpoints
│   ├── apiClient.js      // Configuration fetch/axios
│   ├── userService.js    // Endpoints utilisateurs
│   └── productService.js // Endpoints produits
│
├── components/       → Composants UI réutilisables
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   └── Header.jsx
│
├── context/          → État global (Context API)
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   └── ThemeContext.jsx
│
├── hooks/            → Hooks personnalisés (optionnel)
│   ├── useAuth.js
│   └── useFetch.js
│
├── layouts/          → Structure de page (en-têtes, pieds de page)
│   ├── MainLayout.jsx
│   └── AdminLayout.jsx
│
├── pages/            → Pages complètes / Vues
│   ├── HomePage.jsx
│   ├── DashboardPage.jsx
│   └── ProfilePage.jsx
│
├── utils/            → Fonctions métiers (formatage, calculs)
│   ├── formatDate.js
│   ├── validators.js
│   └── calculations.js
│
├── App.jsx           → Point d'entrée avec routing
└── main.jsx          → Montage de l'application`}
          </pre>
        </div>
      </div>

      <div className="content-box">
        <h3>🎯 Application multicouche en React</h3>
        <p>
          L'architecture multicouche appliquée à React se décompose en 5 couches
          principales. Chaque couche a une responsabilité spécifique et ne doit
          pas empiéter sur les autres.
        </p>

        <div className="grid-layout">
          <div className="card">
            <h4>1️⃣ Couche Présentation</h4>
            <p>
              <strong>Responsabilité :</strong> Affichage de l'interface
              utilisateur
            </p>
            <p>
              <strong>Dossiers :</strong> components/, pages/, layouts/
            </p>
            <p>
              <strong>Contenu :</strong>
            </p>
            <ul>
              <li>JSX et structure HTML</li>
              <li>CSS et styles</li>
              <li>Gestion des événements utilisateur</li>
              <li>Aucune logique métier</li>
            </ul>
          </div>

          <div className="card">
            <h4>2️⃣ Couche Logique Métier</h4>
            <p>
              <strong>Responsabilité :</strong> Règles de gestion et traitements
            </p>
            <p>
              <strong>Dossiers :</strong> utils/, hooks/
            </p>
            <p>
              <strong>Contenu :</strong>
            </p>
            <ul>
              <li>Calculs complexes</li>
              <li>Validations métier</li>
              <li>Transformations de données</li>
              <li>Algorithmes métier</li>
            </ul>
          </div>

          <div className="card">
            <h4>3️⃣ Couche Données</h4>
            <p>
              <strong>Responsabilité :</strong> Communication avec les APIs
            </p>
            <p>
              <strong>Dossiers :</strong> api/
            </p>
            <p>
              <strong>Contenu :</strong>
            </p>
            <ul>
              <li>Appels HTTP (GET, POST, PUT, DELETE)</li>
              <li>Configuration des endpoints</li>
              <li>Gestion des tokens d'authentification</li>
              <li>Transformation réponses API</li>
            </ul>
          </div>

          <div className="card">
            <h4>4️⃣ Couche État Global</h4>
            <p>
              <strong>Responsabilité :</strong> Gestion de l'état partagé
            </p>
            <p>
              <strong>Dossiers :</strong> context/
            </p>
            <p>
              <strong>Contenu :</strong>
            </p>
            <ul>
              <li>Contextes React (Context API)</li>
              <li>États partagés entre composants</li>
              <li>Reducers pour états complexes</li>
              <li>Providers d'état</li>
            </ul>
          </div>

          <div className="card">
            <h4>5️⃣ Couche Navigation</h4>
            <p>
              <strong>Responsabilité :</strong> Gestion du routing
            </p>
            <p>
              <strong>Fichiers :</strong> App.jsx, router.jsx
            </p>
            <p>
              <strong>Contenu :</strong>
            </p>
            <ul>
              <li>Configuration des routes</li>
              <li>Navigation entre pages</li>
              <li>Protection de routes (auth)</li>
              <li>Routes dynamiques</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="example-box">
        <h4>💼 Exemple concret : Application e-commerce</h4>
        <p>
          Voyons comment séparer proprement les couches dans une application de
          vente en ligne.
        </p>

        <h4>1. Couche Présentation - ProductCard.jsx</h4>
        <pre>
          <code>{`// components/ProductCard.jsx
// Responsabilité : UNIQUEMENT l'affichage
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price}€</p>
      <button onClick={() => onAddToCart(product)}>
        Ajouter au panier
      </button>
    </div>
  );
}`}</code>
        </pre>

        <h4>2. Couche Logique Métier - calculations.js</h4>
        <pre>
          <code>{`// utils/calculations.js
// Responsabilité : Règles de calcul métier
export function calculateDiscount(price, discountPercent) {
  return price * (1 - discountPercent / 100);
}

export function calculateTotalCart(items) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}

export function applyVAT(amount, vatRate = 20) {
  return amount * (1 + vatRate / 100);
}

// Validation métier
export function validateStock(requestedQty, availableStock) {
  if (requestedQty <= 0) {
    throw new Error('La quantité doit être positive');
  }
  if (requestedQty > availableStock) {
    throw new Error('Stock insuffisant');
  }
  return true;
}`}</code>
        </pre>

        <h4>3. Couche Données - productService.js</h4>
        <pre>
          <code>{`// api/productService.js
// Responsabilité : Communication avec l'API
import { apiClient } from './apiClient';

export const productService = {
  // Récupérer tous les produits
  getAllProducts: async () => {
    return await apiClient.get('/products');
  },

  // Récupérer produits par catégorie
  getByCategory: async (categoryId) => {
    return await apiClient.get(\`/products?category=\${categoryId}\`);
  },

  // Rechercher des produits
  search: async (searchTerm) => {
    return await apiClient.get(\`/products/search?q=\${searchTerm}\`);
  },

  // Récupérer les détails d'un produit
  getProductDetails: async (productId) => {
    return await apiClient.get(\`/products/\${productId}\`);
  }
};`}</code>
        </pre>

        <h4>4. Couche État Global - CartContext.jsx</h4>
        <pre>
          <code>{`// context/CartContext.jsx
// Responsabilité : État partagé du panier
import { createContext, useState, useContext } from 'react';
import { calculateTotalCart } from '../utils/calculations';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const total = calculateTotalCart(cartItems);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);`}</code>
        </pre>

        <h4>5. Couche Navigation - App.jsx</h4>
        <pre>
          <code>{`// App.jsx
// Responsabilité : Configuration des routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🔍 Séparation des responsabilités : Exemple complet</h3>
        <p>
          Visualisons un flux complet d'ajout au panier en respectant
          l'architecture multicouche :
        </p>

        <div className="example-box">
          <h4>Flux de données : Ajouter un produit au panier</h4>
          <pre>
            <code>{`// 1. L'utilisateur clique sur un bouton (Couche Présentation)
<ProductCard product={product} onAddToCart={handleAddToCart} />

// 2. Le composant Page gère l'événement (Couche Présentation)
function ProductListPage() {
  const { addToCart } = useCart(); // Accès à l'état global

  const handleAddToCart = (product) => {
    // 3. Validation métier (Couche Logique Métier)
    try {
      validateStock(1, product.stock);

      // 4. Mise à jour de l'état global (Couche État Global)
      addToCart(product);

      // 5. Optionnel : Synchronisation avec l'API (Couche Données)
      cartService.syncCart(cartItems);

      alert('Produit ajouté au panier !');
    } catch (error) {
      alert(error.message);
    }
  };

  return <ProductCard product={product} onAddToCart={handleAddToCart} />;
}`}</code>
          </pre>
        </div>
      </div>

      <div className="warning-box">
        <h4>⚠️ Pièges courants à éviter</h4>
        <ul>
          <li>
            <strong>Mélanger les responsabilités :</strong> Ne pas mettre de
            logique métier dans les composants
            <pre>
              <code>{`// ❌ MAUVAIS
function ProductCard({ product }) {
  // Logique métier dans le composant de présentation
  const discountedPrice = product.price * 0.8;
  return <div>{discountedPrice}€</div>;
}

// ✅ BON
// utils/calculations.js
export function applyDiscount(price, percent) {
  return price * (1 - percent / 100);
}

// components/ProductCard.jsx
import { applyDiscount } from '../utils/calculations';
function ProductCard({ product }) {
  const finalPrice = applyDiscount(product.price, 20);
  return <div>{finalPrice}€</div>;
}`}</code>
            </pre>
          </li>
          <li>
            <strong>Appeler directement l'API depuis un composant :</strong>{" "}
            Toujours passer par la couche de service
          </li>
          <li>
            <strong>Dupliquer la logique :</strong> Si une fonction est utilisée
            plusieurs fois, la mettre dans utils/
          </li>
          <li>
            <strong>Composants trop gros :</strong> Découper en plus petits
            composants réutilisables
          </li>
          <li>
            <strong>Mauvaise organisation des dossiers :</strong> Respecter la
            structure standard pour la maintenabilité
          </li>
        </ul>
      </div>

      <div className="content-box">
        <h3>🎯 Activité guidée</h3>
        <div className="example-box">
          <h4>
            🎨 Exercice pratique : Dessiner l'architecture d'un mini projet
          </h4>
          <p>
            <strong>Sujet :</strong> Application de gestion de tâches (Todo List
            professionnelle)
          </p>
          <p>
            <strong>Fonctionnalités :</strong>
          </p>
          <ul>
            <li>Afficher la liste des tâches</li>
            <li>Ajouter/supprimer/modifier une tâche</li>
            <li>Filtrer par statut (terminé/en cours)</li>
            <li>Authentification utilisateur</li>
            <li>Sauvegarde automatique via API</li>
          </ul>

          <p>
            <strong>Questions à répondre :</strong>
          </p>
          <ol>
            <li>Quels dossiers créer ?</li>
            <li>Où mettre les appels API ?</li>
            <li>Où placer les règles métier (ex: validation de tâche) ?</li>
            <li>Où placer l'état global (liste des tâches) ?</li>
            <li>Comment organiser les composants ?</li>
          </ol>

          <h4>Solution proposée :</h4>
          <div className="architecture-diagram">
            <pre>
              {`src/
├── api/
│   ├── apiClient.js
│   ├── taskService.js       // CRUD tâches
│   └── authService.js       // Login/logout
│
├── components/
│   ├── TaskCard.jsx         // Affichage d'une tâche
│   ├── TaskForm.jsx         // Formulaire ajout/édition
│   ├── TaskFilter.jsx       // Filtres (tous/terminés/en cours)
│   └── Header.jsx
│
├── context/
│   ├── TaskContext.jsx      // État global des tâches
│   └── AuthContext.jsx      // État authentification
│
├── layouts/
│   └── MainLayout.jsx
│
├── pages/
│   ├── LoginPage.jsx
│   └── DashboardPage.jsx    // Page principale avec tâches
│
├── utils/
│   ├── taskValidators.js    // Validation des tâches
│   ├── formatDate.js        // Formatage des dates
│   └── filterTasks.js       // Logique de filtrage
│
└── App.jsx                  // Routing + Providers`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureSection;
