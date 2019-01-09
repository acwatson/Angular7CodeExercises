import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import {AircraftSeat, Passenger, Reservation} from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  getReservation(): Observable<Reservation> {
    const passenger1 = new Passenger();
    passenger1.firstName = 'Frank';
    passenger1.lastName = 'Passenger';

    const passenger2 = new Passenger();
    passenger2.firstName = 'Happy';
    passenger2.lastName = 'Traveler';

    const reservation = new Reservation();
    reservation.passengers.push(passenger1);
    reservation.passengers.push(passenger2);

    reservation.aircraftSeats = [];
    for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
      const aircraftSeatColumns = [];
      reservation.aircraftSeats.push(aircraftSeatColumns);
      for (let colIndex = 0; colIndex < 2; colIndex++) {
        const aircraftSeat = new AircraftSeat();
        aircraftSeat.aircraftSeatRow = rowIndex + 1;
        aircraftSeat.aircraftSeatColumn = colIndex + 1;
        aircraftSeatColumns.push(aircraftSeat);
      }
    }

    return observableOf(reservation);
  }
}
