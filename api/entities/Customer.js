const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
  name: "Customer", // Will use table name `category` as default behaviour.
  tableName: "Customers", // Optional: Provide `tableName` property to override the default behaviour for table name.
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
})
