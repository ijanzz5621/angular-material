import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../Material.Module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MasterService } from '../services/master.service';
import { ColorEntity } from '../entities/ColorEntity';
 
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
  filteredOptions: Observable<ColorEntity[]> | undefined;

  colorArrayList!:ColorEntity[];
  constructor(private service: MasterService) {
    this.colorArrayList = this.service.GetColorList()
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._listFilter(value || ''))
    );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.options.filter(option => option.toLowerCase().includes(filterValue))
  // }

  private _listFilter(value: string): ColorEntity[] {
    const filterValue = value.toLowerCase();
    return this.colorArrayList.filter(option => option.name.toLowerCase().includes(filterValue))
  }

}
