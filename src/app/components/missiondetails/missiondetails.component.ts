import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../launch.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule]  // Add MatCardModule to imports array
})
export class MissiondetailsComponent implements OnInit {
  launch!: Launch;

  constructor(private route: ActivatedRoute, private spacexService: SpacexService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spacexService.getLaunchByFlightNumber(id).subscribe((data) => {
      this.launch = data;
    });
  }
}
