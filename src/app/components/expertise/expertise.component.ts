import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

interface Expertise {
  title: string;
  value: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="expertise" class="section section-dark overflow-hidden relative">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 bg-grid opacity-10"></div>
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div class="container-custom relative z-10">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16" appScrollAnimation>
          <span class="text-secondary-400 font-semibold text-sm tracking-wider uppercase">
            Notre Excellence
          </span>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mt-4">
            Expertise & Certifications
          </h2>
          <p class="text-lg text-white/80 mt-6">
            Des standards de qualité internationaux pour des résultats exceptionnels
          </p>
        </div>

        <!-- Expertise Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div *ngFor="let item of expertiseItems; let i = index"
               class="text-center group"
               appScrollAnimation
               [animationDelay]="i * 100">
            <div class="relative inline-block mb-6">
              <!-- Icon container with glow effect -->
              <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <span class="text-4xl">{{ item.icon }}</span>
              </div>
              <!-- Glow effect on hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div class="text-4xl font-bold text-white mb-2">
              {{ item.value }}
            </div>
            <div class="text-xl font-display font-semibold text-white/90 mb-2">
              {{ item.title }}
            </div>
            <p class="text-white/60 text-sm">
              {{ item.description }}
            </p>
          </div>
        </div>

        <!-- Certifications & Standards -->
        <div class="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-12" appScrollAnimation>
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-3xl font-display font-bold text-white mb-6">
                Certifications & Normes
              </h3>
              <div class="space-y-4">
                <div *ngFor="let cert of certifications" 
                     class="flex items-start space-x-4 group cursor-pointer">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-500/20 flex items-center justify-center group-hover:bg-secondary-500/30 transition-colors">
                    <svg class="w-6 h-6 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-white font-semibold mb-1">{{ cert.name }}</h4>
                    <p class="text-white/60 text-sm">{{ cert.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <h3 class="text-3xl font-display font-bold text-white mb-6">
                Outils & Technologies
              </h3>
              
              <!-- Tools badges -->
              <div class="flex flex-wrap gap-3">
                <div *ngFor="let tool of tools"
                     class="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
                  {{ tool }}
                </div>
              </div>

              <!-- Key capabilities -->
              <div class="mt-8 space-y-3">
                <div *ngFor="let capability of capabilities"
                     class="flex items-center space-x-3 text-white/80">
                  <svg class="w-5 h-5 text-secondary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>{{ capability }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-16" appScrollAnimation>
          <h3 class="text-2xl md:text-3xl font-display font-bold text-white mb-6">
            Prêt à démarrer votre projet énergétique ?
          </h3>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" class="btn-accent">
              Demander un devis
            </a>
            <a href="#services" class="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
              Voir nos services
            </a>
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
export class ExpertiseComponent {
  expertiseItems: Expertise[] = [
    {
      title: 'Années d\'expérience',
      value: '10+',
      description: 'Dans le secteur énergétique africain',
      icon: '⚡'
    },
    {
      title: 'Projets réalisés',
      value: '100+',
      description: 'Installations réussies',
      icon: '🏗️'
    },
    {
      title: 'Taux de satisfaction',
      value: '98%',
      description: 'Clients satisfaits',
      icon: '⭐'
    },
    {
      title: 'Support',
      value: '24/7',
      description: 'Assistance technique continue',
      icon: '🛠️'
    }
  ];

  certifications = [
    {
      name: 'ISO 9001',
      description: 'Système de management de la qualité'
    },
    {
      name: 'Normes IEC',
      description: 'Conformité électrotechnique internationale'
    },
    {
      name: 'Certifications NF',
      description: 'Équipements certifiés aux normes françaises'
    },
    {
      name: 'Standards IEEE',
      description: 'Respect des standards techniques'
    }
  ];

  tools = [
    'AutoCAD',
    'SketchUp',
    'PCvue Canico',
    'SCADA',
    'PVsyst',
    'MATLAB',
    'ETAP',
    'Caneco BT'
  ];

  capabilities = [
    'Conception et modélisation 3D avancée',
    'Calculs de dimensionnement précis',
    'Simulations énergétiques complètes',
    'Supervision et monitoring en temps réel',
    'Optimisation des performances',
    'Support technique expert'
  ];
}
