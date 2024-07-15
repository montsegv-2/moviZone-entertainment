import { Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'favorites', component: FavoritesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
];
