import "../styles/TypeScriptSection.css";

const TypeScriptSection = () => {
  return (
    <section id="typescript" className="typescript-section">
      <h2>React avec TypeScript</h2>

      <div className="content-box">
        <h3>📘 Qu'est-ce que TypeScript ?</h3>
        <p>
          TypeScript est une extension de JavaScript qui ajoute un{" "}
          <strong>système de types statiques</strong>. En langage simple : vous
          dites à JavaScript "cette variable est un texte", "ce paramètre est un
          nombre", et TypeScript vérifie que vous utilisez ces données
          correctement.
        </p>
        <p>
          <strong>Comparaison simple :</strong>
        </p>
        <ul>
          <li>
            <strong>JavaScript :</strong> Accepte n'importe quoi, erreurs
            découvertes au runtime (programme en cours d'exécution)
          </li>
          <li>
            <strong>TypeScript :</strong> Refuse les erreurs avant d'exécuter le
            code, détection immédiate des problèmes
          </li>
        </ul>
      </div>

      <div className="content-box">
        <h3>🎯 Pourquoi utiliser TypeScript en professionnel ?</h3>
        <p>
          Imaginez : vous travaillez sur un projet e-commerce en équipe.
          Quelqu'un crée une fonction qui retourne un prix, mais oublie que
          c'est un nombre. Un autre développeur utilise cette fonction sans
          savoir, et voilà : le prix s'affiche comme texte au lieu d'un nombre !
        </p>
        <div className="example-box">
          <h4>Exemple concret</h4>
          <pre>
            <code>{`// ❌ SANS TypeScript (JavaScript)
const calculatePrice = (price, discount) => {
  return price - discount; // Accepte n'importe quoi
}

calculatePrice("100", 10); // ❌ ERREUR : "100" - 10 = "10010" (concaténation)
// Erreur découverte en production !

// ✅ AVEC TypeScript
function calculatePrice(price: number, discount: number): number {
  return price - discount; // TypeScript empêche les mauvais types
}

calculatePrice("100", 10); // ❌ ERREUR DÉTECTÉE IMMÉDIATEMENT
// Message : "Argument of type 'string' is not assignable to parameter of type 'number'"
// Vous corrigez avant même de lancer le code !`}</code>
          </pre>
        </div>

        <p>
          <strong>Avantages réels :</strong>
        </p>
        <ul>
          <li>✅ Erreurs détectées immédiatement dans l'éditeur</li>
          <li>
            ✅ Autocomplétion intelligente (l'éditeur suggère les bonnes
            propriétés)
          </li>
          <li>
            ✅ Code auto-documenté (les types expliquent comment utiliser la
            fonction)
          </li>
          <li>
            ✅ Refactoring sécurisé (renommer une variable affecte tout
            automatiquement)
          </li>
          <li>✅ Moins de bugs en production</li>
        </ul>
      </div>

      <div className="content-box">
        <h3>🔧 Configuration de base</h3>

        <h4>1. Créer un projet React avec TypeScript</h4>
        <pre>
          <code>{`npx create-react-app my-app --template typescript`}</code>
        </pre>

        <div className="info-box">
          <h4>📝 Extensions de fichiers TypeScript</h4>
          <ul>
            <li>
              <strong>.tsx</strong> → Composants React avec JSX
            </li>
            <li>
              <strong>.ts</strong> → Logique pure / Types / Services
            </li>
          </ul>

          <h4>✅ Configuration automatique</h4>
          <p>
            Lors de la création d'un projet React avec TypeScript, la
            configuration est <strong>automatiquement générée</strong>. Le
            fichier <code>tsconfig.json</code> contient tous les réglages
            nécessaires pour faire fonctionner TypeScript avec React.
          </p>

          <h4>⚠️ Erreurs fréquentes</h4>
          <ul>
            <li>❌ Lancer les commandes npm hors du dossier projet</li>
            <li>❌ Mélanger npm et yarn dans le même projet</li>
            <li>
              ❌ Modifier <code>tsconfig.json</code> sans comprendre les options
            </li>
            <li>❌ Supprimer les fichiers de déclaration TypeScript (.d.ts)</li>
          </ul>
        </div>

        <h4>2. Comprendre la syntaxe du typage : type: valeur</h4>
        <p>
          La syntaxe TypeScript est simple :{" "}
          <code>variable: type = valeur</code>
        </p>

        <h4>Les types de base (primitifs)</h4>
        <pre>
          <code>{`// Les 3 types les plus courants
const name: string = "Alice";           // Texte
const age: number = 25;                 // Nombre
const isActive: boolean = true;         // Vrai ou Faux

// Conseil : TypeScript peut déduire le type
// Pas besoin d'écrire le type si c'est évident
const city = "Paris"; // TypeScript sait que c'est un string`}</code>
        </pre>

        <h4>Types composés (plus avancés)</h4>
        <pre>
          <code>{`// Tableau de nombres
const scores: number[] = [95, 87, 92];

// Tableau de textes
const names: string[] = ["Alice", "Bob", "Charlie"];

// Objet avec propriétés typées
const user: { name: string; age: number } = {
  name: "Alice",
  age: 25
};`}</code>
        </pre>

        <h4>Types optionnels (propriété peut ne pas exister)</h4>
        <pre>
          <code>{`// Le "?" signifie "optionnel" (peut être undefined)
interface User {
  name: string;           // Obligatoire
  phone?: string;         // Optionnel
}

const user1: User = { name: "Alice" };              // ✅ OK
const user2: User = { name: "Bob", phone: "06..." }; // ✅ OK
const user3: User = { phone: "06..." };              // ❌ ERREUR : name manquant`}</code>
        </pre>

        <h4>Types union (plusieurs valeurs possibles)</h4>
        <pre>
          <code>{`// Le "|" signifie "OU"
type Status = "loading" | "success" | "error";

const status: Status = "loading";  // ✅ OK
const status2: Status = "pending";  // ❌ ERREUR : pas dans la liste`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>⚛️ Typage des composants React</h3>

        <h4>1. Comprendre les props (propriétés) du composant</h4>
        <p>
          Les props sont les paramètres d'un composant React. En TypeScript, il
          faut décrire le type de chaque prop avec une <code>interface</code>.
        </p>

        <h4>Interface : comment décrire la forme d'un objet</h4>
        <p>
          Une <code>interface</code> est comme un "contrat" qui dit "cet objet
          doit avoir ces propriétés de ces types".
        </p>
        <pre>
          <code>{`// Définir la forme des props
interface ButtonProps {
  label: string;           // Le texte du bouton
  onClick: () => void;     // Fonction sans paramètre, sans retour
}

// Utiliser la forme dans le composant
function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

// ✅ Bonne utilisation
<Button label="Cliquez" onClick={() => alert('Cliqué !')} />

// ❌ ERREUR détectée immédiatement
<Button label={123} onClick={() => {}} />  // ERREUR : label doit être string`}</code>
        </pre>

        <h4>Props optionnelles avec réaction à l'utilisateur</h4>
        <pre>
          <code>{`interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;      // Optionnel
  color?: "blue" | "red";  // Optionnel avec valeurs limitées
}

function Button({ label, onClick, disabled = false, color = "blue" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
}

// Utilisation
<Button label="Soumettre" onClick={handleSubmit} disabled />
<Button label="Danger" onClick={delete} color="red" />`}</code>
        </pre>

        <h4>2. Typer les événements React (formulaire, clics)</h4>
        <p>
          Les événements React (click, change, submit) ont des types
          spécifiques. TypeScript fournit des types prédéfinis pour chaque
          événement.
        </p>
        <pre>
          <code>{`import { useState, ChangeEvent, FormEvent } from 'react';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Événement de saisie (onChange)
  // ChangeEvent<HTMLInputElement> = événement d'un input
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Événement de soumission (onSubmit)
  // FormEvent<HTMLFormElement> = événement d'un formulaire
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Connexion :', { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Mot de passe"
      />
      <button type="submit">Se connecter</button>
    </form>
  );
}`}</code>
        </pre>

        <p>
          <strong>Types d'événements courants :</strong>
        </p>
        <ul>
          <li>
            <code>ChangeEvent&lt;HTMLInputElement&gt;</code> - Changement
            d'input (onChange)
          </li>
          <li>
            <code>FormEvent&lt;HTMLFormElement&gt;</code> - Soumission de
            formulaire (onSubmit)
          </li>
          <li>
            <code>MouseEvent&lt;HTMLButtonElement&gt;</code> - Clic sur bouton
            (onClick)
          </li>
          <li>
            <code>FocusEvent&lt;HTMLInputElement&gt;</code> - Focus/Blur sur
            input (onFocus, onBlur)
          </li>
        </ul>

        <h4>3. Typer useState (état du composant)</h4>
        <p>
          Le hook useState peut déduire le type automatiquement ou vous pouvez
          le spécifier.
        </p>
        <pre>
          <code>{`import { useState } from 'react';

// ✅ TypeScript déduit automatiquement (simple)
const [count, setCount] = useState(0);       // TypeScript sait que c'est number
const [name, setName] = useState("Alice");   // TypeScript sait que c'est string

// ❌ Mais attention : le départ influence le type
const [user, setUser] = useState(null);      // TypeScript le traite comme "null"
// Plus tard : setUser({ name: "Alice" }); // ERREUR !

// ✅ Spécifier le type explicitement si valeur initiale est null
interface User {
  id: number;
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);
const [users, setUsers] = useState<User[]>([]);

// ✅ Utilisation
const handleAddUser = (newUser: User) => {
  setUsers([...users, newUser]);
};`}</code>
        </pre>

        <h4>4. Typer useEffect (appels API)</h4>
        <p>
          Pour useEffect, c'est surtout l'état et les données qui doivent être
          typés correctement.
        </p>
        <pre>
          <code>{`import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

function PostList() {
  // Typer l'état : tableau de Post
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Appel API dans une fonction async
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.example.com/posts');
        // Typer les données reçues
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        // (err as Error) = caster en Error pour accéder à .message
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Dépendances vides = s'exécute une fois

  // Rendu conditionnel (tri-état)
  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}`}</code>
        </pre>
      </div>

      <div className="example-box">
        <h4>💼 Exemple professionnel : Composant de formulaire typé</h4>

        <pre>
          <code>{`// types/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
}

// components/UserForm.tsx
import { FormEvent, ChangeEvent } from 'react';
import { User } from '../types/User';

interface UserFormProps {
  onSubmit: (user: User) => Promise<void>;
  initialUser?: Partial<User>;
}

function UserForm({ onSubmit, initialUser }: UserFormProps) {
  const [formData, setFormData] = useState<Partial<User>>(initialUser || {});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // TypeScript vérifie que formData contient tous les champs requis
      await onSubmit(formData as User);
      alert('Utilisateur sauvegardé avec succès !');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name || ''}
        onChange={handleChange}
        placeholder="Nom"
      />

      <input
        type="email"
        name="email"
        value={formData.email || ''}
        onChange={handleChange}
        placeholder="Email"
      />

      <select
        name="role"
        value={formData.role || ''}
        onChange={handleChange}
      >
        <option value="">Sélectionnez un rôle</option>
        <option value="admin">Admin</option>
        <option value="user">Utilisateur</option>
        <option value="guest">Invité</option>
      </select>

      {error && <div className="error">{error}</div>}

      <button type="submit" disabled={loading}>
        {loading ? 'Sauvegarde...' : 'Soumettre'}
      </button>
    </form>
  );
}

export default UserForm;`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🔄 Typer les appels API</h3>

        <pre>
          <code>{`// types/api.ts
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// services/userService.ts
import { User } from '../types/User';
import { ApiResponse } from '../types/api';

export const userService = {
  // Le type de retour est clairement défini
  getAll: async (): Promise<User[]> => {
    const response = await fetch('/api/users');
    return response.json();
  },

  // Typer à la fois le paramètre et le retour
  getById: async (id: number): Promise<User | null> => {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) return null;
    return response.json();
  },

  // Créer un utilisateur typé
  create: async (user: Omit<User, 'id' | 'createdAt'>): Promise<ApiResponse<User>> => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    return response.json();
  }
};`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🎯 Typer Context API</h3>

        <pre>
          <code>{`// context/ThemeContext.tsx
import { createContext, ReactNode, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook typé pour utiliser le context
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme doit être utilisé dans ThemeProvider');
  }
  return context;
}`}</code>
        </pre>
      </div>

      <div className="warning-box">
        <h4>⚠️ Pièges courants à éviter</h4>

        <h4>1. Éviter le type 'any' (la fuite TypeScript)</h4>
        <p>
          <code>any</code> signifie "je ne sais pas le type" et désactive
          complètement TypeScript. C'est comme revenir à JavaScript. À éviter
          absolument.
        </p>
        <pre>
          <code>{`// ❌ MAUVAIS : désactive TypeScript
const data: any = response;
data.name;    // TypeScript ne vérifie rien
data.invalid; // Pas d'erreur détectée

// ✅ BON : spécifier le type réel
interface User {
  id: number;
  name: string;
}
const data: User = response;
data.name;    // ✅ OK
data.invalid; // ❌ ERREUR détectée`}</code>
        </pre>

        <h4>2. Oublier de typer les props des composants</h4>
        <pre>
          <code>{`// ❌ MAUVAIS : pas d'interface
function Card({ title, description }) {
  return <div><h3>{title}</h3><p>{description}</p></div>;
}

// ✅ BON : interface pour les props
interface CardProps {
  title: string;
  description: string;
}

function Card({ title, description }: CardProps) {
  return <div><h3>{title}</h3><p>{description}</p></div>;
}`}</code>
        </pre>

        <h4>3. Oublier de typer useState quand valeur initiale est null</h4>
        <pre>
          <code>{`// ❌ MAUVAIS : TypeScript pense que c'est null uniquement
const [user, setUser] = useState(null);
setUser({ name: "Alice" }); // ERREUR !

// ✅ BON : spécifier le type
const [user, setUser] = useState<{ name: string } | null>(null);
setUser({ name: "Alice" }); // ✅ OK`}</code>
        </pre>

        <h4>4. Type 'object' est trop vague</h4>
        <pre>
          <code>{`// ❌ MAUVAIS : object = n'importe quel objet
const data: object = { name: "Alice", age: 25 };
data.age; // Erreur : 'age' n'existe pas sur 'object'

// ✅ BON : créer une interface précise
interface User {
  name: string;
  age: number;
}
const data: User = { name: "Alice", age: 25 };
data.age; // ✅ OK et autocomplétion intelligente`}</code>
        </pre>

        <h4>5. Oublier que TypeScript se compile en JavaScript</h4>
        <p>
          Les types TypeScript disparaissent à la compilation. Ils ne sont là
          que pendant le développement. Donc les vérifications en runtime (au
          lancement du code) ne sont pas possibles automatiquement.
        </p>
      </div>

      <div className="content-box">
        <h3>💡 Bonnes pratiques TypeScript (Conforme REAC CDA)</h3>

        <h4>1. Organisation des types dans dossier types/</h4>
        <p>
          Centraliser tous les types au même endroit facilite la maintenance et
          rend le code plus lisible.
        </p>
        <pre>
          <code>{`src/
├── types/
│   ├── User.ts          // Interface User
│   ├── Product.ts       // Interface Product
│   └── api.ts           // Interfaces API
├── components/
├── pages/
└── services/`}</code>
        </pre>

        <h4>2. Interface vs Type : quand utiliser lequel ?</h4>
        <pre>
          <code>{`// Interface = pour définir la forme d'objets (composants, données)
interface User {
  id: number;
  name: string;
  email: string;
}

// Type = pour les unions, types simples, alias
type Status = "loading" | "success" | "error";
type UserId = number | string;

// Pratique REAC CDA : Interface pour structures de données`}</code>
        </pre>

        <h4>3. Typer les fichiers de service API</h4>
        <pre>
          <code>{`// types/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

// services/userService.ts
import { User } from '../types/User';

export const userService = {
  getAll: async (): Promise<User[]> => {
    const response = await fetch('/api/users');
    return response.json();
  },

  getById: async (id: number): Promise<User | null> => {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) return null;
    return response.json();
  }
};`}</code>
        </pre>

        <h4>4. Activer strict mode (tsconfig.json)</h4>
        <p>
          Cela force TypeScript à être plus strict et détecte plus d'erreurs
          potentielles.
        </p>
        <pre>
          <code>{`{
  "compilerOptions": {
    "strict": true,           // Activation du mode strict
    "strictNullChecks": true, // null et undefined détectés
    "noImplicitAny": true,    // Erreur si type 'any' implicite
    "target": "ES2020",
    "module": "ESNext"
  }
}`}</code>
        </pre>

        <h4>5. Nommer les interfaces avec cohérence</h4>
        <p>
          Pratique REAC CDA : utiliser des noms significatifs et explicites.
        </p>
        <pre>
          <code>{`// ❌ MAUVAIS
interface IUser { }     // Le "I" préfixe est démodé
interface user { }      // Minuscule, confusion possible
interface UserInterface { } // Redondant

// ✅ BON
interface User { }           // Clair et simple
interface CreateUserPayload { } // Explicite sur le contenu
interface UserLoginForm { }   // Explicite sur le contexte`}</code>
        </pre>

        <h4>6. Documentation avec types</h4>
        <p>
          Les types servent de documentation. Privilégier les noms explicites
          plutôt que des commentaires.
        </p>
        <pre>
          <code>{`// ❌ Documentation insuffisante
function process(data: any, flag: boolean) {
  // Traite les données
}

// ✅ Types documentent le code
interface UserFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

function handleUserLogin(formData: UserFormData): Promise<void> {
  // Le code documente lui-même ce qu'il attend
}`}</code>
        </pre>
      </div>

      <div className="content-box">
        <h3>🎯 Exercices pratiques</h3>
        <div className="grid-layout">
          <div className="card">
            <h4>Exercice 1 : Typer un composant</h4>
            <p>
              Créer une interface pour les props et typer complètement un
              composant Card.
            </p>
          </div>
          <div className="card">
            <h4>Exercice 2 : Service typé</h4>
            <p>
              Créer un service API complètement typé avec interfaces pour les
              réponses.
            </p>
          </div>
          <div className="card">
            <h4>Exercice 3 : Context TypeScript</h4>
            <p>
              Convertir un Context JavaScript en TypeScript avec types stricts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeScriptSection;
