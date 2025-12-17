import "../styles/ApiCallsSection.css";

const ApiCallsSection = () => {
  return (
    <section id="api" className="api-calls-section">
      <h2>Appels API & Gestion des états</h2>

      <div className="content-box">
        <h3>🌐 Introduction aux appels API en React</h3>
        <p>
          Dans une application professionnelle, la communication avec un backend
          via des API REST est essentielle. React ne fournit pas d'outil natif
          pour les appels HTTP, on utilise donc <code>fetch()</code> (natif
          JavaScript) ou des bibliothèques comme <code>axios</code>.
        </p>
      </div>

      <div className="content-box">
        <h3>📡 Utilisation de fetch() et axios</h3>

        <h4>Avec fetch() (natif)</h4>
        <pre>
          <code>{`// GET Request
fetch('https://api.exemple.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erreur:', error));

// POST Request
fetch('https://api.exemple.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Jean Dupont', email: 'jean@exemple.com' })
})
  .then(response => response.json())
  .then(data => console.log('Utilisateur créé:', data));`}</code>
        </pre>

        <h4>Avec axios (bibliothèque externe)</h4>
        <pre>
          <code>{`import axios from 'axios';

// GET Request
axios.get('https://api.exemple.com/users')
  .then(response => console.log(response.data))
  .catch(error => console.error('Erreur:', error));

// POST Request
axios.post('https://api.exemple.com/users', {
  name: 'Jean Dupont',
  email: 'jean@exemple.com'
})
  .then(response => console.log('Utilisateur créé:', response.data));`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🔄 Gestion des états : loading, error, data (Tri-état)</h3>
        <p>
          Pour une expérience utilisateur professionnelle, il faut gérer trois
          états distincts lors d'un appel API :
        </p>
        <ul>
          <li>
            <strong>loading :</strong> Requête en cours (afficher un
            spinner/loader)
          </li>
          <li>
            <strong>error :</strong> Erreur survenue (afficher un message
            d'erreur)
          </li>
          <li>
            <strong>data :</strong> Données reçues avec succès (afficher le
            contenu)
          </li>
        </ul>
      </div>

      <div className="example-box">
        <h4>💼 Exemple professionnel complet : Liste d'utilisateurs</h4>
        <p>
          Application de gestion RH affichant la liste des employés depuis une
          API.
        </p>
        <pre>
          <code>{`import { useState, useEffect } from 'react';

function EmployeeList() {
  // États pour gérer le tri-état
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fonction asynchrone pour l'appel API
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://api.entreprise.com/employees');

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }

        const data = await response.json();
        setEmployees(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []); // S'exécute une fois au montage

  // Rendu conditionnel (tri-état)
  if (loading) {
    return <div className="loader">⏳ Chargement des employés...</div>;
  }

  if (error) {
    return <div className="error">❌ Erreur : {error}</div>;
  }

  return (
    <div className="employee-list">
      <h2>Liste des employés ({employees.length})</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
}`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🛑 AbortController : Annulation d'appel API (Avancé)</h3>
        <p>
          Dans un contexte professionnel, si l'utilisateur navigue rapidement ou
          si le composant se démonte avant la fin de la requête, il faut annuler
          la requête pour éviter les erreurs et améliorer les performances.
        </p>
        <pre>
          <code>{`useEffect(() => {
  // Création d'un contrôleur d'annulation
  const abortController = new AbortController();

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.exemple.com/data', {
        signal: abortController.signal // Lier le signal au fetch
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Requête annulée');
      } else {
        setError(error.message);
      }
    }
  };

  fetchData();

  // Cleanup : annuler la requête si le composant se démonte
  return () => {
    abortController.abort();
  };
}, []);`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🏗️ Structuration propre d'une fonction d'appel API</h3>
        <p>
          Dans un projet professionnel, il faut externaliser la logique d'appel
          API dans des fonctions réutilisables.
        </p>

        <h4>Structure recommandée : dossier api/</h4>
        <div className="architecture-diagram">
          <pre>
            {" "}
            {`src/
├── api/
│   ├── apiClient.js      // Configuration axios/fetch
│   ├── employeeService.js // Appels liés aux employés
│   └── productService.js  // Appels liés aux produits
└── components/
    └── EmployeeList.jsx   // Composant utilisant l'API`}
          </pre>
        </div>

        <h4>Exemple : apiClient.js</h4>
        <pre>
          <code>{`// Configuration centralisée de l'API
const API_BASE_URL = 'https://api.entreprise.com';

export const apiClient = {
  get: async (endpoint) => {
    const response = await fetch(\`\${API_BASE_URL}\${endpoint}\`);
    if (!response.ok) throw new Error('Erreur réseau');
    return response.json();
  },

  post: async (endpoint, data) => {
    const response = await fetch(\`\${API_BASE_URL}\${endpoint}\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Erreur réseau');
    return response.json();
  }
};`}</code>
        </pre>

        <h4>Exemple : employeeService.js</h4>
        <pre>
          <code>{`import { apiClient } from './apiClient';

export const employeeService = {
  // Récupérer tous les employés
  getAll: () => apiClient.get('/employees'),

  // Récupérer un employé par ID
  getById: (id) => apiClient.get(\`/employees/\${id}\`),

  // Créer un employé
  create: (employeeData) => apiClient.post('/employees', employeeData),

  // Mettre à jour un employé
  update: (id, employeeData) => apiClient.put(\`/employees/\${id}\`, employeeData),

  // Supprimer un employé
  delete: (id) => apiClient.delete(\`/employees/\${id}\`)
};`}</code>
        </pre>

        <h4>Utilisation dans un composant</h4>
        <pre>
          <code>{`import { useState, useEffect } from 'react';
import { employeeService } from '../api/employeeService';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setLoading(true);
        const data = await employeeService.getAll();
        setEmployees(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  // ... reste du composant
}`}</code>
        </pre>
      </div>

      <div className="example-box">
        <h4>💼 Cas professionnel : Recherche avec filtre côté front</h4>
        <p>
          Application e-commerce permettant de filtrer les produits après
          chargement depuis l'API.
        </p>
        <pre>
          <code>{`function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Charger les produits au montage
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('https://api.shop.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initialiser le filtre
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Filtrer les produits côté front quand searchTerm change
  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  if (loading) return <div>Chargement...</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}€</p>
          </div>
        ))}
      </div>
    </div>
  );
}`}</code>
        </pre>
      </div>

      <div className="warning-box">
        <h4>⚠️ Pièges courants à éviter</h4>
        <ul>
          <li>
            <strong>Oublier le tri-état :</strong> Toujours gérer loading, error
            et data
          </li>
          <li>
            <strong>Ne pas gérer les erreurs réseau :</strong> Toujours avoir un
            try/catch
          </li>
          <li>
            <strong>Appel API dans le render :</strong> Toujours utiliser
            useEffect
            <pre>
              <code>{`// ❌ MAUVAIS
function Component() {
  fetch('/api/data'); // Crée une boucle infinie !
  return <div>...</div>;
}

// ✅ BON
function Component() {
  useEffect(() => {
    fetch('/api/data');
  }, []);
  return <div>...</div>;
}`}</code>
            </pre>
          </li>
          <li>
            <strong>Oublier l'annulation (AbortController) :</strong> Peut
            causer des erreurs si le composant se démonte
          </li>
          <li>
            <strong>Hardcoder les URLs :</strong> Toujours centraliser la
            configuration API
          </li>
          <li>
            <strong>Ne pas vérifier response.ok :</strong> fetch() ne rejette
            pas automatiquement les erreurs HTTP
          </li>
        </ul>
      </div>

      <div className="content-box">
        <h3>🎯 Exercices pratiques</h3>
        <div className="grid-layout">
          <div className="card">
            <h4>Exercice 1 : Appel API publique</h4>
            <p>
              Utiliser l'API JSONPlaceholder pour afficher une liste de posts
              avec tri-état (loading, error, data).
            </p>
            <p>
              <small>URL : https://jsonplaceholder.typicode.com/posts</small>
            </p>
          </div>
          <div className="card">
            <h4>Exercice 2 : Filtre côté front</h4>
            <p>
              Ajouter une barre de recherche pour filtrer les posts récupérés
              par titre.
            </p>
          </div>
          <div className="card">
            <h4>Exercice 3 : Création de service API</h4>
            <p>
              Créer un service réutilisable dans api/postService.js avec les
              méthodes getAll() et getById().
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiCallsSection;
