import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sticky-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sticky-header.component.html',
  styleUrl: './sticky-header.component.scss'
})
export class StickyHeaderComponent {
  isSelected = false; 
  isHovered = false; 

}
