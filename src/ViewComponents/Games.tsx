import React from "react";
import Game from "../ViewComponents/Game";
import DataFetcher from "../Services/DataFetcher";

interface GamesProps {}

interface GamesState {
  games: any[];
}

export default class Games extends React.Component<GamesProps, GamesState> {
  fetcher: DataFetcher;

  constructor(props: any) {
    super(props);
    this.fetcher = new DataFetcher();
    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    this.fetcher.getGames().then((result: any) => {
      this.setState({
        games: result.data,
      });
    });
  }

  mapGames() {
    let mappedGames: any[] = [];
    if (this.state !== null && this.state.games !== null) {
      console.log(this.state.games);
      mappedGames = this.state.games.map((game) => {
        return (
          <Game
            key={game.id}
            id={game.id}
            title={game.title}
            yearPublished={game.yearPublished}
            suggestedPrice={game.suggestedPrice}
            rated={game.rated}
            viewed={game.viewed}
            genres={game.genres}
          />
        );
      });
    }
    return mappedGames;
  }

  render() {
    return <>{this.mapGames()}</>;
  }
}
