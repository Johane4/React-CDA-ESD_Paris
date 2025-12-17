import "../styles/RouterSection.css";

const RouterSection = () => {
  return (
    <section id="router" className="router-section">
      <h2>Router React - Navigation & Routage</h2>

      <div className="content-box">
        <h3>🧭 Introduction au routage en React</h3>
        <p>
          Le routage permet de naviguer entre différentes pages/vues dans une
          application sans rechargement complet du navigateur (Single Page
          Application - SPA). La bibliothèque <code>react-router-dom</code> est
          l'outil standard pour cela.
        </p>
        <p>
          Dans une application professionnelle, une bonne architecture de
          routage améliore l'expérience utilisateur et facilite la maintenance.
        </p>
      </div>

      <div className="content-box">
        <h3>🔧 Configuration de base du routeur</h3>

        <h4>1. Installation de react-router-dom</h4>
        <pre>
          <code>{`npm install react-router-dom`}</code>
        </pre>

        <h4>2. Structure d'une application avec routeur</h4>
        <div className="architecture-diagram">
          <pre>
            {`src/
├── pages/
│   ├── HomePage.jsx
│   ├── ProductsPage.jsx
│   ├── ProductDetailPage.jsx
│   └── NotFoundPage.jsx
│
├── App.jsx          // Configuration des routes
└── main.jsx`}
          </pre>
        </div>

        <h4>3. Configuration du routeur - App.jsx</h4>
        <pre>
          <code>{`import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route simple */}
        <Route path="/" element={<HomePage />} />

        {/* Route avec sous-chemins */}
        <Route path="/products" element={<ProductsPage />} />

        {/* Route avec paramètre dynamique */}
        <Route path="/products/:id" element={<ProductDetailPage />} />

        {/* Route par défaut pour erreur 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🔗 Navigation et Hooks de routage</h3>

        <h4>1. Composant Link pour navigation</h4>
        <pre>
          <code>{`import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* Équivalent de <a> mais sans rechargement */}
      <Link to="/">Accueil</Link>
      <Link to="/products/:id">Produits</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}`}</code>
        </pre>

        <h4>2. Hook useNavigate pour navigation programmée</h4>
        <p>
          Permet de rediriger l'utilisateur par code (utile après une soumission
          de formulaire).
        </p>
        <pre>
          <code>{`import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    // Simulation de connexion
    const result = await loginAPI(credentials);

    if (result.success) {
      // Redirection programmée après succès
      navigate('/dashboard');
    } else {
      alert('Erreur de connexion');
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin({ /* ... */ });
    }}>
      {/* Formulaire */}
    </form>
  );
}`}</code>
        </pre>

        <h4>3. Hook useParams pour récupérer les paramètres</h4>
        <pre>
          <code>{`import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProductDetailPage() {
  const { id } = useParams(); // Récupère le :id de la route
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Appel API avec l'ID du produit
    fetchProduct(id).then(data => setProduct(data));
  }, [id]); // Relancer si l'ID change

  if (!product) return <div>Chargement...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Prix : {product.price}€</p>
    </div>
  );
}`}</code>
        </pre>

        <h4>4. Hook useLocation pour connaître la route actuelle</h4>
        <pre>
          <code>{`import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        Accueil
      </Link>
      <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
        Produits
      </Link>
    </nav>
  );
}`}</code>
        </pre>
      </div>

      <div className="example-box">
        <h4>💼 Exemple professionnel : Application e-commerce complète</h4>

        <h4>Structure du projet</h4>
        <pre>
          <code>{`// pages/HomePage.jsx
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Bienvenue dans notre boutique</h1>
      <Link to="/products">
        <button>Voir tous les produits</button>
      </Link>
    </div>
  );
}

