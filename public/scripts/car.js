import carsData from "../data/cars.json" assert { type: "json" };

class Car {
  /* When this function called, it would get all of the students data and can be consumed in the frontend view */
  getAllCars() {
    return carsData;
  }

  searchCars(search) {
    const searchedCars = carsData.filter(
      (car) =>
        car.availableAt.includes(search) ||
        car.capacity.includes(search)
    );
    return searchedCars;
  }
}

export default new Car();
