import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';  // Import MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field';  // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input';  // Import MatInputModule for inputs inside mat-form-field
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
  standalone: true,
  imports: [CommonModule,MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],  // Add FormsModule here
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<string>();
  year: string = '';

  filterMissions() {
    this.yearSelected.emit(this.year);
  }
}
