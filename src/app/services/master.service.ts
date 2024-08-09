import { Injectable } from '@angular/core';
import { ColorEntity } from '../entities/ColorEntity';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  GetColorList(): ColorEntity[] {
    return [
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'Black' },
      { code: 'c5', name: 'Gray' },
      { code: 'c6', name: 'Light Gray' },
    ]
  }

}
