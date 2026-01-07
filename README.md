# Formation React - Concepteur Développeur d'Applications

> Site web de cours et d'exercices pour la formation React destinée aux étudiants CDA (Bac+3) de l'École Supérieure de Paris.

## 📋 Présentation

Ce projet est un site web pédagogique interactif couvrant les concepts fondamentaux de React ainsi que des sujets avancés tels que TypeScript, React Router, les hooks, les tests unitaires et la gestion d'état.

### Contenu du cours

Le site couvre les modules suivants :

- **Fondamentaux React** : Props, State, Événements
- **React Router** : Navigation et routing côté client
- **Hooks avancés** : useEffect, Context API, hooks personnalisés
- **TypeScript** : Typage pour React
- **Tests unitaires** : Jest, React Testing Library
- **Architecture** : Organisation de code et bonnes pratiques
- **API REST** : Appels HTTP et gestion de données asynchrones

---

## 🚀 Installation et démarrage

### Prérequis

- **Node.js** version 16.x ou supérieure
- **npm** (inclus avec Node.js) ou **yarn**

### Installation avec npm

```bash
# 1. Cloner le repository
git clone <url-du-repo>
cd project

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# L'application sera disponible sur http://localhost:5173
```

### Installation avec Yarn

```bash
# 1. Cloner le repository
git clone <url-du-repo>
cd project

# 2. Installer les dépendances
yarn install

# 3. Lancer le serveur de développement
yarn dev

# 4. Ouvrir dans le navigateur
# L'application sera disponible sur http://localhost:5173
```

---

## 📦 Installation des dépendances supplémentaires

### React Router (Navigation)

#### Avec npm

```bash
npm install react-router-dom
```

#### Avec Yarn

```bash
yarn add react-router-dom
```

**Configuration de base :**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

### TypeScript

#### Configuration TypeScript avec npm

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

#### Configuration TypeScript avec Yarn

```bash
yarn add -D typescript @types/react @types/react-dom
```

**Fichier `tsconfig.json` recommandé :**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**Renommer les fichiers :**

- `.jsx` → `.tsx` pour les composants React
- `.js` → `.ts` pour les fichiers JavaScript

---

### Tests unitaires avec Jest et React Testing Library

#### Installation avec npm

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @types/jest
```

#### Installation avec Yarn

```bash
yarn add -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @types/jest
```

**Configuration Jest (`jest.config.js`) :**

```js
export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};
```

**Fichier `jest.setup.js` :**

```js
import "@testing-library/jest-dom";
```

**Ajouter dans `package.json` :**

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

**Exemple de test :**

```jsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import App from "./App";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText(/Formation React/i)).toBeInTheDocument();
  });
});
```

---

## 🏗️ Structure du projet

```
project/
├── public/               # Fichiers statiques
│   └── vite.svg
├── src/
│   ├── assets/          # Images et ressources
│   ├── components/      # Composants React réutilisables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── RouterSection.jsx
│   │   ├── UseEffectSection.jsx
│   │   ├── ContextApiSection.jsx
│   │   ├── TypeScriptSection.jsx
│   │   ├── TestingSection.jsx
│   │   ├── ApiCallsSection.jsx
│   │   └── ArchitectureSection.jsx
│   ├── App.jsx          # Composant principal
│   ├── App.css          # Styles du composant App
│   ├── main.jsx         # Point d'entrée de l'application
│   └── index.css        # Styles globaux
├── .env                 # Variables d'environnement
├── .gitignore          # Fichiers à ignorer par Git
├── index.html          # Page HTML principale
├── package.json        # Dépendances et scripts
├── vite.config.js      # Configuration Vite
├── eslint.config.js    # Configuration ESLint
└── README.md           # Documentation du projet
```

---

## 📜 Scripts disponibles

### Avec npm

```bash
npm run dev         # Démarre le serveur de développement
npm run build       # Crée une version optimisée pour la production
npm run preview     # Prévisualise le build de production
npm run lint        # Vérifie le code avec ESLint
npm test            # Lance les tests unitaires (après installation Jest)
npm run test:watch  # Lance les tests en mode watch
```

### Avec Yarn

```bash
yarn dev            # Démarre le serveur de développement
yarn build          # Crée une version optimisée pour la production
yarn preview        # Prévisualise le build de production
yarn lint           # Vérifie le code avec ESLint
yarn test           # Lance les tests unitaires (après installation Jest)
yarn test:watch     # Lance les tests en mode watch
```

---

## 🎓 Modules de formation

### 1. Concepts avancés

- React Router et navigation
- useEffect et gestion des effets de bord
- Context API pour l'état global
- TypeScript pour un typage fort
- Tests unitaires avec Jest
- Appels API et gestion asynchrone
- Architecture et organisation du code

---

## 🧪 Ressources recommandées

### Documentation officielle

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vite](https://vitejs.dev/guide/)

### Outils de développement

- [React Developer Tools](https://react.dev/learn/react-developer-tools) (Extension navigateur)
- [VS Code](https://code.visualstudio.com/) avec extensions :
  - ES7+ React/Redux/React-Native snippets
  - ESLint
  - Prettier

---

## 🎯 Objectifs pédagogiques

À la fin de cette formation, les étudiants seront capables de :

✅ Comprendre les concepts fondamentaux de React (props, state, événements)
✅ Créer des applications React modulaires et maintenables
✅ Utiliser React Router pour la navigation
✅ Maîtriser les hooks (useState, useEffect, useContext, useReducer)
✅ Typer du code React avec TypeScript
✅ Écrire des tests unitaires avec Jest
✅ Consommer des API REST
✅ Organiser une architecture de code professionnelle

---

## 👨‍🎓 Public cible

**Formation destinée aux étudiants CDA (Concepteur Développeur d'Applications) Bac+3**
École Supérieure de Paris

### Prérequis

- Connaissances en HTML, CSS, JavaScript (ES6+)
- Bases de la programmation orientée objet
- Notions de développement web

---

## 📝 License

Ce projet est un support pédagogique destiné aux étudiants de l'École Supérieure de Paris.
Usage strictement éducatif.

---

## 🤝 Support

Pour toute question ou problème technique :

- Consultez les ressources intégrées au site
- Contactez moi
- Référez-vous à la documentation officielle React

---

**Bonne formation ! 🚀**

Dév Web/Formatrice : Johane OMISCAR
