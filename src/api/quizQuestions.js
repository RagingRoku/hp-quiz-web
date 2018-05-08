const quizQuestions = [
  {
    question: "Where does Mr. Dursley work?",
    answers: [
      {
        type: "correct",
        content: "Grunnings"
      },
      {
        type: "wrong",
        content: "Ministry of Magic"
      },
      {
        type: "wrong",
        content: "Pub"
      }
    ]
  },
  {
    question: "What do they make at Grunnings?",
    answers: [
      {
        type: "correct",
        content: "Drills"
      },
      {
        type: "wrong",
        content: "Carpets"
      },
      {
        type: "wrong",
        content: "Wands"
      }
    ]
  },
  {
    question: "What shape are Professor Dumbledore's glasses?",
    answers: [
      {
        type: "wrong",
        content: "Full-Moon"
      },
      {
        type: "wrong",
        content: "Crescent-Moon"
      },
      {
        type: "correct",
        content: "Half-Moon"
      }
    ]
  },
  {
    question: "What shape are Professor McGonagall's glasses?",
    answers: [
      {
        type: "correct",
        content: "Square"
      },
      {
        type: "wrong",
        content: "Oval"
      },
      {
        type: "wrong",
        content: "Circular"
      }
    ]
  },
  {
    question: "What is one of Dumbledore's favorite Muggle candies?",
    answers: [
      {
        type: "wrong",
        content: "Toffee"
      },
      {
        type: "correct",
        content: "Lemondrops"
      },
      {
        type: "wrong",
        content: "Jelly Beans"
      }
    ]
  },
  {
    question: "Whose wand does Voldemort borrow?",
    answers: [
      {
        type: "wrong",
        content: "Draco Malfoy"
      },
      {
        type: "correct",
        content: "Lucius Malfoy"
      },
      {
        type: "wrong",
        content: "Bellatrix Lestrange"
      }
    ]
  },
  {
    question: "What vault is the Sorcerer's Stone in?",
    answers: [
      {
        type: "wrong",
        content: "613"
      },
      {
        type: "correct",
        content: "713"
      },
      {
        type: "wrong",
        content: "777"
      }
    ]
  },
  {
    question: "Who is Dudley's best friend?",
    answers: [
      {
        type: "wrong",
        content: "Petunia Dursley"
      },
      {
        type: "correct",
        content: "Piers Polkiss"
      },
      {
        type: "wrong",
        content: "Arabella Figg"
      }
    ]
  },
  {
    question: "How many Sickles to a Galleon?",
    answers: [
      {
        type: "wrong",
        content: "21"
      },
      {
        type: "correct",
        content: "17"
      },
      {
        type: "wrong",
        content: "29"
      }
    ]
  },
  {
    question: "How many Knuts to a Sickle?",
    answers: [
      {
        type: "wrong",
        content: "21"
      },
      {
        type: "correct",
        content: "29"
      },
      {
        type: "wrong",
        content: "19"
      }
    ]
  },
  {
    question: "How many Knuts to a Galleon?",
    answers: [
      {
        type: "wrong",
        content: "420"
      },
      {
        type: "correct",
        content: "493"
      },
      {
        type: "wrong",
        content: "394"
      }
    ]
  },
  {
    question: "How much do silver unicorn horns cost?",
    answers: [
      {
        type: "wrong",
        content: "20 Sickles"
      },
      {
        type: "correct",
        content: "21 Galleons"
      },
      {
        type: "wrong",
        content: "200 Knuts"
      }
    ]
  },
];

function shuffleArray(array) {
    // Fisher-Yates shuffle
    let m = array.length;
    let temp;
    let idx;

    // While there remains elements to shuffle
    while (m) {
      // Pick a remaining element
      idx = Math.floor(Math.random() * m--);

      // Swap it with the current element
      temp = array[m];
      array[m] = array[idx];
      array[idx] = temp;
    }

    return array;
  }

export default shuffleArray(quizQuestions);
