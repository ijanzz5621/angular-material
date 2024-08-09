import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { InputComponent } from './input/input.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SelectComponent } from "./select/select.component";
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputComponent,
    ToggleComponent,
    SelectComponent,
    AutocompleteComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material';
}
