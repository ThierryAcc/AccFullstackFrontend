import React from 'react';

interface GenreProps {
    id: string;
    name: string;
}

interface GenreState {
}

export default class Genre extends React.Component<GenreProps, GenreState>  {
    render() {
      return <div>
          {this.props.id} - {this.props.name}
      </div>
    }
  }