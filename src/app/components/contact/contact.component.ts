import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimationDirective],
  template: `
    <section id="contact" class="section bg-white">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16" appScrollAnimation>
          <span class="text-primary-500 font-semibold text-sm tracking-wider uppercase">
            Contactez-nous
          </span>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-dark-700 mt-4">
            Parlons de Votre Projet
          </h2>
          <p class="text-lg text-dark-600 mt-6">
            Notre équipe d'experts est à votre disposition pour répondre à vos besoins énergétiques
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="space-y-8" appScrollAnimation>
            <div>
              <h3 class="text-2xl font-display font-bold text-dark-700 mb-6">
                Informations de Contact
              </h3>
              
              <div class="space-y-6">
                <!-- Address -->
                <div class="flex items-start space-x-4 group">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <svg class="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-dark-700 mb-1">Adresse</h4>
                    <p class="text-dark-600">Hann Maristes Villa D29</p>
                    <p class="text-dark-600">Coopération BHS</p>
                    <p class="text-dark-600">Dakar, Sénégal</p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start space-x-4 group">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center group-hover:bg-secondary-500 transition-colors">
                    <svg class="w-6 h-6 text-secondary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-dark-700 mb-1">Téléphone</h4>
                    <a href="tel:+221776484535" class="text-dark-600 hover:text-primary-500 transition-colors">
                      +221 77 648 45 35
                    </a>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start space-x-4 group">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                    <svg class="w-6 h-6 text-accent-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-dark-700 mb-1">Email</h4>
                    <a href="mailto:contact@powerenergysolutions.com" class="text-dark-600 hover:text-primary-500 transition-colors break-all">
                      contact@powerenergysolutions.com
                    </a>
                  </div>
                </div>

                <!-- Hours -->
                <div class="flex items-start space-x-4 group">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <svg class="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-dark-700 mb-1">Horaires</h4>
                    <p class="text-dark-600">Lundi - Vendredi: 8h - 18h</p>
                    <p class="text-dark-600">Samedi: 9h - 13h</p>
                    <p class="text-secondary-600 font-medium mt-1">Support 24/7 disponible</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map image -->
            <div class="rounded-2xl overflow-hidden shadow-card h-64 relative bg-gradient-to-br from-primary-50 to-secondary-50">
              <img
                src="https://images.unsplash.com/photo-1572883454114-efcb2a78990a?w=800&h=400&fit=crop&q=80"
                alt="Vue aérienne de Dakar, Sénégal - Siège de Power Energy Solutions"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <!-- Location overlay badge -->
              <div class="absolute bottom-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-card flex items-center space-x-2">
                <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-dark-700 font-semibold text-sm">Hann Maristes, Dakar</span>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="card" appScrollAnimation [animationDelay]="200">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="space-y-6">
                <!-- Name -->
                <div>
                  <label for="name" class="block text-sm font-semibold text-dark-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    [(ngModel)]="formData.name"
                    required
                    class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                    placeholder="Jean Dupont"
                  />
                </div>

                <!-- Email & Phone -->
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="email" class="block text-sm font-semibold text-dark-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      [(ngModel)]="formData.email"
                      required
                      class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-semibold text-dark-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      [(ngModel)]="formData.phone"
                      required
                      class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                      placeholder="+221 XX XXX XX XX"
                    />
                  </div>
                </div>

                <!-- Company & Subject -->
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="company" class="block text-sm font-semibold text-dark-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      [(ngModel)]="formData.company"
                      class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                      placeholder="Nom de l'entreprise"
                    />
                  </div>
                  <div>
                    <label for="subject" class="block text-sm font-semibold text-dark-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      [(ngModel)]="formData.subject"
                      required
                      class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="devis">Demande de devis</option>
                      <option value="information">Demande d'information</option>
                      <option value="projet">Nouveau projet</option>
                      <option value="support">Support technique</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-sm font-semibold text-dark-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    [(ngModel)]="formData.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  [disabled]="!contactForm.form.valid || isSubmitting()"
                  class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span *ngIf="!isSubmitting()">Envoyer le message</span>
                  <span *ngIf="isSubmitting()" class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                </button>

                <p class="text-sm text-dark-500 text-center">
                  Vos données sont protégées et ne seront jamais partagées
                </p>
              </div>
            </form>
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
export class ContactComponent {
  isSubmitting = signal(false);
  
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  };

  onSubmit(): void {
    if (this.isSubmitting()) return;
    
    this.isSubmitting.set(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      alert('Merci pour votre message ! Nous vous contacterons dans les plus brefs délais.');
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      };
      
      this.isSubmitting.set(false);
    }, 1500);
  }
}
