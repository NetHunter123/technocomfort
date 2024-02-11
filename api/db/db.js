const typeorm = require("typeorm")
const path = require("path")

const dataSource = new typeorm.DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Vick03322475",
  database: "mydb",
  // synchronize: true,
  // logging: true,
  entities: [path.join(__dirname,"","entities/**/*.js")],


  // type: "mysql",
  // host: "localhost",
  // port: 3306,
  // username: "test",
  // password: "test",
  // database: "test", 
})

module.exports = dataSource;

