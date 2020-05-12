import axios from "axios";


export default class DataFetcher {

getGenres() {
    axios.get("http://localhost:8080/genres").then(result => {
        return result.data;
    });
}}