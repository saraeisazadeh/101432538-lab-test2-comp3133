import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../launch.model';

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.baseUrl);
  }

  getLaunchesByYear(year: string): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.baseUrl}?launch_year=${year}`);
  }

  getLaunchByFlightNumber(flightNumber: number): Observable<Launch> {
    return this.http.get<Launch>(`${this.baseUrl}/${flightNumber}`);
  }
}
