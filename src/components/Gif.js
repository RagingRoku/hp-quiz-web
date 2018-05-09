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
          <br />
          <q className="App-quote">MUUUUUUM! He’s doing you know what!</q>
        </div>
      );
    } else if (percentage >= 50.0 && percentage < 70.0) {
      return (
        <div>
          <p>Below average! Just like Crabbe and Goyle.</p>
          <iframe
            src="https://giphy.com/embed/BbmcUPbTfcVSo"
            width="280"
            height="210"
            frameBorder="0"
            className="giphy-embed"
            title="goyle"
          />
          <br />
          <q className="App-quote">
            First time they've ever been top in anything, I expect.
          </q>{" "}
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
          <br />
          <q className="App-quote">
            When the Dark Lord takes over, is he going to care how many O.W.L.s
            or N.E.W.T.s anyone’s got? Of course he isn’t... It’ll be all about
            the kind of service he received, the level of devotion he was shown.
          </q>{" "}
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
          <br />
          <q className="App-quote">
            Well, we were always going to fail that one.
          </q>{" "}
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
          <br />
          <q className="App-quote">Well, it changes every day, you see.</q>{" "}
        </div>
      );
    } else if (percentage === 100.0) {
      return (
        <div>
          <p>
            What a true Hermione! Congratulations, you've won!{" "}
            <span role="img" aria-label="party">
              🎉
            </span>
          </p>
          <iframe
            src="https://giphy.com/embed/N5byr13yA8gIo"
            width="280"
            height="122"
            frameBorder="0"
            className="giphy-embed"
            title="hermione"
          />
          <br />
          <q className="App-quote">Mudblood and proud of it.</q>{" "}
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
          <br />
          <q className="App-quote">
            'Harry Potter,'' he said very softly. His voice might have been part
            of the spitting fire. 'The Boy Who Lived.'' None of the Death Eaters
            moved. They were waiting. Everything was waiting. Hagrid was
            struggling, and Bellatrix was panting, and Harry thought
            inexplicably of Ginny, and her blazing look, and the feel of her
            lips on his-- Voldemort had raised his wand. His head was still
            tilted to one side, like a curious child, wondering what would
            happen if he proceeded. Harry looked back into the red eyes, and
            wanted it to happen now, quickly, while he could still stand, before
            he lost control, before he betrayed fear-- He saw the mouth move and
            a flash of green light, and everything was gone.
          </q>{" "}
        </div>
      );
    }
  }

  render() {
    return this.pickGif();
  }
}

export default Gif;
