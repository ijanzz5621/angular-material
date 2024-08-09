import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../Material.Module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
 
@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    AsyncPipe,
    ReactiveFormsModule
  ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent implements OnInit {
  
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three']
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue))
  }

}
