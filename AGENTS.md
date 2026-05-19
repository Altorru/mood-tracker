# mood-tracker — Contexte projet OpenCode

## Stack

- Next.js 15 (App Router), React 19.x, TypeScript strict
- Tailwind CSS, chart.js v4 + react-chartjs-2 v5 (compatibles React 19)
- localStorage pour persistance

## Structure réelle du projet

```
app/
├── page.tsx                    — Page principale
├── layout.tsx
├── globals.css
└── components/
    ├── MoodTracker.tsx         — Formulaire saisie humeur
    └── ChartHistory.tsx        — Graphique historique
src/
└── utils/
    ├── moodHistory.ts
    ├── moodScore.ts
    └── moodScore.test.ts
public/
package.json
```

## Types de données

```typescript
interface MoodEntry {
  date: string;   // ISO string
  mood: string;   // "1" à "10"
  note?: string;  // optionnel
}
```

## Conventions

- TypeScript strict, zéro `any`
- Composants fonctionnels React
- Tailwind CSS uniquement, pas de CSS inline
- Commentaires en français

## Dépendances charts

| Paquet             | Version | Statut              |
|--------------------|---------|---------------------|
| chart.js           | 4.5.1   | ✅ compatible React 19 |
| react-chartjs-2    | 5.3.1   | ✅ compatible React 19 |
| recharts           | < 3.x   | ❌ incompatible React 19 — NE PAS installer |

## Workflow

1. **Scout** — lire `app/components/` avant chaque modification
2. **Coder** (Gemini Flash) — pour les rewrites complets
3. **Reviewer** — après chaque feature ajoutée
4. **Lint + typecheck** — après chaque session