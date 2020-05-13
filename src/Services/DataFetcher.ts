import axios from "axios";

export default class DataFetcher {
  getGenres(): any {
    return axios.get("http://localhost:8080/genres");
  }

  getGames(): any {
    return axios.get("http://localhost:8080/games");
  }
}
