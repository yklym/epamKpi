import { serverUrl } from "../config/config";

class JobService {
  constructor() {
    this.jobs = [];
  }

  loadJobs() {
    return fetch(serverUrl + `/job`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((parsedRes) => {
        this.jobs = parsedRes;
        return this.jobs;
      });
  }

  getPage(pageNumber = 1, pageSize = 0, filters = {}) {
    pageNumber = Math.max(0, pageNumber - 1);
    let startIndex = pageNumber * pageSize;
    if (startIndex > this.jobs.length) {
      startIndex = this.jobs.length - pageSize;
    }
    const slicedArr = this.jobs.slice(startIndex, startIndex + pageSize);
    return slicedArr;
  }

  getPagesCount(pageSize = 0, filters = {}) {
    return Math.ceil(this.jobs.length / pageSize);
  }

  loadJobById(id) {
    return fetch(serverUrl + `/job/${id}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((parsedRes) => {
        return parsedRes;
      });
  }
}

const service = new JobService();

export default service;
