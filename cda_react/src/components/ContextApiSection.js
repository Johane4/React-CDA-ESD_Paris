import "../styles/ContextApiSection.css";

const ContextApiSection = () => {
  return (
    <section id="context" className="context-api-section">
      <h2>Context API avancé</h2>

      <div className="content-box">
        <h3>🔄 Rappels : Qu'est-ce que le Context ?</h3>
        <p>
          Le Context API de React permet de partager des données entre plusieurs
          composants sans avoir à passer des props à travers chaque niveau de
          l'arbre des composants (éviter le "prop drilling").
        </p>
        <p>
          <strong>Cas d'usage typiques :</strong> authentification, thème,
          langue, panier d'achat, préférences utilisateur.
        </p>
      </div>

      <div className="content-box">
        <h3>📚 Les 3 éléments fondamentaux du Context</h3>

        <h4>1. createContext() - Création du contexte</h4>
        <pre>
          <code>{`import { createContext } from 'react';

// Création d'un contexte avec une valeur par défaut
const ThemeContext = createContext('light');`}</code>
        </pre>

        <h4>2. Provider - Fournisseur de valeurs</h4>
        <p>
          Le Provider rend la valeur accessible à tous les composants enfants.
        </p>
        <pre>
          <code>{`function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}`}</code>
        </pre>

        <h4>3. useContext() - Consommation du contexte</h4>
        <p>
          Les composants enfants accèdent à la valeur du contexte avec ce hook.
        </p>
        <pre>
          <code>{`import { useContext } from 'react';

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Mode : {theme}
    </button>
  );
}`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🏗️ Niveau avancé : Structure d'un store global</h3>
        <p>
          Dans un projet professionnel, il faut structurer le Context de manière
          maintenable et évolutive. Voici l'approche recommandée.
        </p>

        <h4>Structure de dossiers recommandée</h4>
        <div className="architecture-diagram">
          <pre>
            {`src/
├── context/
│   ├── AppContext.jsx        // Définition du contexte
│   ├── AppProvider.jsx       // Provider avec la logique
│   └── reducers/
│       └── appReducer.js     // Reducer pour états complexes`}
          </pre>
        </div>
      </div>

      <div className="example-box">
        <h4>💼 Exemple professionnel complet : Authentification</h4>

        <h4>1. Création du contexte - AuthContext.jsx</h4>
        <pre>
          <code>{`// context/AuthContext.jsx
import { createContext } from 'react';

// Création du contexte avec valeur par défaut
const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  loading: true
});

export default AuthContext;`}</code>
        </pre>

        <h4>2. Provider avec logique - AuthProvider.jsx</h4>
        <pre>
          <code>{`// context/AuthProvider.jsx
import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import { authService } from '../api/authService';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Vérifier si l'utilisateur est déjà connecté au montage
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const userData = await authService.verifyToken(token);
          setUser(userData);
        }
      } catch (error) {
        console.error('Token invalide');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Fonction de connexion (règle métier encapsulée)
  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await authService.login(email, password);

      // Stockage du token
      localStorage.setItem('authToken', response.token);
      setUser(response.user);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  // Valeur fournie à tous les composants
  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personnalisé pour faciliter l'utilisation
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans AuthProvider');
  }
  return context;
};`}</code>
        </pre>

        <h4>3. Utilisation dans App.jsx</h4>
        <pre>
          <code>{`// App.jsx
import { AuthProvider } from './context/AuthProvider';
import MainApp from './MainApp';

function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}`}</code>
        </pre>

        <h4>4. Consommation dans un composant</h4>
        <pre>
          <code>{`// components/LoginForm.jsx
import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);

    if (result.success) {
      alert('Connexion réussie !');
    } else {
      alert('Erreur : ' + result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>
    </form>
  );
}`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🔧 Context + Reducer : Gestion d'état complexe</h3>
        <p>
          Pour des états plus complexes (comme un panier avec plusieurs
          actions), on utilise un reducer (inspiré de Redux mais sans la
          complexité).
        </p>

        <div className="example-box">
          <h4>💼 Cas professionnel : Panier d'achat avec reducer</h4>

          <h4>1. Définition du reducer - cartReducer.js</h4>
          <pre>
            <code>{`// context/reducers/cartReducer.js
// Types d'actions
export const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  APPLY_COUPON: 'APPLY_COUPON'
};

// État initial
export const initialCartState = {
  items: [],
  coupon: null,
  discount: 0
};

// Reducer : fonction qui gère les modifications d'état
export function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        // Si le produit existe déjà, augmenter la quantité
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      // Sinon, ajouter le nouveau produit
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    }

    case CART_ACTIONS.UPDATE_QUANTITY: {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    }

    case CART_ACTIONS.CLEAR_CART: {
      return initialCartState;
    }

    case CART_ACTIONS.APPLY_COUPON: {
      return {
        ...state,
        coupon: action.payload.code,
        discount: action.payload.discount
      };
    }

    default:
      return state;
  }
}`}</code>
          </pre>

          <h4>2. Provider avec reducer - CartProvider.jsx</h4>
          <pre>
            <code>{`// context/CartProvider.jsx
import { createContext, useReducer, useContext } from 'react';
import { cartReducer, initialCartState, CART_ACTIONS } from './reducers/cartReducer';
import { calculateTotalCart } from '../utils/calculations';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Actions encapsulées
  const addItem = (product) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product });
  };

  const removeItem = (productId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId);
    } else {
      dispatch({
        type: CART_ACTIONS.UPDATE_QUANTITY,
        payload: { id: productId, quantity }
      });
    }
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const applyCoupon = (code, discount) => {
    dispatch({
      type: CART_ACTIONS.APPLY_COUPON,
      payload: { code, discount }
    });
  };

  // Calculs dérivés (utilisation de la logique métier)
  const subtotal = calculateTotalCart(state.items);
  const total = subtotal - state.discount;

  const value = {
    items: state.items,
    coupon: state.coupon,
    discount: state.discount,
    subtotal,
    total,
    itemCount: state.items.reduce((sum, item) => sum + item.quantity, 0),
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    applyCoupon
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart doit être utilisé dans CartProvider');
  }
  return context;
};`}</code>
          </pre>

          <h4>3. Utilisation dans un composant</h4>
          <pre>
            <code>{`// components/CartSummary.jsx
import { useCart } from '../context/CartProvider';

function CartSummary() {
  const { items, subtotal, discount, total, itemCount } = useCart();

  return (
    <div className="cart-summary">
      <h3>Panier ({itemCount} articles)</h3>

      {items.map(item => (
        <div key={item.id}>
          {item.name} x {item.quantity} = {item.price * item.quantity}€
        </div>
      ))}

      <div className="totals">
        <p>Sous-total : {subtotal}€</p>
        {discount > 0 && <p>Réduction : -{discount}€</p>}
        <p className="total">Total : {total}€</p>
      </div>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>

      <div className="content-box">
        <h3>🎯 Découpage du contexte en plusieurs fichiers</h3>
        <p>
          Dans une application professionnelle, il ne faut pas tout mettre dans
          un seul contexte global. Découper par domaine fonctionnel améliore la
          maintenabilité.
        </p>

        <div className="example-box">
          <h4>Exemple : Application e-commerce complète</h4>
          <div className="architecture-diagram">
            <pre>
              {`src/
├── context/
│   ├── AuthContext.jsx         // Authentification
│   ├── AuthProvider.jsx
│   │
│   ├── CartContext.jsx         // Panier
│   ├── CartProvider.jsx
│   │
│   ├── ProductContext.jsx      // Catalogue produits
│   ├── ProductProvider.jsx
│   │
│   ├── ThemeContext.jsx        // Thème (dark/light)
│   ├── ThemeProvider.jsx
│   │
│   └── reducers/
│       ├── cartReducer.js
│       └── productReducer.js`}
            </pre>
          </div>

          <h4>App.jsx avec plusieurs providers</h4>
          <pre>
            <code>{`// App.jsx
import { AuthProvider } from './context/AuthProvider';
import { CartProvider } from './context/CartProvider';
import { ThemeProvider } from './context/ThemeProvider';
import MainApp from './MainApp';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <MainApp />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}`}</code>
          </pre>
        </div>
      </div>

      <div className="content-box">
        <h3>⚡ Performance : Éviter les rerenders inutiles</h3>
        <p>
          Un problème courant avec Context est que tous les composants
          consommant le contexte se re-rendent quand la valeur change, même
          s'ils n'utilisent pas la partie modifiée.
        </p>

        <h4>Solution 1 : Découper les contextes</h4>
        <pre>
          <code>{`// ❌ MAUVAIS : Un seul gros contexte
const AppContext = createContext({
  user: null,
  theme: 'light',
  cart: [],
  favorites: []
  // Tout change ensemble !
});

// ✅ BON : Plusieurs contextes séparés
const AuthContext = createContext();
const ThemeContext = createContext();
const CartContext = createContext();
// Chaque partie est indépendante`}</code>
        </pre>

        <h4>Solution 2 : Mémoïsation de la valeur du Provider</h4>
        <pre>
          <code>{`import { useMemo } from 'react';

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Mémoïser la valeur pour éviter rerenders inutiles
  const value = useMemo(() => ({
    items,
    addItem: (item) => setItems(prev => [...prev, item]),
    removeItem: (id) => setItems(prev => prev.filter(i => i.id !== id))
  }), [items]); // Recalculer uniquement si items change

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}`}</code>
        </pre>
      </div>

      <div className="warning-box">
        <h4>⚠️ Pièges courants à éviter</h4>
        <ul>
          <li>
            <strong>Oublier le Provider :</strong> Toujours wrapper l'app dans
            le Provider
            <pre>
              <code>{`// ❌ Erreur : useContext appelé hors du Provider
function App() {
  return <ComponentQuiUtiliseLeContext />; // ERREUR !
}

// ✅ Correct
function App() {
  return (
    <MonProvider>
      <ComponentQuiUtiliseLeContext />
    </MonProvider>
  );
}`}</code>
            </pre>
          </li>
          <li>
            <strong>Contexte trop large :</strong> Ne pas mettre TOUTES les
            données dans un seul contexte
          </li>
          <li>
            <strong>Ne pas mémoïser la valeur :</strong> Peut causer des
            rerenders excessifs
          </li>
          <li>
            <strong>Logique métier dans les composants :</strong> La mettre dans
            le Provider
          </li>
          <li>
            <strong>Utiliser Context pour tout :</strong> Les props locales
            suffisent pour les données non partagées
          </li>
        </ul>
      </div>

      <div className="content-box">
        <h3>🎯 Cas d'usage professionnels</h3>
        <div className="grid-layout">
          <div className="card">
            <h4>🔐 Authentification</h4>
            <p>
              Partager l'état de connexion, le profil utilisateur et les
              permissions dans toute l'application.
            </p>
          </div>
          <div className="card">
            <h4>🛒 Panier d'achat</h4>
            <p>
              Gérer les articles, quantités, prix total accessible depuis
              n'importe quelle page.
            </p>
          </div>
          <div className="card">
            <h4>🌙 Thème</h4>
            <p>
              Mode clair/sombre partagé pour tous les composants sans prop
              drilling.
            </p>
          </div>
          <div className="card">
            <h4>🌍 Internationalisation</h4>
            <p>Langue sélectionnée et traductions accessibles globalement.</p>
          </div>
          <div className="card">
            <h4>⭐ Favoris</h4>
            <p>
              Liste des produits favoris synchronisée entre différentes pages.
            </p>
          </div>
          <div className="card">
            <h4>📊 Tableau de bord</h4>
            <p>
              Statistiques et données métier partagées entre widgets du
              dashboard.
            </p>
          </div>
        </div>
      </div>

      <div className="content-box">
        <h3>🎯 Exercices pratiques</h3>
        <div className="grid-layout">
          <div className="card">
            <h4>Exercice 1 : ThemeContext</h4>
            <p>
              Créer un contexte de thème (clair/sombre) avec un bouton de toggle
              accessible depuis n'importe quel composant.
            </p>
          </div>
          <div className="card">
            <h4>Exercice 2 : FavoritesContext</h4>
            <p>
              Implémenter un système de favoris avec ajout/suppression persisté
              dans localStorage.
            </p>
          </div>
          <div className="card">
            <h4>Exercice 3 : CartContext avec reducer</h4>
            <p>
              Créer un panier complet avec reducer gérant : ajout, suppression,
              modification quantité, calcul du total.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextApiSection;
