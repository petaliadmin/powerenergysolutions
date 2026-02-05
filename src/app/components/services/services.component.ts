import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

interface Service {
  id: string;
  icon: string;
  iconPath: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  imageUrl: string;
  imageAlt: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="services" class="section bg-gradient-to-br from-gray-50 to-white">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16" appScrollAnimation>
          <span class="text-primary-500 font-semibold text-sm tracking-wider uppercase">
            Nos Prestations
          </span>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-dark-700 mt-4">
            Solutions Énergétiques Complètes
          </h2>
          <p class="text-lg text-dark-600 mt-6">
            De la conception à la maintenance, nous accompagnons vos projets énergétiques 
            avec expertise et innovation
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services; let i = index"
               class="bg-white rounded-2xl shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 overflow-hidden group cursor-pointer"
               appScrollAnimation
               [animationDelay]="i * 100">
            <!-- Card Image Header -->
            <div class="h-48 overflow-hidden"
                 [class]="'bg-gradient-to-br from-' + service.color + '-100 to-' + service.color + '-50'">
              <img
                [src]="service.imageUrl"
                [alt]="service.imageAlt"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            <div class="p-8">
              <!-- Icon -->
              <div class="mb-6 -mt-12 relative z-10">
                <div class="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 shadow-card"
                     [class]="'bg-' + service.color + '-100 group-hover:bg-' + service.color + '-500'">
                  <svg class="w-8 h-8 transition-colors duration-300"
                       [class]="'text-' + service.color + '-600 group-hover:text-white'"
                       fill="currentColor"
                       viewBox="0 0 20 20">
                    <path [attr.d]="service.iconPath" />
                  </svg>
                </div>
              </div>

              <!-- Content -->
              <h3 class="text-xl font-display font-bold text-dark-700 mb-3 transition-colors">
                {{ service.title }}
              </h3>

              <p class="text-dark-600 mb-4 leading-relaxed">
                {{ service.description }}
              </p>

              <!-- Features -->
              <ul class="space-y-2">
                <li *ngFor="let feature of service.features"
                    class="flex items-start text-sm text-dark-600">
                  <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                       [class]="'text-' + service.color + '-500'"
                       fill="currentColor"
                       viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>

              <!-- CTA Link -->
              <div class="mt-6 pt-6 border-t border-gray-100">
                <a href="#contact"
                   class="inline-flex items-center font-semibold transition-all group-hover:translate-x-2"
                   [class]="'text-' + service.color + '-600 hover:text-' + service.color + '-700'">
                  En savoir plus
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Modes d'intervention -->
        <div class="mt-20 pt-20 border-t border-gray-200">
          <div class="text-center max-w-3xl mx-auto mb-12" appScrollAnimation>
            <h3 class="text-3xl md:text-4xl font-display font-bold text-dark-700">
              Modes d'Intervention
            </h3>
            <p class="text-lg text-dark-600 mt-4">
              Nous adaptons notre approche à vos besoins spécifiques
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div *ngFor="let mode of interventionModes; let i = index"
                 class="card-glass group hover:shadow-energy"
                 appScrollAnimation
                 [animationDelay]="i * 150">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path [attr.d]="mode.iconPath" />
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold text-dark-700 mb-2">
                    {{ mode.title }}
                  </h4>
                  <p class="text-dark-600 text-sm leading-relaxed">
                    {{ mode.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 'photovoltaic',
      icon: '☀️',
      iconPath: 'M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z',
      title: 'Systèmes Photovoltaïques',
      description: 'Études et conception complètes de centrales solaires avec optimisation des performances.',
      features: [
        'Analyse technique et économique',
        'Étude d\'implantation optimisée',
        'Dimensionnement BESS',
        'Estimation P50/P90'
      ],
      color: 'accent',
      imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=250&fit=crop&q=80',
      imageAlt: 'Panneaux solaires photovoltaïques'
    },
    {
      id: 'backup',
      icon: '⚡',
      iconPath: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
      title: 'Production & Backup',
      description: 'Installation de systèmes de production et de secours garantissant une alimentation continue.',
      features: [
        'Groupes électrogènes',
        'Onduleurs et batteries',
        'Tableaux ATS et synchronisation',
        'Centrales en réseau iloté'
      ],
      color: 'primary',
      imageUrl: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=400&h=250&fit=crop&q=80',
      imageAlt: 'Groupe électrogène et systèmes de production'
    },
    {
      id: 'electrical',
      icon: '🔌',
      iconPath: 'M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z',
      title: 'Tableaux Électriques & GTC',
      description: 'Conception et réalisation de tableaux électriques avec systèmes de gestion technique centralisée.',
      features: [
        'Distribution industrielle et tertiaire',
        'Modélisation AutoCAD',
        'Supervision SCADA',
        'Automatisation complète'
      ],
      color: 'secondary',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=250&fit=crop&q=80',
      imageAlt: 'Tableau électrique et système de contrôle'
    },
    {
      id: 'automation',
      icon: '⚙️',
      iconPath: 'M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
      title: 'Instrumentation & Automatisme',
      description: 'Solutions d\'automatismes industriels pour optimiser production et performance.',
      features: [
        'Systèmes SCADA adaptés',
        'Optimisation des process',
        'Contrôle centralisé',
        'Monitoring en temps réel'
      ],
      color: 'primary',
      imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop&q=80',
      imageAlt: 'Salle de contrôle et automatismes industriels'
    },
    {
      id: 'ht-bt',
      icon: '⚡',
      iconPath: 'M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z',
      title: 'Solutions HT/BT',
      description: 'Fourniture et installation de solutions de transformation haute et basse tension.',
      features: [
        'Postes cabine transformateur',
        'Transformateurs sec et immergés',
        'Cellules modulaires SF6',
        'Câbles HTA et BT'
      ],
      color: 'accent',
      imageUrl: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400&h=250&fit=crop&q=80',
      imageAlt: 'Transformateurs et équipements haute tension'
    },
    {
      id: 'engineering',
      icon: '📐',
      iconPath: 'M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
      title: 'Ingénierie & Études',
      description: 'Expertise complète en ingénierie électrique et énergétique.',
      features: [
        'Calculs et modélisation',
        'Plans de fabrication',
        'Études de faisabilité',
        'Support technique expert'
      ],
      color: 'secondary',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop&q=80',
      imageAlt: 'Plans et études d\'ingénierie'
    }
  ];

  interventionModes = [
    {
      title: 'Assistance Technique',
      description: 'Support technique avec obligation de moyens pour vous accompagner dans vos projets.',
      iconPath: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
    },
    {
      title: 'Études de Type Plateau',
      description: 'Déploiement d\'offres et réalisation d\'études avec approche collaborative.',
      iconPath: 'M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
    },
    {
      title: 'Études au Forfait',
      description: 'Déploiement d\'offres et réalisation d\'études avec engagement sur résultat.',
      iconPath: 'M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
    }
  ];
}
