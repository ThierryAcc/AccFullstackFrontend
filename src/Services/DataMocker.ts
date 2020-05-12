import axios from "axios";
import Genre from '../Components/Genre';
import Game from '../Components/Game';
import DataFetcher from "./DataFetcher";


export default class DataMocker {
    fetcher: DataFetcher;
    constructor() {
        this.fetcher = new DataFetcher();
    }
    
mockGames(id: number, name: string, yearPublished: number, suggestedPrice: number, rated: string, viewed: number, genres: any[]) {
        axios.post('http://localhost:8080/games', {
            id: id,
            name: name,
            yearPublished: yearPublished,
            suggestedPrice: suggestedPrice,
            rated:rated,
            viewed: viewed,
            genres: genres
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}

mockGenres(id: number, name: string) {
    axios.post('http://localhost:8080/genres', {
        id: id,
        name: name
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });  
}

 mockData() {
    this.mockGenres(1, "RPG");
    this.mockGenres(2, "ACTION");
    this.mockGenres(3, "HORROR");
    this.mockGenres(4, "ADVENTURE");

    let genres = this.fetcher.getGenres();

    if(genres!== null) {
        this.mockGames(1, "COD", 2020, 99, "FSK18", 0, genres[0]);
        this.mockGames(2, "FFX", 2020, 79, "FSK12", 0, genres[1]);
    }

}

}