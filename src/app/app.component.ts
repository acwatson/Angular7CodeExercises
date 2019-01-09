import {Component} from '@angular/core';
import {AircraftSeat, Passenger, Reservation, ReservationSearchStatus} from './model/reservation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seat Assignment UI';
  status: ReservationSearchStatus;
  reservationSearchId: string;
  reservation: Reservation;
  selectedPassenger: Passenger;

  constructor() {

    // TODO Remove this code and wait until the user searches before displaying a reservation
    this.status = ReservationSearchStatus.SUCCESS;
    this.reservation = this.getAllMockReservations()[0];
  }

  // TODO Remove this method. Create a separate Angular service that will return search results.
  // Angular service API should look like this:
  // getReservationById(id: string): Observable<ReservationSearchStatus>
  getAllMockReservations(): Reservation[] {

    const allReservations: Reservation[] = [];

    const passenger1 = new Passenger();
    passenger1.firstName = 'Frank';
    passenger1.lastName = 'Passenger';

    const passenger2 = new Passenger();
    passenger2.firstName = 'Happy';
    passenger2.lastName = 'Traveler';

    const reservation1 = new Reservation();
    reservation1.id = 1;
    reservation1.passengers.push(passenger1);
    reservation1.passengers.push(passenger2);

    reservation1.aircraftSeats = [];
    for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
      const aircraftSeatColumns = [];
      reservation1.aircraftSeats.push(aircraftSeatColumns);
      for (let colIndex = 0; colIndex < 2; colIndex++) {
        const aircraftSeat = new AircraftSeat();
        aircraftSeat.aircraftSeatRow = rowIndex + 1;
        aircraftSeat.aircraftSeatColumn = colIndex + 1;
        aircraftSeatColumns.push(aircraftSeat);
      }
    }

    const passenger3 = new Passenger();
    passenger3.firstName = 'Smart';
    passenger3.lastName = 'Guy';

    const passenger4 = new Passenger();
    passenger4.firstName = 'Pleasant';
    passenger4.lastName = 'Person';

    const reservation2 = new Reservation();
    reservation2.id = 2;
    reservation2.passengers.push(passenger1);
    reservation2.passengers.push(passenger2);

    reservation2.aircraftSeats = [];
    for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
      const aircraftSeatColumns = [];
      reservation2.aircraftSeats.push(aircraftSeatColumns);
      for (let colIndex = 0; colIndex < 2; colIndex++) {
        const aircraftSeat = new AircraftSeat();
        aircraftSeat.aircraftSeatRow = rowIndex + 1;
        aircraftSeat.aircraftSeatColumn = colIndex + 1;
        aircraftSeatColumns.push(aircraftSeat);
      }
    }

    allReservations.push(reservation1);
    allReservations.push(reservation2);
    return allReservations;
  }

  searchForReservationId() {
    console.log(`User searched for reservation id ${this.reservationSearchId}`);

    // TODO Call a service to get search results
    this.status = ReservationSearchStatus.FAILURE;
    this.reservation = null;
  }

  isFailedSearch(): boolean {
    return ReservationSearchStatus.FAILURE === this.status;
  }

  seatClicked(rowIndex: number, columnIndex: number): void {
    console.log(`Seat clicked - row: ${rowIndex + 1}, column: ${columnIndex + 1}`);


    // HINT - the 'reservation' property of this instance contains all of the passengers that need to
    // be assigned seats.It also contains the aircraft seat objects. The following functionality should
    // read and update the reservation object. It should also make use of the 'selectedPassenger' property.

    // TODO seatClicked #1
    // Do nothing and return if the selected passenger is null

    // TODO seatClicked #2
    // Reset the seat text to 'X' if the selectedPassenger was already assigned to a different seat before the click happened

    // TODO seatClicked #3
    // Clear the seat data from the former occupant of the seat, if the seat was already assigned to a different passenger
    // before the click happened

    // TODO seatClicked #4
    // Set seat text to 'P' for the seat that was clicked

    // TODO seatClicked #5
    // Assign seat location data to selected passenger

  }

}
