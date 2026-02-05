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
    <div class="min-h-screen">
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
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HomePageComponent implements OnInit, OnDestroy {
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
