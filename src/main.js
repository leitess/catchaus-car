import Car from "./modules/Car.js";

(async function init() {
  const car = new Car(
    "data_mining",
    "root",
    "A8zZ6UaM2kjCZDNEGakdAO5YcmvnEhLY",
    "192.168.1.12",
    "mysql",
    "./src/data/automoveis.json"
  );
  // car.syncTable();
  // await car.populate();
}())