import { readFile } from 'fs/promises';
import { STRING } from "sequelize";
import SequelizeConnect from "../config/SequelizeConnect.js"; 

class Car {
  constructor(
    databaseName, 
    username, 
    password, 
    host, 
    dialect,
    data
  ) {
    this.databaseName = databaseName;
    this.username = username;
    this.password = password;
    this.host = host;
    this.dialect = dialect;
    this.data = data;
  }

  schema() {
    const connect = new SequelizeConnect(
      this.databaseName,
      this.username,
      this.password,
      this.host,
      this.dialect, 
    );
    const sequelize = connect.build();
    const cars = sequelize.define('automoveis', {
     MARCA: {
      type: STRING,
     },
     CAMBER_DIANTEIRO_MIN: {
      type: STRING,
     },
     CARRO: {
      type: STRING,
     },
     CAMBER_DIANTEIRO_MAX: {
      type: STRING,
     },
     CASTER_DIANTEIRO_MIN: {
      type: STRING,
     },
     CASTER_DIANTEIRO_MAX: {
      type: STRING,
     },
     CONVERGENCIA_DIANTEIRA_MIN: {
      type: STRING,
     },
     CONVERGENCIA_DIANTEIRA_MAX: {
      type: STRING,
     },
     CAMBER_TRASEIRA_MIN: {
      type: STRING,
     },
     CAMBER_TRASEIRA_MAX: {
      type: STRING,
     },
     CONVERGENCIA_TRASEIRA_MIN: {
      type: STRING,
     },
     CONVERGENCIA_TRASEIRA_MAX: {
      type: STRING,
     }
    });
    
    return cars;
  }

  async populate() {
    const carsToSave = JSON.parse(await readFile(this.data, "utf8"));
    const carTable = this.schema();
    console.log(`Total of cars are ${carsToSave.automoveis.length}`);
    carTable.bulkCreate(carsToSave.automoveis, { ignoreDuplicates: true, }).then(() => console.log("Cars data have been saved"));
  }


  syncTable() {
    const cars = this.schema();

    cars.sync({ force: true });
  }

}

export default Car;