import "../styles/TestingSection.css";

const TestingSection = () => {
  return (
    <section id="testing" className="testing-section">
      <h2>Tests unitaires avec Jest</h2>

      <div className="content-box">
        <h3>🧪 Pourquoi tester son code ?</h3>
        <p>
          Les tests sont essentiels dans une application professionnelle. Ils
          garantissent que le code fonctionne correctement, facilitent les
          modifications futures et détectent les régressions rapidement.
        </p>
        <p>
          <strong>Avantages des tests :</strong> Confiance en le code,
          documentation du comportement attendu, refactoring sans peur,
          déboggage plus rapide.
        </p>
        <p>
          <strong>Types de tests :</strong> Unitaires (fonction isolée),
          intégration (plusieurs modules), end-to-end (application complète).
        </p>
      </div>

      <div className="content-box">
        <h3>🔧 Configuration de Jest</h3>

        <h4>1. Installation</h4>
        <pre>
          <code>{`npm install --save-dev jest @testing-library/react @testing-library/jest-dom`}</code>
        </pre>

        <h4>2. Configuration jest.config.js</h4>
        <pre>
          <code>{`module.exports = {
  testEnvironment: 'jsdom',  // Pour tester des composants React
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};`}</code>
        </pre>

        <h4>3. Package.json scripts</h4>
        <pre>
          <code>{`{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>📁 Structure des dossiers tests (Bonnes pratiques)</h3>

        <h4>Option 1 : Dossier __tests__ centralisé (RECOMMANDÉ)</h4>
        <pre>
          <code>{`mon-projet/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Form.jsx
│   ├── utils/
│   │   ├── math.js
│   │   ├── validation.js
│   │   └── api.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   └── __tests__/              ← Tous les tests ici
│       ├── components/
│       │   ├── Button.test.jsx
│       │   ├── Card.test.jsx
│       │   └── Form.test.jsx
│       ├── utils/
│       │   ├── math.test.js
│       │   ├── validation.test.js
│       │   └── api.test.js
│       ├── hooks/
│       │   ├── useAuth.test.js
│       │   └── useFetch.test.js
│       └── integration/        ← Tests d'intégration
│           └── UserFlow.test.jsx
├── jest.config.js
├── package.json
└── README.md`}</code>
        </pre>

        <h4>Option 2 : Tests à côté des fichiers</h4>
        <pre>
          <code>{`mon-projet/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Button.test.jsx     ← Test à côté du composant
│   │   ├── Card.jsx
│   │   ├── Card.test.jsx
│   │   ├── Form.jsx
│   │   └── Form.test.jsx
│   ├── utils/
│   │   ├── math.js
│   │   ├── math.test.js        ← Test à côté de l'utilitaire
│   │   ├── validation.js
│   │   └── validation.test.js
│   └── hooks/
│       ├── useAuth.js
│       ├── useAuth.test.js
│       ├── useFetch.js
│       └── useFetch.test.js
├── jest.config.js
└── package.json`}</code>
        </pre>

        <h4>Conventions de nommage des fichiers</h4>
        <ul>
          <li>
            <strong>Composant :</strong> Button.jsx → Test : Button.test.jsx
          </li>
          <li>
            <strong>Utilitaire :</strong> math.js → Test : math.test.js
          </li>
          <li>
            <strong>Hook :</strong> useAuth.js → Test : useAuth.test.js
          </li>
          <li>
            <strong>Alternative :</strong> Vous pouvez aussi utiliser .spec.js
            au lieu de .test.js
          </li>
        </ul>

        <h4>Organisation avancée des tests</h4>
        <pre>
          <code>{`src/__tests__/
├── unit/                    ← Tests unitaires (fonctions isolées)
│   ├── math.test.js
│   └── validation.test.js
├── integration/             ← Tests d'intégration (plusieurs modules)
│   ├── LoginFlow.test.jsx
│   └── CheckoutProcess.test.jsx
├── components/              ← Tests de composants React
│   ├── Button.test.jsx
│   └── Form.test.jsx
├── hooks/                   ← Tests de hooks personnalisés
│   └── useAuth.test.js
├── mocks/                   ← Mocks réutilisables
│   ├── mockUser.js
│   ├── mockApi.js
│   └── handlers.js
└── fixtures/                ← Données de test réutilisables
    ├── users.json
    └── products.json`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🚀 Commandes pour lancer les tests</h3>

        <h4>Lancer tous les tests une seule fois</h4>
        <pre>
          <code>{`npm test

# Ou avec la commande complète
npm run test`}</code>
        </pre>

        <h4>Lancer les tests en mode watch (se relancent automatiquement)</h4>
        <pre>
          <code>{`npm run test:watch

# Les tests se relancent à chaque modification de fichier
# Appuyez sur 'q' pour quitter
# Appuyez sur 'a' pour tout relancer
# Appuyez sur 'p' pour filtrer par nom de fichier`}</code>
        </pre>

        <h4>Lancer les tests avec rapport de couverture</h4>
        <pre>
          <code>{`npm run test:coverage

# Affiche un rapport dans le terminal
# Génère aussi un rapport HTML dans coverage/lcov-report/index.html`}</code>
        </pre>

        <h4>Lancer un seul fichier de test</h4>
        <pre>
          <code>{`npm test Button.test.jsx

# Ou avec le chemin complet
npm test src/__tests__/components/Button.test.jsx`}</code>
        </pre>

        <h4>Lancer les tests qui correspondent à un pattern</h4>
        <pre>
          <code>{`# Tous les tests contenant "Button" dans le nom
npm test -- --testNamePattern="Button"

# Tous les fichiers de test dans le dossier components
npm test -- components`}</code>
        </pre>

        <h4>Lancer les tests en mode verbose (plus de détails)</h4>
        <pre>
          <code>{`npm test -- --verbose

# Affiche chaque test individuellement avec son résultat`}</code>
        </pre>

        <h4>Options utiles dans le terminal en mode watch</h4>
        <div className="example-box">
          <p>
            <strong>Quand les tests sont en mode watch, vous pouvez :</strong>
          </p>
          <ul>
            <li>
              <strong>a</strong> : Relancer tous les tests
            </li>
            <li>
              <strong>f</strong> : Relancer uniquement les tests qui ont échoué
            </li>
            <li>
              <strong>p</strong> : Filtrer par nom de fichier (ex: "Button")
            </li>
            <li>
              <strong>t</strong> : Filtrer par nom de test (ex: "should render")
            </li>
            <li>
              <strong>q</strong> : Quitter le mode watch
            </li>
            <li>
              <strong>Enter</strong> : Relancer les tests
            </li>
          </ul>
        </div>

        <h4>Exemple complet dans le terminal</h4>
        <pre>
          <code>{`# 1. Installation des dépendances
npm install

# 2. Lancer les tests une fois
npm test

# Résultat dans le terminal :
# PASS  src/__tests__/math.test.js
#   Math utilities
#     ✓ should add two numbers correctly (3 ms)
#     ✓ should multiply two numbers correctly (1 ms)
#
# Test Suites: 1 passed, 1 total
# Tests:       2 passed, 2 total
# Time:        2.5 s

# 3. Lancer en mode watch pour développer
npm run test:watch

# 4. Voir la couverture de code
npm run test:coverage

# Résultat :
# File      | % Stmts | % Branch | % Funcs | % Lines |
# ---------|---------|----------|---------|---------|
# All files |   85.5  |   80.0   |   90.0  |   85.5  |
#  math.js  |   100   |   100    |   100   |   100   |`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>✅ Tester des fonctions pures</h3>

        <h4>Fonction à tester</h4>
        <pre>
          <code>{`// utils/math.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function calculateDiscount(price, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('Discount must be between 0 and 100');
  }
  return price * (1 - discountPercent / 100);
}`}</code>
        </pre>

        <h4>Tests pour ces fonctions</h4>
        <pre>
          <code>{`// __tests__/math.test.js
import { add, multiply, calculateDiscount } from '../utils/math';

// Groupe de tests avec describe
describe('Math utilities', () => {
  // Test simple avec it()
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  it('should multiply two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('should calculate discount correctly', () => {
    expect(calculateDiscount(100, 10)).toBe(90);
    expect(calculateDiscount(100, 50)).toBe(50);
  });

  // Test des cas d'erreur
  it('should throw error for invalid discount', () => {
    expect(() => calculateDiscount(100, -5)).toThrow();
    expect(() => calculateDiscount(100, 105)).toThrow();
  });
});`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>⚛️ Tester des composants React</h3>

        <h4>Composant à tester</h4>
        <pre>
          <code>{`// components/Counter.jsx
import { useState } from 'react';

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(initialValue);

  return (
    <div>
      <h2>Compteur: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Réinitialiser</button>
    </div>
  );
}

export default Counter;`}</code>
        </pre>

        <h4>Tests du composant</h4>
        <pre>
          <code>{`// __tests__/Counter.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Counter Component', () => {
  it('should render with initial value', () => {
    render(<Counter initialValue={0} />);

    // Vérifier que le texte s'affiche
    expect(screen.getByText(/Compteur: 0/i)).toBeInTheDocument();
  });

  it('should increment count when + button is clicked', () => {
    render(<Counter initialValue={0} />);

    const incrementBtn = screen.getByText('+');
    fireEvent.click(incrementBtn);

    // Vérifier que le compteur s'est augmenté
    expect(screen.getByText(/Compteur: 1/i)).toBeInTheDocument();
  });

  it('should decrement count when - button is clicked', () => {
    render(<Counter initialValue={5} />);

    const decrementBtn = screen.getByText('-');
    fireEvent.click(decrementBtn);

    expect(screen.getByText(/Compteur: 4/i)).toBeInTheDocument();
  });

  it('should reset count when Reset button is clicked', () => {
    render(<Counter initialValue={0} />);

    // Incrémenter plusieurs fois
    const incrementBtn = screen.getByText('+');
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    expect(screen.getByText(/Compteur: 2/i)).toBeInTheDocument();

    // Réinitialiser
    const resetBtn = screen.getByText('Réinitialiser');
    fireEvent.click(resetBtn);

    expect(screen.getByText(/Compteur: 0/i)).toBeInTheDocument();
  });
});`}</code>
        </pre>
      </div>

      <div className="example-box">
        <h4>💼 Exemple professionnel : Tester un formulaire</h4>

        <h4>Composant formulaire</h4>
        <pre>
          <code>{`// components/UserForm.jsx
import { useState } from 'react';

function UserForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email est requis';
    } else if (!email.includes('@')) {
      newErrors.email = 'Email invalide';
    }

    if (!password) {
      newErrors.password = 'Mot de passe est requis';
    } else if (password.length < 6) {
      newErrors.password = 'Minimum 6 caractères';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Appeler la fonction parent avec les données
    onSubmit({ email, password });
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <button type="submit">Se connecter</button>
    </form>
  );
}

export default UserForm;`}</code>
        </pre>

        <h4>Tests du formulaire</h4>
        <pre>
          <code>{`// __tests__/UserForm.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from '../components/UserForm';

describe('UserForm Component', () => {
  it('should validate email format', () => {
    const handleSubmit = jest.fn();
    render(<UserForm onSubmit={handleSubmit} />);

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');
    const submitBtn = screen.getByText('Se connecter');

    // Remplir avec un email invalide
    fireEvent.change(emailInput, { target: { value: 'invalid' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitBtn);

    // Vérifier que l'erreur s'affiche
    expect(screen.getByText('Email invalide')).toBeInTheDocument();
    // Vérifier que onSubmit n'a pas été appelé
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it('should validate password length', () => {
    const handleSubmit = jest.fn();
    render(<UserForm onSubmit={handleSubmit} />);

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');
    const submitBtn = screen.getByText('Se connecter');

    // Remplir avec un mot de passe trop court
    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Minimum 6 caractères')).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it('should call onSubmit with valid data', () => {
    const handleSubmit = jest.fn();
    render(<UserForm onSubmit={handleSubmit} />);

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');
    const submitBtn = screen.getByText('Se connecter');

    // Remplir avec des données valides
    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitBtn);

    // Vérifier que onSubmit a été appelé avec les bonnes données
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'user@example.com',
      password: 'password123'
    });

    // Vérifier que les champs sont réinitialisés
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
  });
});`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🔄 Tester des appels API avec mocks</h3>

        <pre>
          <code>{`// __tests__/UserList.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../components/UserList';

// Mock du fetch
global.fetch = jest.fn();

describe('UserList Component', () => {
  beforeEach(() => {
    // Réinitialiser les mocks avant chaque test
    fetch.mockClear();
  });

  it('should display loading state initially', () => {
    fetch.mockImplementation(() => new Promise(() => {}));
    render(<UserList />);

    expect(screen.getByText('Chargement...')).toBeInTheDocument();
  });

  it('should fetch and display users', async () => {
    const mockUsers = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' }
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers
    });

    render(<UserList />);

    // Attendre que les utilisateurs s'affichent
    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(screen.getByText('Bob')).toBeInTheDocument();
    });
  });

  it('should display error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText(/Erreur:/i)).toBeInTheDocument();
    });
  });
});`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🎯 Bonnes pratiques pour les tests</h3>
        <ul>
          <li>
            <strong>Un test = une responsabilité :</strong> Tester une seule
            chose par test
          </li>
          <li>
            <strong>Noms explicites :</strong> Le nom du test doit décrire
            clairement ce qu'on teste
          </li>
          <li>
            <strong>AAA Pattern :</strong> Arrange (préparer), Act (agir),
            Assert (vérifier)
          </li>
          <li>
            <strong>Éviter les dépendances entre tests :</strong> Chaque test
            doit être indépendant
          </li>
          <li>
            <strong>Mocker les dépendances externes :</strong> API,
            localStorage, etc.
          </li>
          <li>
            <strong>Viser 80% de couverture :</strong> C'est un bon objectif,
            pas 100%
          </li>
        </ul>
      </div>

      <div className="warning-box">
        <h4>⚠️ Pièges courants à éviter</h4>
        <ul>
          <li>
            <strong>Tester les détails d'implémentation :</strong> Tester le
            comportement utilisateur, pas les internals
          </li>
          <li>
            <strong>Tests trop couplés :</strong> Ne pas dépendre de l'ordre
            d'exécution des tests
          </li>
          <li>
            <strong>Oublier async/await :</strong> Toujours attendre les appels
            asynchrones avec waitFor
          </li>
          <li>
            <strong>Trop de mocks :</strong> Utiliser des mocks pour les
            dépendances externes uniquement
          </li>
          <li>
            <strong>Pas de nettoyage :</strong> Utiliser beforeEach et afterEach
            pour nettoyer
          </li>
        </ul>
      </div>

      <div className="content-box">
        <h3>📊 Coverage et rapports</h3>

        <h4>Générer un rapport de couverture</h4>
        <pre>
          <code>{`npm run test:coverage

# Affichera un rapport comme :
# Statements   : 85% ( 170/200 )
# Branches     : 80% ( 40/50 )
# Functions    : 90% ( 18/20 )
# Lines        : 85% ( 170/200 )`}</code>
        </pre>

        <h4>Ignorer des lignes du coverage</h4>
        <pre>
          <code>{`// Ignorer une ligne complète
/* istanbul ignore next */
function neverCalled() {
  // ...
}

// Ignorer une ligne
const x = 5; // istanbul ignore line`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🔷 Tests avec TypeScript (pour projet sans Vite)</h3>

        <h4>Installation TypeScript + Jest (projet npm classique)</h4>
        <p>Si vous créez un projet TypeScript sans Vite, voici les étapes :</p>
        <pre>
          <code>{`# 1. Initialiser un projet npm
npm init -y

# 2. Installer TypeScript
npm install --save-dev typescript @types/node

# 3. Installer Jest avec support TypeScript
npm install --save-dev jest ts-jest @types/jest

# 4. Installer React Testing Library (si React)
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev @types/react @types/react-dom

# 5. Configurer Jest pour TypeScript
npx ts-jest config:init`}</code>
        </pre>

        <h4>Package.json pour un projet TypeScript</h4>
        <pre>
          <code>{`{
  "name": "mon-app-typescript",
  "version": "1.0.0",
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "devDependencies": {
    "@types/jest": "^29.5.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "jest": "^29.5.0",
    "ts-jest": "^29.1.0",
    "typescript": "^5.0.0"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}`}</code>
        </pre>

        <h4>Configuration jest.config.js pour TypeScript</h4>
        <pre>
          <code>{`module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts'
  ]
};`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>📘 TypeScript : Interfaces, Types et Fonctions fléchées</h3>

        <h4>Qu'est-ce qu'une Interface ?</h4>
        <p>
          Une <strong>interface</strong> est comme un contrat qui décrit la
          structure d'un objet. Elle définit quelles propriétés doivent exister
          et leur type.
        </p>
        <pre>
          <code>{`// Définir une interface User
interface User {
  id: number;           // id doit être un nombre
  name: string;         // name doit être une chaîne de caractères
  email: string;
  age?: number;         // ? = optionnel (peut ne pas exister)
  isActive: boolean;    // boolean = true ou false
}

// Utiliser l'interface
const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  isActive: true
  // age est optionnel, on peut l'omettre
};

// ❌ ERREUR : TypeScript détecte l'erreur
const invalidUser: User = {
  id: '1',  // ERREUR : id doit être un nombre, pas une string
  name: 'Bob'
  // ERREUR : email et isActive manquants
};`}</code>
        </pre>

        <h4>Fonctions classiques vs Fonctions fléchées</h4>
        <p>
          Les <strong>fonctions fléchées</strong> (arrow functions) sont plus
          courtes et plus modernes.
        </p>

        <h4>Fonction classique (ancienne syntaxe)</h4>
        <pre>
          <code>{`// Fonction classique sans typage
function add(a, b) {
  return a + b;
}

// Fonction classique AVEC typage TypeScript
function add(a: number, b: number): number {
  return a + b;
}

// Classe avec méthode classique
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }
}`}</code>
        </pre>

        <h4>Fonction fléchée (syntaxe moderne - RECOMMENDED)</h4>
        <pre>
          <code>{`// Fonction fléchée avec typage TypeScript
const add = (a: number, b: number): number => {
  return a + b;
};

// Version ultra-courte (return implicite)
const add = (a: number, b: number): number => a + b;

// Fonction fléchée sans paramètres
const sayHello = (): string => {
  return 'Hello!';
};

// Version ultra-courte
const sayHello = (): string => 'Hello!';

// Fonction avec interface en paramètre
const greetUser = (user: User): string => {
  return \`Hello \${user.name}!\`;
};`}</code>
        </pre>

        <h4>Typer une fonction / classe complète</h4>
        <pre>
          <code>{`// Interface pour un produit
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

// Fonction fléchée qui retourne un tableau de produits
const getProducts = (): Product[] => {
  return [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Mouse', price: 29, inStock: false }
  ];
};

// Fonction fléchée avec paramètres et retour typé
const findProductById = (id: number, products: Product[]): Product | undefined => {
  return products.find(p => p.id === id);
};

// Classe avec typage complet
class ProductService {
  private products: Product[] = [];

  addProduct = (product: Product): void => {
    this.products.push(product);
  };

  getProductById = (id: number): Product | undefined => {
    return this.products.find(p => p.id === id);
  };

  getTotalValue = (): number => {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  };
}`}</code>
        </pre>

        <h4>Tests avec TypeScript et fonctions fléchées</h4>
        <pre>
          <code>{`// math.ts - Fonctions avec TypeScript
export const add = (a: number, b: number): number => a + b;

export const multiply = (a: number, b: number): number => a * b;

export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};

// Interface pour calculer une remise
interface DiscountResult {
  originalPrice: number;
  discountPercent: number;
  finalPrice: number;
  saved: number;
}

export const calculateDiscount = (
  price: number,
  discountPercent: number
): DiscountResult => {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('Discount must be between 0 and 100');
  }

  const finalPrice = price * (1 - discountPercent / 100);
  const saved = price - finalPrice;

  return {
    originalPrice: price,
    discountPercent,
    finalPrice,
    saved
  };
};`}</code>
        </pre>

        <h4>Fichier de test TypeScript : math.test.ts</h4>
        <pre>
          <code>{`// __tests__/math.test.ts
import { add, multiply, divide, calculateDiscount } from '../math';

describe('Math utilities with TypeScript', () => {

  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  it('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('should throw error on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  it('should calculate discount and return structured result', () => {
    const result = calculateDiscount(100, 20);

    // Vérifier la structure complète
    expect(result).toEqual({
      originalPrice: 100,
      discountPercent: 20,
      finalPrice: 80,
      saved: 20
    });

    // Vérifier chaque propriété individuellement
    expect(result.finalPrice).toBe(80);
    expect(result.saved).toBe(20);
  });

  it('should throw error for invalid discount', () => {
    expect(() => calculateDiscount(100, -5)).toThrow();
    expect(() => calculateDiscount(100, 105)).toThrow();
  });
});`}</code>
        </pre>

        <h4>Avantages du TypeScript dans les tests</h4>
        <ul>
          <li>
            TypeScript détecte les erreurs AVANT l'exécution (ex: mauvais type
            de paramètre)
          </li>
          <li>
            Autocomplétion dans l'éditeur (VS Code suggère les propriétés)
          </li>
          <li>
            Refactoring plus sûr (si je change une interface, TypeScript me
            prévient partout)
          </li>
          <li>
            Documentation automatique (les types expliquent ce que fait la
            fonction)
          </li>
          <li>
            Moins de bugs en production (les erreurs sont détectées à la
            compilation)
          </li>
        </ul>
      </div>

      <div className="content-box">
        <h3>🎯 Exercices pratiques</h3>
        <div className="grid-layout">
          <div className="card">
            <h4>Exercice 1 : Tests de fonction</h4>
            <p>
              Écrire 5 tests pour une fonction de validation d'email avec
              différents cas.
            </p>
          </div>
          <div className="card">
            <h4>Exercice 2 : Tests de composant</h4>
            <p>
              Tester complètement un bouton avec onClick, état désactivé, et
              plusieurs variantes.
            </p>
          </div>
          <div className="card">
            <h4>Exercice 3 : Tests intégration</h4>
            <p>
              Tester un composant qui fait un appel API avec mock et différents
              états (loading, error, success).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingSection;
