import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

import { InputComponent } from './input/input.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SelectComponent } from "./select/select.component";
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputComponent,
    ToggleComponent,
    SelectComponent,
    AutocompleteComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material';
}
