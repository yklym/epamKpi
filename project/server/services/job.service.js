const Db = require("../db/db");

class JobSevice {

  getAll() {
    return Db.getAllPosts().then((jobsArr) => {
      return jobsArr;
    });
  }

  getById(id) {
    return Db.getById(id);
  }
}

module.exports = new JobSevice();
