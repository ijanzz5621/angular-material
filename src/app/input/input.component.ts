import { Component } from '@angular/core';
import { MaterialModule } from '../../Material.Module';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  value = 'Clear me';
}
