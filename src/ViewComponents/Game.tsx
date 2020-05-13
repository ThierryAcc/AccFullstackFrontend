import React from "react";
import Genre from "./Genre";

interface GameProps {
  id: number;
  title: string;
  yearPublished: number;
  suggestedPrice: number;
  genres: any[];
  rated: string;
  viewed: number;
}

interface GameState {}

export default class Game extends React.Component<GameProps, GameState> {
  render() {
    return (
      <div>
        {this.props.id} - {this.props.title} - {this.props.yearPublished} -{" "}
        {this.props.suggestedPrice} - {this.props.rated} - {this.props.viewed}
      </div>
    );
  }
}
