import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isSearchVisible = false;
  isMenuVisible = false;

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  clearSearch(inputElement: HTMLInputElement) {
    inputElement.value = '';
  }
}
