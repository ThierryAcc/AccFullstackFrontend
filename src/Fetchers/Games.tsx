import React from 'react';
import Game from '../Components/Game';
import axios from "axios";

interface GamesProps {
}

interface GamesState {
    games: any[];
}

export default class Games extends React.Component<GamesProps, GamesState>  {
    constructor(props: any) {
        super(props);
        this.state = {
            games: []
        }
    }

    readGames() {
        axios.get("http://localhost:8080/games").then(result => {
            this.setState({
                games: result.data
            });
        });
    }

    componentDidMount() {
        this.readGames();
    }

    render() {
        let games: any[] = [];
        if (this.state !== null && this.state.games !== null) {
            games =
                this.state.games.map(game => {
                    return <Game key={game.id} id={game.id} name={game.name} yearPublished={game.yearPublished} suggestedPrice={game.suggestedPrice} rated={game.rated} viewed={game.viewed} genres={game.genres} />;
                });
        }

        return <>
            {games}
        </>
    }
}