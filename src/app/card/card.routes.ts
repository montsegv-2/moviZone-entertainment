import { Routes } from '@angular/router';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CardComponent } from './card/card.component';

export const CARD_ROUTES: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'carrousel', component: CarrouselComponent },
];
