const database = {
  development: {
    username: "root",
    password: "130897",
    database: "todo_list_db",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: "130897",
    database: "todo_list_db",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: "130897",
    database: "todo_list_db",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
}

module.exports = database[process.env.NODE_ENV || 'development'];
