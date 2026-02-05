import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ExpertiseComponent } from '../../components/expertise/expertise.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ExpertiseComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <!-- Site disponible -->
    <div class="min-h-screen" *ngIf="siteAvailable; else maintenance">
      <app-header />
      <main>
        <app-hero />
        <app-about />
        <app-services />
        <app-expertise />
        <app-contact />
      </main>
      <app-footer />
    </div>

    <!-- Site en maintenance -->
    <ng-template #maintenance>
      <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-500 via-dark-600 to-dark-700 relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 bg-grid opacity-20"></div>
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>

        <div class="text-center px-6 relative z-10 max-w-2xl">
          <!-- Logo -->
          <div class="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center animate-energy-pulse">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <!-- Company name -->
          <h1 class="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Power Energy Solutions
          </h1>

          <!-- Maintenance message -->
          <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-500/20 flex items-center justify-center">
              <svg class="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p class="text-xl md:text-2xl text-white font-semibold mb-3">
              {{ maintenanceMessage }}
            </p>
            <p class="text-white/60">
              Nous travaillons pour vous offrir une meilleure expérience. Merci de votre patience.
            </p>
          </div>

          <!-- Contact info -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
            <a href="mailto:contact&#64;powerenergysolutions.com" class="flex items-center gap-2 hover:text-white transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact&#64;powerenergysolutions.com
            </a>
            <a href="tel:+221776484535" class="flex items-center gap-2 hover:text-white transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +221 77 648 45 35
            </a>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HomePageComponent implements OnInit, OnDestroy {
  // --- Paramètre de disponibilité du site ---
  // Mettre à false pour afficher la page de maintenance
  siteAvailable = false;
  maintenanceMessage = 'Site en cours de maintenance';

  constructor(private scrollService: ScrollAnimationService) {}

  ngOnInit(): void {
    // Initialiser l'observer pour les animations au scroll
    this.scrollService.initializeObserver();
  }

  ngOnDestroy(): void {
    // Nettoyer l'observer
    this.scrollService.disconnect();
  }
}
