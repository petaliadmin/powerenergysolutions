import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { ScrollAnimationService } from '../services/scroll-animation.service';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() animationDelay: number = 0;

  constructor(
    private el: ElementRef,
    private scrollService: ScrollAnimationService
  ) {}

  ngOnInit(): void {
    // Ajouter la classe d'animation
    this.el.nativeElement.classList.add('animate-on-scroll');
    
    // Appliquer le délai si spécifié
    if (this.animationDelay > 0) {
      this.el.nativeElement.style.transitionDelay = `${this.animationDelay}ms`;
    }

    // Observer l'élément
    this.scrollService.observeElement(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.scrollService.unobserveElement(this.el.nativeElement);
  }
}
