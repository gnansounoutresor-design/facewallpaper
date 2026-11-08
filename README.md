# FaceWallpaper

FaceWallpaper est un prototype d’application Android minimaliste qui adapte le fond d’écran à la personne reconnue. L’interface couvre l’accueil, les profils, l’apparence, les réglages de reconnaissance, la protection par PIN et le parcours d’ajout d’une personne.

## Fonctionnalités

- aperçu de la caméra et état de reconnaissance ;
- profils associés à des fonds d’écran personnalisés ;
- photo par défaut pour les personnes inconnues ;
- préférences de reconnaissance et de sécurité ;
- interface de saisie du PIN administrateur ;
- parcours interactif d’enregistrement d’un visage ;
- interface responsive en français.

## Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS 4

## Installation

Prérequis : Node.js 24 et pnpm 10.

```bash
pnpm install
pnpm dev
```

## Vérification

```bash
pnpm exec tsc --noEmit
pnpm build
```

## Licence

Ce projet est distribué sous licence MIT. Consultez le fichier [LICENSE](LICENSE).
