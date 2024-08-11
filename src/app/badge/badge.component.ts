import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {

  badge1: number = 10;
  badge2: number = 25;

  increaseBadgeCount() {
    this.badge1++;
    this.badge2++;
  }

}
