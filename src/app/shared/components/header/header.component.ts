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
  isModalVisible: boolean = false;
  isMenuVisible: boolean = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  showModal() {
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }

  clearSearch(inputElement: HTMLInputElement) {
    inputElement.value = '';
  }
  // showModal() {
  //   const modal = document.getElementById('popup-modal');
  //   if (modal) {
  //     modal.classList.remove('hidden');
  //   }
  // }

  // hideModal() {
  //   const modal = document.getElementById('popup-modal');
  //   if (modal) {
  //     modal.classList.add('hidden');
  //   }
  // }
}
