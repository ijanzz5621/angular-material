import { Component } from '@angular/core';
import { MaterialModule } from '../../Material.Module';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
