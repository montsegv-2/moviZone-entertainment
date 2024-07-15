import { Routes } from '@angular/router';
import { CardDetailComponent } from './card-detail/card-detail.component';

export const CARD_ROUTES: Routes = [
  { path: 'card-detail', component: CardDetailComponent },
  { path: 'carrousel', component: CardDetailComponent },
];
