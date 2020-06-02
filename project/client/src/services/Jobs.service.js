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

  getPage(pageNumber = 1, pageSize = 0, filters = null) {
    const jobsArr = applyFilters([...this.jobs], filters);
    pageNumber = Math.max(0, pageNumber - 1);
    let startIndex = pageNumber * pageSize;
    if (startIndex > jobsArr.length) {
      startIndex = jobsArr.length - pageSize;
    }
    const slicedArr = jobsArr.slice(startIndex, startIndex + pageSize);
    return slicedArr;
  }

  getPagesCount(pageSize = 0, filters = null) {
    const jobsArr = applyFilters([...this.jobs], filters);
    return Math.ceil(jobsArr.length / pageSize);
  }
}

function applyFilters(jobsArr, filters) {
  if (!filters) {
    return jobsArr;
  }
  if (filters.sortBy) {
    jobsArr.sort((elem, nextElem) => {
      const firstVal = elem[filters.sortBy] || elem.info[filters.sortBy];
      const secondVal =
        nextElem[filters.sortBy] || nextElem.info[filters.sortBy];
      if (parseInt(firstVal)) {
        return (
          (parseInt(secondVal) - parseInt(firstVal)) * (filters.reverse? -1 : 1)
        );
      } else {
        return firstVal.localeCompare(secondVal) * (filters.reverse? -1 : 1);
      }
    });
  }
  if (filters.filterBy instanceof Map) {
    filters.filterBy.forEach((value, key) => {
      jobsArr = jobsArr.filter(
        (el) => parseFloat(el.info[key]) >= parseFloat(value)
      );
    });
  }

  return jobsArr;
}

const service = new JobService();

export default service;
