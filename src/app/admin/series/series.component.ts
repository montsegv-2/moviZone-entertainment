import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {}
