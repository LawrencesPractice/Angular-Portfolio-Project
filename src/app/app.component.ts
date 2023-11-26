import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StickyHeaderComponent } from "./sticky-header/sticky-header.component";
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, StickyHeaderComponent, MainContentComponent, FooterComponent]
})
export class AppComponent {
  title = 'my-angular-project';
}
