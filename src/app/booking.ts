import { AddPassengerDto } from './passenger';
export class AddBookingDto {
    departFlightScheduleId: number;
    returnFlightScheduleId: number;
    userId: number;
    noOfPassengers: number;
    passengersDetails: AddPassengerDto[] = [];
    amount: any;
    fclass: any;
}