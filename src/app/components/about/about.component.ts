import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="about" class="section bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div class="space-y-6" appScrollAnimation>
            <div class="inline-block">
              <span class="text-primary-500 font-semibold text-sm tracking-wider uppercase">
                Qui sommes-nous
              </span>
              <div class="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mt-2 rounded-full"></div>
            </div>

            <h2 class="text-4xl md:text-5xl font-display font-bold text-dark-700">
              Power Energy Solutions
            </h2>

            <div class="space-y-4 text-lg text-dark-600 leading-relaxed">
              <p>
                <strong class="text-dark-700">Power Energy Solutions</strong> est une entreprise africaine spécialisée dans 
                les domaines de l'énergie, de l'ingénierie, et de la fourniture d'équipements industriels et tertiaires.
              </p>

              <p>
                Nous intervenons dans la <strong>conception, la réalisation et la maintenance</strong> de systèmes énergétiques, 
                ainsi que dans la fourniture d'équipements adaptés aux besoins des secteurs industriel et tertiaire.
              </p>

              <p>
                Nous fournissons des équipements de <strong>haute qualité, conformes aux normes internationales</strong>, 
                pour la production et la distribution d'énergie, ainsi que pour l'automatisation et le contrôle des installations.
              </p>

              <p>
                Grâce à notre support technique constitué d'<strong>ingénieurs et de techniciens expérimentés</strong>, 
                nous offrons une expertise complète avec une forte orientation vers l'optimisation énergétique et 
                l'amélioration des performances de vos installations.
              </p>
            </div>

            <!-- Key Points -->
            <div class="grid sm:grid-cols-2 gap-4 pt-6">
              <div *ngFor="let point of keyPoints; let i = index" 
                   class="flex items-start space-x-3"
                   appScrollAnimation
                   [animationDelay]="i * 100">
                <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p class="text-dark-700 font-semibold">{{ point.title }}</p>
                  <p class="text-sm text-dark-500 mt-1">{{ point.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative" appScrollAnimation [animationDelay]="300">
            <!-- Main image -->
            <div class="relative rounded-3xl overflow-hidden shadow-energy">
              <div class="aspect-[4/3] bg-gradient-to-br from-primary-50 to-secondary-50">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop&q=80"
                  alt="Équipe d'ingénieurs travaillant sur des systèmes électriques"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Stats cards -->
            <div class="absolute -bottom-8 -left-8 right-8 grid grid-cols-2 gap-4">
              <div class="card-glass text-center">
                <div class="text-3xl font-bold gradient-text">24/7</div>
                <div class="text-sm text-dark-600 mt-1">Support technique</div>
              </div>
              <div class="card-glass text-center">
                <div class="text-3xl font-bold gradient-text">100%</div>
                <div class="text-sm text-dark-600 mt-1">Conformité normes</div>
              </div>
            </div>

            <!-- Decorative elements -->
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-accent-500/20 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl"></div>
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
export class AboutComponent {
  keyPoints = [
    {
      title: 'Expertise Technique',
      description: 'Équipe qualifiée et expérimentée'
    },
    {
      title: 'Qualité Premium',
      description: 'Équipements haute performance'
    },
    {
      title: 'Normes Internationales',
      description: 'Conformité certifiée'
    },
    {
      title: 'Innovation Continue',
      description: 'Solutions modernes adaptées'
    }
  ];

}
