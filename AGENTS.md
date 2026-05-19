## Projet
Application Next.js 15 de suivi d'humeur quotidienne.
Stack : Next.js 15, TypeScript strict, Tailwind CSS, localStorage.
Développeur : Hugo Viaud — étudiant CESI, projet personnel.

## Architecture cible
src/
app/           — App Router Next.js
components/    — Composants React réutilisables
MoodEntry/   — Formulaire saisie humeur
MoodHistory/ — Historique des entrées
MoodChart/   — Graphiques (recharts ou chart.js)
lib/           — Utilitaires, hooks, types
types/         — Interfaces TypeScript

## Modèles disponibles par rôle
- Orchestrateur/défaut : lmstudio/qwen/qwen3-14b
- Coder (implémentation) : /agent coder → Devstral
- Scout (analyse) : /agent scout → Qwen3.5 9B  
- Reviewer (qualité) : /agent reviewer → Gemini Flash

## Workflow recommandé
1. Demande complexe → orchestrateur analyse et décompose
2. Implémentation → passe en mode coder avec /agent coder
3. Après code → review avec /agent reviewer
4. Pour chercher des exemples → use gh_grep
5. Pour les docs Next.js/React → use context7

## Conventions de code
- TypeScript strict, `noImplicitAny: true`
- Composants : PascalCase, fichier = nom du composant
- Hooks custom dans lib/hooks/
- Types dans types/index.ts
- Pas de CSS inline, Tailwind uniquement
- Commentaires en français

## Commandes utiles
```bash
npm run dev      # Démarrage dev
npm run build    # Build production
npm run lint     # Lint
npm run type-check  # Vérif TypeScript
npm run format    # Prettier
npm run format:check  # Vérif Prettier
```

## À ne jamais faire
- Utiliser `any` en TypeScript
- Toucher node_modules
- Commiter les fichiers .env
- Utiliser des composants classes React