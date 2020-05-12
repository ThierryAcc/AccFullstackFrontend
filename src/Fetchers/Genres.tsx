import React from 'react';
import Genre from '../Components/Genre';
import axios from "axios";
import DataFetcher from "../Services/DataFetcher";

interface GenresProps {
}

interface GenresState {
    genres: any[];
}

export default class Genres extends React.Component<GenresProps, GenresState>  {
    fetcher: DataFetcher;
    constructor(props:any) {
        super(props);
        this.fetcher = new DataFetcher();
        this.state = {
            genres: []
        }
    }

    componentDidMount() {

        this.fetcher.getGenres();
    }

    render() {
        let genres: any[] = [];
        if (this.state !== null && this.state.genres !== null) {
            genres = 
            this.state.genres.map(genre => {
            return <Genre key={genre.id} id={genre.id} name={genre.name}/>;
        });
    }

        return <>
            {genres}
        </>
    }
  }