# madBTN

Application React interactive avec des boutons qui se déplacent aléatoirement.

## 🚀 Démarrage rapide

```bash
# Cloner le projet
git clone [url-du-repo]
cd madBTN

# Installer les dépendances
npm install

# Lancer l'application
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 🎮 Qu'est-ce que c'est ?

Une petite application ludique inspirée d'un post vu sur Reddit que j'ai voulu reproduire.

Fonctionnement :
- Le bouton **"No"** fuit quand vous approchez la souris
- Le bouton **"Yes"** se téléporte à chaque clic
- Un message spécial apparaît après 5 clics sur "Yes"
- Un message apparaît après 10 poursuites du bouton "No"
- Une fois les seuils respectifs atteints, les boutons retourne à leurs positions initiales

## 🛠️ Stack technique

- React 19.2 + TypeScript
- Vite 7.3
- Tailwind CSS 4.2

## 📦 Autres commandes

```bash
npm run build    # Build de production
npm run lint     # Vérifier le code
npm run preview  # Tester le build
```

