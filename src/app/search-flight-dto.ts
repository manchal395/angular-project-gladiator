import { DatePipe } from '@angular/common';

export class SearchFlightDto {
    source: string;
    destination: string;
    depart: any;
    arrive: any;
    noOfPassengers: number;
    fclass: string;
}