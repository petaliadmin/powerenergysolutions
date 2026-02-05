import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observer: IntersectionObserver | null = null;
  
  // Signal pour suivre les éléments visibles
  visibleElements = signal<Set<Element>>(new Set());

  initializeObserver(): void {
    if (typeof window === 'undefined') return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.visibleElements.update(set => {
            set.add(entry.target);
            return new Set(set);
          });
        }
      });
    }, options);
  }

  observeElement(element: Element): void {
    if (this.observer) {
      this.observer.observe(element);
    }
  }

  unobserveElement(element: Element): void {
    if (this.observer) {
      this.observer.unobserve(element);
    }
  }

  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
