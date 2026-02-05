import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.bg-white-95]="isScrolled()"
      [class.backdrop-blur-lg]="isScrolled()"
      [class.shadow-lg]="isScrolled()"
      [class.py-4]="isScrolled()"
      [class.py-6]="!isScrolled()"
    >
      <nav class="container-custom">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a href="#" class="flex items-center space-x-3 group">
            <div class="relative">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="absolute -inset-1 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-display font-bold leading-none transition-colors duration-300"
                    [class]="isScrolled() ? 'text-dark-700' : 'text-white'">POWER</span>
              <span class="text-xs font-semibold tracking-wider transition-colors duration-300"
                    [class]="isScrolled() ? 'text-primary-500' : 'text-secondary-400'">ENERGY SOLUTIONS</span>
            </div>
          </a>

          <!-- Navigation Desktop -->
          <div class="hidden lg:flex items-center space-x-8">
            <a *ngFor="let item of navItems"
               [href]="item.href"
               class="font-medium transition-colors duration-300 relative group"
               [class]="isScrolled() ? 'text-dark-600 hover:text-primary-500' : 'text-white/90 hover:text-white'">
              {{ item.label }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    [class]="isScrolled() ? 'bg-primary-500' : 'bg-white'"></span>
            </a>
          </div>

          <!-- CTA Button -->
          <div class="hidden lg:block">
            <a href="#contact" class="btn-primary">
              Nous contacter
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMenu()"
            class="lg:hidden p-2 transition-colors"
            [class]="isScrolled() ? 'text-dark-600 hover:text-primary-500' : 'text-white hover:text-secondary-400'"
            [attr.aria-label]="mobileMenuOpen() ? 'Fermer le menu' : 'Ouvrir le menu'"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                *ngIf="!mobileMenuOpen()"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
              <path 
                *ngIf="mobileMenuOpen()"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          *ngIf="mobileMenuOpen()"
          class="lg:hidden mt-4 pb-4 animate-fade-in-down"
        >
          <div class="flex flex-col space-y-4">
            <a *ngFor="let item of navItems"
               [href]="item.href"
               (click)="closeMobileMenu()"
               class="text-dark-600 hover:text-primary-500 font-medium py-2 transition-colors">
              {{ item.label }}
            </a>
            <a href="#contact" 
               (click)="closeMobileMenu()"
               class="btn-primary text-center">
              Nous contacter
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#expertise' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
