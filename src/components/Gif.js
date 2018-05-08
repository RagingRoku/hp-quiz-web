import React, { Component } from "react";

class Gif extends Component {
  constructor(props) {
    super(props);

    this.pickGif = this.pickGif.bind(this);
  }

  pickGif() {
    let { percentage } = this.props;
    if (percentage < 50.0) {
      return (
        <div>
          <p>
            That's a pretty terrible score. This isn't weighted you know,
            Dudley!
          </p>
          <iframe
            src="https://giphy.com/embed/11c3DVinQXabhm"
            width="280"
            height="139"
            frameBorder="0"
            className="giphy-embed"
            title="dudley"
          />
        </div>
      );
    } else if (percentage >= 50.0 && percentage < 70.0) {
      return (
        <div>
          <p>Below average! Just like Crabb and Goyle.</p>
          <iframe
            src="https://giphy.com/embed/BbmcUPbTfcVSo"
            width="280"
            height="210"
            frameBorder="0"
            className="giphy-embed"
            title="goyle"
          />
        </div>
      );
    } else if (percentage >= 70.0 && percentage < 80.0) {
      return (
        <div>
          <p>
            A bit better - but I bet you paid someone to take this for you
            Malfoy!
          </p>
          <iframe
            src="https://giphy.com/embed/S3F8kkGTHZ4Y"
            width="280"
            height="263"
            frameBorder="0"
            className="giphy-embed"
            title="malfoy"
          />
        </div>
      );
    } else if (percentage >= 80.0 && percentage < 90.0) {
      return (
        <div>
          <p>Pretty good, Ron.</p>
          <iframe
            src="https://giphy.com/embed/rKzxE0Q5EQKFq"
            width="280"
            height="116"
            frameBorder="0"
            className="giphy-embed"
            title="ron"
          />
        </div>
      );
    } else if (percentage >= 90.0 && percentage <= 99.99) {
      return (
        <div>
          <p>The art of cramming is paying off! Good job, Potter.</p>
          <iframe
            src="https://giphy.com/embed/26BRzozg4TCBXv6QU"
            width="280"
            height="158"
            frameBorder="0"
            className="giphy-embed"
            title="hp"
          />
        </div>
      );
    } else if (percentage === 100.0) {
      return (
        <div>
          <p>
            What a true Hermione! Congratulations, you've won!{" "}
            <span role="img" aria-label="party">🎉</span>
          </p>
          <iframe
            src="https://giphy.com/embed/N5byr13yA8gIo"
            width="280"
            height="122"
            frameBorder="0"
            className="giphy-embed"
            title="hermione"
          />
        </div>
      );
    } else {
      return (
        <div>
          <p>You found a bug. Are you Voldemort?</p>
          <iframe
            src="https://giphy.com/embed/wLBS2GlPDALS0"
            width="280"
            height="196"
            frameBorder="0"
            className="giphy-embed"
            title="voldy"
          />
        </div>
      );
    }
  }

  render() {
    return this.pickGif();
  }
}

export default Gif;
