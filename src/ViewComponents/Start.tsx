import React from "react";
import Mocker from "../Services/DataMocker";
import Genres from "./Genres";
import Games from "./Games";

export default class Start extends React.Component<{}, {}> {
  mocker: Mocker;

  constructor(props: any) {
    super(props);
    this.mocker = new Mocker();
  }

  componentDidMount() {
    this.mocker.mockData();
  }

  render() {
    return (
      <div>
        <Genres />
        <Games />
      </div>
    );
  }
}
