import axios from "axios";
import Genre from "../ViewComponents/Genre";
import Game from "../ViewComponents/Game";
import DataFetcher from "./DataFetcher";

export default class DataMocker {
  fetcher: DataFetcher;
  constructor() {
    this.fetcher = new DataFetcher();
  }

  mockGames(
    title: String,
    yearPublished: number,
    suggestedPrice: number,
    genres: any,
    rated: String,
    viewed: number
  ) {
    axios
      .post("http://localhost:8080/games", {
        title: title,
        yearPublished: yearPublished,
        suggestedPrice: suggestedPrice,
        genres: genres,
        rated: rated,
        viewed: viewed,
      })
      .then(function (response: any) {
        return response.data;
      })
      .catch(function (error: any) {
        return error;
      });
  }

  mockGenres(name: String) {
    axios
      .post("http://localhost:8080/genres", {
        name: name,
      })
      .then(function (response: any) {
        return response.data;
      })
      .catch(function (error: any) {
        return error;
      });
  }

  // SERVER HAS TO BE RUNNING
  mockData() {
    this.mockGenres("RPG");
    this.mockGenres("ACTION");
    this.mockGenres("HORROR");
    this.mockGenres("ADVENTURE");

    let genres: any[] = [];
    this.fetcher.getGenres().then((result: any) => {
      genres = result.data;
      this.mockGames("COD", 2020, 99, genres[0], "FSK18", 0);
      this.mockGames("FFV", 2020, 79, genres[1], "FSK12", 0);
      this.mockGames("Dragon Age", 2016, 39, genres[2], "FSK16", 0);
    });
  }
}
