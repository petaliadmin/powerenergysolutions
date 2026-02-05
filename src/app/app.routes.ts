import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Power Energy Solutions - Ingénierie et Solutions Énergétiques pour l\'Afrique'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
