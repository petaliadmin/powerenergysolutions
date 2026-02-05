# 🚀 Quick Start Guide - Power Energy Solutions

Guide rapide pour démarrer avec le projet en 5 minutes.

## ⚡ Installation Express

### 1. Vérifier les prérequis
```bash
node --version  # Doit être >= 20.x
npm --version   # Doit être >= 10.x
```

### 2. Installer Angular CLI
```bash
npm install -g @angular/cli@20
```

### 3. Installer les dépendances
```bash
cd power-energy-site
npm install
```

### 4. Lancer le serveur
```bash
npm start
```

✅ Ouvrir http://localhost:4200

## 🎨 Personnalisation Rapide

### Modifier les couleurs
`tailwind.config.js` - lignes 7-45
```javascript
colors: {
  primary: {
    500: '#0066cc',  // Votre couleur primaire
  },
  // ...
}
```

### Modifier les informations de contact
`src/app/components/contact/contact.component.ts` - lignes 30-60
```typescript
// Adresse, téléphone, email
```

### Modifier le contenu du Hero
`src/app/components/hero/hero.component.ts` - lignes 25-35
```typescript
// Titre, description, CTAs
```

## 📝 Checklist Avant Déploiement

- [ ] Remplacer placeholder images par vraies images
- [ ] Vérifier tous les liens de navigation
- [ ] Tester le formulaire de contact
- [ ] Configurer backend pour emails
- [ ] Ajouter Google Analytics
- [ ] Tester sur mobile/tablet
- [ ] Optimiser les images (WebP)
- [ ] Configurer domaine et SSL
- [ ] Créer sitemap.xml
- [ ] Soumettre à Google Search Console

## 🏗️ Build Production

```bash
ng build --configuration production
```

Fichiers générés dans `dist/power-energy-solutions/browser/`

## 🌐 Déploiement Netlify (Recommandé)

### Option 1: Via Interface Web
1. Aller sur https://netlify.com
2. Drag & drop le dossier `dist/power-energy-solutions/browser`
3. ✅ Site en ligne!

### Option 2: Via CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist/power-energy-solutions/browser
```

### Configuration Netlify
Créer `netlify.toml` à la racine:
```toml
[build]
  command = "npm run build"
  publish = "dist/power-energy-solutions/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🔧 Problèmes Courants

### Port 4200 déjà utilisé
```bash
ng serve --port 4300
```

### Erreur lors de `npm install`
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Tailwind CSS ne fonctionne pas
```bash
npm run build
# Vérifier que tailwind.config.js existe
```

### Animations ne fonctionnent pas
Vérifier `app.config.ts`:
```typescript
provideAnimations()  // Doit être présent
```

## 📦 Fichiers Importants

```
📁 Configuration
   ├── package.json           # Dépendances
   ├── angular.json          # Config Angular
   ├── tailwind.config.js    # Config Tailwind
   └── tsconfig.json         # Config TypeScript

📁 Application
   ├── src/app/app.component.ts
   ├── src/app/app.config.ts
   ├── src/app/app.routes.ts
   └── src/main.ts

📁 Composants
   ├── header/              # Navigation
   ├── hero/                # Section d'accueil
   ├── about/               # À propos
   ├── services/            # Services
   ├── expertise/           # Expertise
   ├── contact/             # Contact
   └── footer/              # Pied de page

📁 Styles
   └── src/styles.scss      # Styles globaux
```

## 🎯 Prochaines Étapes

1. **Images**: Remplacer placeholders dans `src/assets/images/`
2. **Logo**: Ajouter logo dans `src/assets/logo.png`
3. **Favicon**: Générer avec https://realfavicongenerator.net/
4. **Analytics**: Ajouter Google Analytics dans `index.html`
5. **Email**: Configurer backend formulaire contact
6. **SEO**: Optimiser meta tags dans chaque page
7. **Performance**: Optimiser images et activer lazy loading
8. **Tests**: Tester sur vrais appareils

## 📱 Tester Responsive

### Chrome DevTools
1. F12 pour ouvrir DevTools
2. Ctrl+Shift+M pour toggle device mode
3. Tester sur différents appareils

### Outils en ligne
- **Responsive Design Checker**: https://responsivedesignchecker.com/
- **BrowserStack**: Tests sur vrais appareils
- **LambdaTest**: Tests cross-browser

## 🔍 Tester SEO

### Outils gratuits
- **Google Lighthouse**: Dans Chrome DevTools
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/

### Checklist SEO
- [ ] Title unique par page (50-60 caractères)
- [ ] Meta description (150-160 caractères)
- [ ] Headings hiérarchisés (H1→H2→H3)
- [ ] Alt text sur toutes les images
- [ ] URLs propres et descriptives
- [ ] Sitemap.xml créé
- [ ] Robots.txt configuré
- [ ] Schema.org markup ajouté

## 💡 Conseils Pro

### Performance
```bash
# Analyser la taille du bundle
npm run build -- --stats-json
npx webpack-bundle-analyzer dist/power-energy-solutions/stats.json
```

### Debugging
```typescript
// Mode debug dans Angular
export const environment = {
  production: false,
  debug: true
};
```

### Git Workflow
```bash
# Branches recommandées
main       # Production
develop    # Développement
feature/*  # Nouvelles fonctionnalités
hotfix/*   # Corrections urgentes
```

## 📞 Support

### Documentation
- Angular: https://angular.dev
- Tailwind: https://tailwindcss.com
- TypeScript: https://www.typescriptlang.org

### Communauté
- Stack Overflow: Tag [angular]
- Reddit: r/Angular2
- Discord: Angular Community

## ✅ Validation Finale

Avant de mettre en ligne, tester:
- ✅ Navigation fonctionnelle
- ✅ Tous les liens actifs
- ✅ Formulaire fonctionne
- ✅ Responsive sur mobile
- ✅ Temps de chargement < 3s
- ✅ Pas d'erreurs console
- ✅ SEO score > 90 (Lighthouse)
- ✅ Accessibility score > 90
- ✅ Performance score > 80

## 🎉 Félicitations!

Votre site est prêt! 

Pour toute question:
- 📧 Email: contact@powerenergysolutions.com
- 📞 Tél: +221 77 648 45 35

---

**Astuce**: Garder ce guide à portée de main pour référence rapide!