export default HomePage;`}</code>
        </pre>

        <pre>
          <code>{`// pages/ProductsPage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.shop.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Nos produits</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.price}€</p>
            {/* Lien vers la page détail */}
            <Link to={\`/products/\${product.id}\`}>
              <button>Voir détails</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;`}</code>
        </pre>

        <pre>
          <code>{`// pages/ProductDetailPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(\`https://api.shop.com/products/\${id}\`);
        if (!response.ok) {
          throw new Error('Produit non trouvé');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
        navigate('/products'); // Rediriger si erreur
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (loading) return <div>Chargement...</div>;
  if (!product) return <div>Produit non trouvé</div>;

  const handleAddToCart = () => {
    // Logique d'ajout au panier
    alert('Produit ajouté au panier !');
    navigate('/cart');
  };

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Retour</button>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="price">{product.price}€</p>
      <button onClick={handleAddToCart}>Ajouter au panier</button>
    </div>
  );
}

export default ProductDetailPage;`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🛡️ Routes protégées (PrivateRoute) - Authentification</h3>
        <p>
          Dans une application professionnelle, certaines routes doivent être
          accessibles uniquement aux utilisateurs connectés.
        </p>

        <h4>Créer une route protégée</h4>
        <pre>
          <code>{`// components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, isAuthenticated }) {
  // Si l'utilisateur n'est pas connecté, rediriger vers login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Sinon, afficher le composant demandé
  return children;
}

export default PrivateRoute;`}</code>
        </pre>

        <h4>Utilisation dans App.jsx</h4>
        <pre>
          <code>{`import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Route protégée : accessible seulement si authentifié */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <DashboardPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>⚙️ Routes imbriquées et Layout (Avancé)</h3>
        <p>
          Pour organiser des routes complexes avec des layouts communs (ex:
          admin avec sidebar, shop avec header).
        </p>

        <pre>
          <code>{`// layouts/AdminLayout.jsx
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        {/* Menu admin */}
        <nav>
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/users">Utilisateurs</Link>
          <Link to="/admin/products">Produits</Link>
        </nav>
      </aside>
      <main>
        {/* Les pages imbriquées s'affichent ici */}
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;`}</code>
        </pre>

        <h4>Configuration avec routes imbriquées</h4>
        <pre>
          <code>{`// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminProducts from './pages/admin/AdminProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes imbriquées avec layout commun */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}</code>
        </pre>
      </div>

      <div className="warning-box">
        <h4>⚠️ Pièges courants à éviter</h4>
        <ul>
          <li>
            <strong>Oublier BrowserRouter :</strong> Toutes les routes doivent
            être enveloppées
          </li>
          <li>
            <strong>Routes mal ordonnées :</strong> Mettre les routes plus
            spécifiques avant les génériques
            <pre>
              <code>{`// ❌ MAUVAIS : "*" attrap tout
<Route path="*" element={<NotFound />} />
<Route path="/products/:id" element={<Detail />} /> // Jamais atteint

// ✅ BON : Route générique en dernier
<Route path="/products/:id" element={<Detail />} />
<Route path="*" element={<NotFound />} />`}</code>
            </pre>
          </li>
          <li>
            <strong>Oublier useParams :</strong> Toujours récupérer les
            paramètres avec ce hook
          </li>
          <li>
            <strong>Ne pas gérer les états de chargement :</strong>{" "}
            L'utilisateur doit savoir que la page charge
          </li>
          <li>
            <strong>Routes protégées non testées :</strong> Vérifier que les
            routes protégées redirigent correctement
          </li>
        </ul>
      </div>

      <div className="content-box">
        <h3>🎯 Exercices pratiques</h3>
        <div className="grid-layout">
          <div className="card">
            <h4>Exercice 1 : Navigation basique</h4>
            <p>
              Créer 3 pages (Accueil, À propos, Contact) avec navigation entre
              elles.
            </p>
          </div>
          <div className="card">
            <h4>Exercice 2 : Liste avec détail</h4>
            <p>
              Afficher une liste de posts, cliquer sur un post affiche les
              détails avec l'ID en paramètre.
            </p>
          </div>
          <div className="card">
            <h4>Exercice 3 : Routes protégées</h4>
            <p>
              Créer une page de login et une page de profil accessible seulement
              si connecté.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouterSection;
