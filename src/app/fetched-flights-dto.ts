export class FetchedFlightsDto {
    airlines: string;
    id: number;
    economy: DoubleRange;
    business: DoubleRange;
    source: string;
    destination: string;
    depart: any;
    arrive: any;
}