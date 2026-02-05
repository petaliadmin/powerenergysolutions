import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark-500 via-dark-600 to-dark-700">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 bg-grid opacity-30"></div>
      
      <!-- Animated gradient orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>

      <!-- Content -->
      <div class="container-custom relative z-10 py-32">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-8 animate-fade-in-up">
            <!-- Badge -->
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <svg class="w-5 h-5 mr-2 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
              </svg>
              Solutions Énergétiques Innovantes
            </div>

            <!-- Main Heading -->
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
              Ingénierie et Solutions
              <span class="block mt-2 gradient-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">
                Pour l'Afrique de Demain
              </span>
            </h1>

            <!-- Description -->
            <p class="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Expert en conception, réalisation et maintenance de systèmes énergétiques. 
              Nous fournissons des équipements de haute qualité conformes aux normes internationales.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" class="btn-accent group">
                Démarrer un projet
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#services" class="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                Découvrir nos services
              </a>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div class="text-center lg:text-left">
                <div class="text-3xl md:text-4xl font-bold text-white">10+</div>
                <div class="text-sm text-white/60 mt-1">Années d'expérience</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-3xl md:text-4xl font-bold text-white">100+</div>
                <div class="text-sm text-white/60 mt-1">Projets réalisés</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-3xl md:text-4xl font-bold text-white">98%</div>
                <div class="text-sm text-white/60 mt-1">Satisfaction client</div>
              </div>
            </div>
          </div>

          <!-- Visual Content -->
          <div class="relative animate-fade-in" style="animation-delay: 0.3s;">
            <!-- Main card with image -->
            <div class="relative rounded-3xl overflow-hidden shadow-energy-lg">
              <div class="aspect-square bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=800&fit=crop&q=80"
                  alt="Installation de panneaux solaires photovoltaïques - Power Energy Solutions"
                  class="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <!-- Gradient overlay for text readability -->
              <div class="absolute inset-0 bg-gradient-to-t from-dark-700/50 via-transparent to-transparent"></div>
              <!-- Bottom text overlay -->
              <div class="absolute bottom-6 left-6 right-6">
                <p class="text-white font-semibold text-lg drop-shadow-lg">
                  Excellence en ingénierie énergétique
                </p>
              </div>
              <!-- Decorative elements -->
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-accent-500 rounded-full opacity-20 blur-2xl"></div>
              <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-2xl"></div>
            </div>

            <!-- Floating badges -->
            <div class="absolute -left-8 top-1/4 animate-float">
              <div class="px-6 py-3 rounded-xl bg-white shadow-card-hover backdrop-blur-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center">
                    <svg class="w-6 h-6 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500">Certification</div>
                    <div class="text-sm font-semibold text-dark-700">ISO 9001</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="absolute -right-8 bottom-1/4 animate-float" style="animation-delay: 1s;">
              <div class="px-6 py-3 rounded-xl bg-white shadow-card-hover backdrop-blur-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500">Garantie</div>
                    <div class="text-sm font-semibold text-dark-700">5 ans</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-white/60 hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeroComponent {}
