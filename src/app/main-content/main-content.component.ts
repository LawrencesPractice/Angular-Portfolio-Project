import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBoxComponent } from '../main-box/main-box.component';
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, MainBoxComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
