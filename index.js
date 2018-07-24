store = {drivers: [], passengers: [], trips: []};
driverId = 0;
passengerId = 0;
tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(tr => tr.driverId === this.id);
  }

  passengers() {
    return this.trips().map(trip => {return trip.passenger()});
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(tr => tr.passengerId === this.id);
  }

  drivers() {
    return this.trips().map(tr => {return tr.driver()})
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  passenger(){
    return store.passengers.find(pass => pass.id === this.passengerId);
  }

  driver(){
    return store.drivers.find(dr => dr.id === this.driverId);
  }
}
