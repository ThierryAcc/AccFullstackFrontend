import React from "react";
import Genre from "./Genre";
import DataFetcher from "../Services/DataFetcher";

interface GenresProps {}

interface GenresState {
  genres: any[];
}

export default class Genres extends React.Component<GenresProps, GenresState> {
  fetcher: DataFetcher;

  constructor(props: any) {
    super(props);
    this.fetcher = new DataFetcher();

    this.state = {
      genres: [],
    };
  }

  componentDidMount() {
    this.fetcher.getGenres().then((result: any) => {
      this.setState({
        genres: result.data,
      });
    });
  }

  mapGenres() {
    let mappedGenres: any[] = [];
    if (this.state !== null && this.state.genres !== null) {
      mappedGenres = this.state.genres.map((genre) => {
        return <Genre key={genre.id} id={genre.id} name={genre.name} />;
      });
    }
    return mappedGenres;
  }

  render() {
    return <>{this.mapGenres()}</>;
  }
}
