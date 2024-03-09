import { Sequelize } from "sequelize";

class SequelizeConnect {
  constructor(databaseName, username, password, host, dialect) {
    this.databaseName = databaseName;
    this.username = username;
    this.password = password;
    this.host = host;
    this.dialect = dialect;
  }

  connect() {
    const sequelize = this.build();

    sequelize.authenticate().then(function () {
      console.log('Successfully with success');
    }).catch(function (error) {
      console.log('Failed when try to connect.');
    });

    return sequelize;
  }

  build() {
    const sequelize = new Sequelize(
      this.databaseName,
      this.username,
      this.password, {
        host: this.host,
        dialect: this.dialect,
      }
    );

    return sequelize;
  }
}

export default SequelizeConnect;