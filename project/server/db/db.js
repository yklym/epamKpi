const fs = require("fs.promised");
let db_uri = require("./../config").DB_URL;

const path = require("path");
db_uri = path.resolve(__dirname, "./db.json");

module.exports = class Db {
  static getAllPosts() {
    return fs.readFile(db_uri, "utf8").then((res) => {
      return JSON.parse(res).jobs;
    });
  }

  static getById(id) {
    return fs.readFile(db_uri, "utf8").then((res) => {
      return JSON.parse(res).jobs.find((el) => el.id == id);
    });
  }
};
