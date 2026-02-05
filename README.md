# Power Energy Solutions - Site Vitrine Premium

Site web vitrine moderne et responsive pour Power Energy Solutions, entreprise africaine spécialisée dans l'ingénierie et les solutions énergétiques.

## 🚀 Technologies

- **Angular 20** - Framework frontend moderne avec standalone components
- **Tailwind CSS 3.4** - Framework CSS utility-first pour un design premium
- **TypeScript 5.7** - Typage statique pour un code robuste
- **RxJS 7.8** - Programmation réactive
- **Angular Animations** - Animations fluides et performantes

## ✨ Fonctionnalités

### Design & UX
- 🎨 Design corporate premium avec palette énergétique distinctive
- 📱 Entièrement responsive (Mobile, Tablet, Desktop)
- ✨ Animations au scroll et micro-interactions élégantes
- 🌊 Effets de gradient et glow énergétiques
- 🎭 Transitions fluides entre les sections
- ♿ Accessible (WCAG basique)

### Sections
1. **Header** - Navigation sticky avec logo animé
2. **Hero** - Section d'accueil impactante avec CTA
3. **À propos** - Présentation de l'entreprise et valeurs
4. **Services** - Liste complète des prestations
5. **Expertise** - Certifications, outils et réalisations
6. **Contact** - Formulaire et coordonnées
7. **Footer** - Liens, réseaux sociaux et informations

### Performances
- ⚡ Optimisé pour les performances (lazy loading, tree shaking)
- 🔍 SEO-ready avec meta tags appropriés
- 📦 Bundle optimisé pour production
- 🎯 Core Web Vitals optimisés

## 📁 Structure du Projet

```
power-energy-site/
├── src/
│   ├── app/
│   │   ├── components/          # Composants réutilisables
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── expertise/
│   │   │   ├── contact/
│   │   │   └── footer/
│   │   ├── pages/               # Pages de l'application
│   │   │   └── home-page/
│   │   ├── services/            # Services Angular
│   │   │   └── scroll-animation.service.ts
│   │   ├── shared/              # Éléments partagés
│   │   │   └── scroll-animation.directive.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles.scss              # Styles globaux
│   └── index.html
├── tailwind.config.js           # Configuration Tailwind
├── angular.json
├── package.json
└── tsconfig.json
```

## 🎨 Palette de Couleurs

### Couleurs Principales
- **Primary (Bleu électrique)**: `#0066cc` - Innovation et technologie
- **Secondary (Vert énergie)**: `#00e68a` - Durabilité et croissance
- **Accent (Orange)**: `#ff8c00` - Dynamisme et action
- **Dark (Bleu marine)**: `#0a1929` - Professionnalisme et stabilité

### Gradients Énergétiques
- Gradient principal: `primary → secondary → accent`
- Gradient sombre: `dark-500 → dark-700`

## 🔧 Installation

### Prérequis
- Node.js 20+ 
- npm 10+
- Angular CLI 20+

### Installation des dépendances

```bash
npm install
```

### Démarrage du serveur de développement

```bash
npm start
# ou
ng serve
```

Ouvrir [http://localhost:4200](http://localhost:4200) dans le navigateur.

## 🏗️ Build

### Build de développement

```bash
ng build
```

### Build de production

```bash
ng build --configuration production
```

Les fichiers seront générés dans le dossier `dist/`.

## 📝 Composants Principaux

### HeaderComponent
Navigation sticky avec menu responsive et animations

### HeroComponent
Section d'accueil avec:
- Titre impactant avec gradient animé
- CTAs proéminents
- Stats clés
- Background avec effets énergétiques

### AboutComponent
Présentation de l'entreprise avec:
- Description détaillée
- Points clés
- Visuels et icônes

### ServicesComponent
Liste des services avec:
- Cards interactives par service
- Modes d'intervention
- Icons et features

### ExpertiseComponent
Mise en valeur de:
- Statistiques clés
- Certifications
- Outils et technologies
- Capacités techniques

### ContactComponent
Formulaire de contact avec:
- Validation Angular Forms
- Informations de contact
- Map placeholder
- Design premium

### FooterComponent
Footer complet avec:
- Informations entreprise
- Liens de navigation
- Réseaux sociaux
- Bouton scroll to top

## 🎯 Animations

### Animations au Scroll
- Directive `ScrollAnimationDirective` pour animations d'apparition
- Service `ScrollAnimationService` avec IntersectionObserver
- Délais configurables pour effets en cascade

### Animations CSS
- Fade in/out
- Slide in (left, right, up, down)
- Scale effects
- Gradient shifts
- Energy pulse
- Float animations

## 🌐 SEO & Performance

### Meta Tags
- Title et description optimisés
- Open Graph pour réseaux sociaux
- Twitter Cards
- Meta keywords

### Performance
- Lazy loading des images
- Code splitting automatique
- Tree shaking
- Minification et compression
- Preconnect aux fonts Google

## ♿ Accessibilité

- Contraste des couleurs conforme WCAG AA
- Navigation au clavier
- Labels ARIA appropriés
- Focus visible
- Textes alternatifs

## 📱 Responsive Design

### Breakpoints Tailwind
- **sm**: 640px (Mobile landscape)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large desktop)
- **2xl**: 1536px (Extra large)

## 🚀 Déploiement

### Préparer pour la production

```bash
ng build --configuration production
```

### Options de déploiement
- **Netlify**: Drag & drop du dossier dist/
- **Vercel**: Import depuis Git
- **Firebase Hosting**: `firebase deploy`
- **AWS S3 + CloudFront**: Upload vers S3

### Configuration serveur
Assurez-vous que le serveur redirige toutes les routes vers `index.html` pour le routing Angular.

## 🔐 Variables d'Environnement

Créer un fichier `.env` pour les configurations:

```env
API_URL=https://api.powerenergysolutions.com
CONTACT_EMAIL=contact@powerenergysolutions.com
GOOGLE_MAPS_KEY=your_key_here
```

## 📧 Configuration Email

Le formulaire de contact nécessite un backend pour l'envoi d'emails. Options:
- **EmailJS**: Service d'envoi d'emails côté client
- **Backend custom**: Node.js + Nodemailer
- **Services cloud**: AWS SES, SendGrid, Mailgun

## 🐛 Debug & Troubleshooting

### Animations ne fonctionnent pas
Vérifier que `provideAnimations()` est dans `app.config.ts`

### Styles Tailwind non appliqués
Vérifier le `content` dans `tailwind.config.js`

### Images non chargées
Vérifier le chemin dans `assets/images/`

## 📄 Licence

© 2025 Power Energy Solutions. Tous droits réservés.

## 👥 Contact

**Power Energy Solutions**
- 📍 Hann Maristes Villa D29, Coopération BHS, Dakar, Sénégal
- 📞 +221 77 648 45 35
- 📧 contact@powerenergysolutions.com

## 🔄 Mises à jour futures

### Phase 2
- [ ] Intégration blog
- [ ] Galerie projets interactif
- [ ] Espace client
- [ ] Multi-langue (FR/EN)
- [ ] Mode sombre
- [ ] PWA

### Phase 3
- [ ] Dashboard admin
- [ ] Système de devis en ligne
- [ ] Chat en direct
- [ ] Intégration CRM

## 📚 Ressources

- [Documentation Angular](https://angular.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [Guide TypeScript](https://www.typescriptlang.org/docs)
- [RxJS](https://rxjs.dev)

---

Développé avec ❤️ pour Power Energy Solutions
