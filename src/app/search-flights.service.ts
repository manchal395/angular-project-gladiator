import { FetchedFlightsDto } from './fetched-flights-dto';
import { Observable } from 'rxjs';
import { SearchFlightDto } from './search-flight-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchFlightsService {

  constructor(private http: HttpClient) { }

  searchFlights(searchdto: SearchFlightDto) : Observable<FetchedFlightsDto> {
    const url = 'http://localhost:7001/searchFlights';
    return this.http.post<FetchedFlightsDto>(url, searchdto);
  }

}
