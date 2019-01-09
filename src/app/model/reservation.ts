
export class PassengerSeatAssignment {
  aircraftSeatRow: number;
  aircraftSeatColumn: number;
}

export class Passenger {
  firstName: string;
  lastName: string;
  aircraftSeatAssignment: PassengerSeatAssignment;
}

export class AircraftSeat {
  aircraftSeatRow: number;
  aircraftSeatColumn: number;
  text = 'X';
}

export class Reservation {
  id: number;
  passengers: Passenger[];
  aircraftSeats: AircraftSeat[][];

  constructor() {
    this.passengers = [];
  }
}

export enum ReservationSearchStatus {
  SUCCESS = 1,
  FAILURE
}

export class ReservationSearchResults {
  status: ReservationSearchStatus;
  reservation?: Reservation;
}
