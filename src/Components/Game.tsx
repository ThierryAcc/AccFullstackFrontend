import React from 'react';
import Genre from './Genre';

interface GameProps {
    id: number;
    name: string;
    yearPublished: number;
    suggestedPrice: number;
    rated: string;
    viewed: number;
    genres: Genre[];
}

interface GameState {
}

export default class Game extends React.Component<GameProps, GameState>  {


    render() {
      return <div>
          {this.props.id} - {this.props.name} - {this.props.yearPublished} - {this.props.suggestedPrice} - {this.props.rated} - {this.props.viewed} 

      </div>
    }
  }