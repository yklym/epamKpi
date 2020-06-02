class FavouritesService {
  constructor() {
    if (!localStorage.getItem("jobsFavourites")) {
      localStorage.setItem("jobsFavourites", JSON.stringify([]));
    }
  }

  add(newItem) {
    const prevList = this.getAll();
    prevList.push(newItem);
    localStorage.setItem("jobsFavourites", JSON.stringify(prevList));
  }

  delete(id) {
    localStorage.setItem(
      "jobsFavourites",
      JSON.stringify(this.getAll().filter((el) => el.id !== id))
    );
  }

  check(id) {
    return !!this.getAll().find((el) => el.id == id);
  }

  getAll() {
    return JSON.parse(localStorage.getItem("jobsFavourites"));
  }
}

const service = new FavouritesService();

export default service;
