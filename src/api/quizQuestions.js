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
        content: "The Hog's Head Inn"
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
    question: "What is one of Dumbledore's favorite muggle candies?",
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
  {
    question: "How much do beetle eyes cost (per scoop)?",
    answers: [
      {
        type: "wrong",
        content: "20 Knuts"
      },
      {
        type: "correct",
        content: "5 Knuts"
      },
      {
        type: "wrong",
        content: "3 Knuts"
      }
    ]
  },
  {
    question: "In which book did Harry find Hedwig's name?",
    answers: [
      {
        type: "wrong",
        content: "Fantasitic Beasts and Where to Find Them"
      },
      {
        type: "correct",
        content: "A History of Magic"
      },
      {
        type: "wrong",
        content: "Owl Breeds"
      }
    ]
  },
  {
    question: "In what year did Dumbledore defeat Grindewald?",
    answers: [
      {
        type: "wrong",
        content: "1918"
      },
      {
        type: "correct",
        content: "1945"
      },
      {
        type: "wrong",
        content: "1942"
      }
    ]
  },
  {
    question: "How many fouls are possible in a game of Quidditch?",
    answers: [
      {
        type: "correct",
        content: "700"
      },
      {
        type: "wrong",
        content: "565"
      },
      {
        type: "wrong",
        content: "650"
      }
    ]
  },
  {
    question: "What does Charlie study in Romania during Harry's first year?",
    answers: [
      {
        type: "wrong",
        content: "Centaurs"
      },
      {
        type: "correct",
        content: "Dragons"
      },
      {
        type: "wrong",
        content: "Thestrals"
      }
    ]
  },
  {
    question: "What is the name of the leg-locker curse?",
    answers: [
      {
        type: "wrong",
        content: "Petrificus Totalus"
      },
      {
        type: "correct",
        content: "Locomotor Mortis"
      },
      {
        type: "wrong",
        content: "Alarte Ascendare"
      }
    ]
  },
  {
    question: "The Warlock's Convention outlawed dragon breeding in what year?",
    answers: [
      {
        type: "wrong",
        content: "1619"
      },
      {
        type: "correct",
        content: "1709"
      },
      {
        type: "wrong",
        content: "1642"
      }
    ]
  },
  {
    question: "What book does Hagrid read in preperation for Norbert?",
    answers: [
      {
        type: "wrong",
        content: "Dragon Species of Great Britain and Ireland"
      },
      {
        type: "correct",
        content: "Dragon Breeding for Pleasure and Profit"
      },
      {
        type: "wrong",
        content: "From Egg to Inferno: a Dragon-Keeper's Guide"
      }
    ]
  },
  {
    question: "What type of dragon is Norbert?",
    answers: [
      {
        type: "wrong",
        content: "Common Welsh Green"
      },
      {
        type: "correct",
        content: "Norwegian Ridgeback"
      },
      {
        type: "wrong",
        content: "Swedish Short-Snout"
      }
    ]
  },
  {
    question: "How old is Nicolas Flamel?",
    answers: [
      {
        type: "wrong",
        content: "650"
      },
      {
        type: "correct",
        content: "665"
      },
      {
        type: "wrong",
        content: "658"
      }
    ]
  },
  {
    question: "How old is Nicolas Flamel's wife, Paranelle?",
    answers: [
      {
        type: "wrong",
        content: "655"
      },
      {
        type: "correct",
        content: "658"
      },
      {
        type: "wrong",
        content: "642"
      }
    ]
  },
  {
    question: "What moves around the edges of Dumbledore's watch?",
    answers: [
      {
        type: "wrong",
        content: "Stars"
      },
      {
        type: "correct",
        content: "Planets"
      },
      {
        type: "wrong",
        content: "Gears"
      }
    ]
  },
  {
    question: "What does Dumbledore have a map of above his left knee?",
    answers: [
      {
        type: "wrong",
        content: "The Forbidden Forest"
      },
      {
        type: "correct",
        content: "The London Underground"
      },
      {
        type: "wrong",
        content: "The Astronomy Tower"
      }
    ]
  },
  {
    question: "Which school is Dudley accepted to in the first book?",
    answers: [
      {
        type: "wrong",
        content: "Heaven High Academy"
      },
      {
        type: "correct",
        content: "Smeltings"
      },
      {
        type: "wrong",
        content: "The King's School"
      }
    ]
  },
  {
    question: "How many uses of dragon's blood are there?",
    answers: [
      {
        type: "wrong",
        content: "10"
      },
      {
        type: "correct",
        content: "12"
      },
      {
        type: "wrong",
        content: "13"
      }
    ]
  },
  {
    question: "What school would Harry have gone to if he didn't go to Hogwarts?",
    answers: [
      {
        type: "wrong",
        content: "Smeltings"
      },
      {
        type: "correct",
        content: "Stonewall High"
      },
      {
        type: "wrong",
        content: "The King's School"
      }
    ]
  },
  {
    question: "Who discovered the 12 uses of dragons blood?",
    answers: [
      {
        type: "wrong",
        content: "Nicolas Flamel"
      },
      {
        type: "correct",
        content: "Albus Dumbledore"
      },
      {
        type: "wrong",
        content: "Hermione Granger"
      }
    ]
  },
  {
    question: "How many presents does Dudley get on his 11th birthday?",
    answers: [
      {
        type: "wrong",
        content: "42"
      },
      {
        type: "correct",
        content: "39"
      },
      {
        type: "wrong",
        content: "37"
      }
    ]
  },
  {
    question: "What color uniforms do Gringott's goblins wear?",
    answers: [
      {
        type: "wrong",
        content: "Blue and Silver"
      },
      {
        type: "correct",
        content: "Scarlet and Gold"
      },
      {
        type: "wrong",
        content: "Crimson and Bronze"
      }
    ]
  },
  {
    question: "What percentage does Hermione receive on Flitwick's final exam during their first year?",
    answers: [
      {
        type: "wrong",
        content: "110%"
      },
      {
        type: "correct",
        content: "112%"
      },
      {
        type: "wrong",
        content: "115%"
      }
    ]
  },
  {
    question: "How many house points does Slytherin have at the end of their first year?",
    answers: [
      {
        type: "wrong",
        content: "452"
      },
      {
        type: "wrong",
        content: "462"
      },
      {
        type: "correct",
        content: "472"
      }
    ]
  },
  {
    question: "What does Harry receive from Vernon and Petunia for Christmas during his first year?",
    answers: [
      {
        type: "wrong",
        content: "A ball of yarn"
      },
      {
        type: "correct",
        content: "A 50 pence piece"
      },
      {
        type: "wrong",
        content: "A moldy sock"
      }
    ]
  },
  {
    question: "Which house is in last place for the House Cup at the end of the first year?",
    answers: [
      {
        type: "wrong",
        content: "Ravenclaw"
      },
      {
        type: "correct",
        content: "Hufflepuff"
      },
      {
        type: "wrong",
        content: "Gryffyndor"
      }
    ]
  },
  {
    question: "How many house points does Gryffindor have when they win the House Cup the first year?",
    answers: [
      {
        type: "wrong",
        content: "473"
      },
      {
        type: "correct",
        content: "482"
      },
      {
        type: "wrong",
        content: "480"
      }
    ]
  },
  {
    question: "What potion does Snape ask students to make for their final exams during their first year?",
    answers: [
      {
        type: "wrong",
        content: "Draught of Living Death"
      },
      {
        type: "correct",
        content: "Forgetfullness Potion"
      },
      {
        type: "wrong",
        content: "Polyjuice Potion"
      }
    ]
  },
  {
    question: "What does Harry receive from Hermione for Christmas his first year?",
    answers: [
      {
        type: "wrong",
        content: "A broom cleaning kit"
      },
      {
        type: "correct",
        content: "Chocolate Frogs"
      },
      {
        type: "wrong",
        content: "A wooden flute"
      }
    ]
  },
  {
    question: "What does Harry receive from Hagrid for Christmas during his first year?",
    answers: [
      {
        type: "wrong",
        content: "A copy of Notable Magical Names of Our Time"
      },
      {
        type: "correct",
        content: "A wooden flute"
      },
      {
        type: "wrong",
        content: "Carrot Cake"
      }
    ]
  },
  {
    question: "What is the name of Aragog's wife?",
    answers: [
      {
        type: "wrong",
        content: "Gogra"
      },
      {
        type: "correct",
        content: "Mosag"
      },
      {
        type: "wrong",
        content: "Ghara"
      }
    ]
  },
  {
    question: "What are Basilisks also commonly referred to as?",
    answers: [
      {
        type: "wrong",
        content: "King of Kings"
      },
      {
        type: "correct",
        content: "King of Serpents"
      },
      {
        type: "wrong",
        content: "Salazar's Serpent"
      }
    ]
  },
  {
    question: "What is the name of the Weasleys' famiy owl?",
    answers: [
      {
        type: "wrong",
        content: "Hermes"
      },
      {
        type: "correct",
        content: "Errol"
      },
      {
        type: "wrong",
        content: "Hedwig"
      }
    ]
  },
  {
    question: "What is the name of Percy's owl (he receives it after becoming a Prefect)?",
    answers: [
      {
        type: "wrong",
        content: "Hermit"
      },
      {
        type: "correct",
        content: "Hermes"
      },
      {
        type: "wrong",
        content: "Hoots"
      }
    ]
  },
  {
    question: "In book 2, what is Mrs. Mason mortally afraid of?",
    answers: [
      {
        type: "wrong",
        content: "Cats"
      },
      {
        type: "correct",
        content: "Birds"
      },
      {
        type: "wrong",
        content: "Dogs"
      }
    ]
  },
  {
    question: "True or False: Some of Mrs. Figg's cats names are Tibbles, Snowy, Mr. Paws and Tufty.",
    answers: [
      {
        type: "wrong",
        content: "False"
      },
      {
        type: "correct",
        content: "True"
      },
    ]
  },
  {
    question: "Dumbledore's watch has twelve hands - does it have numbers?",
    answers: [
      {
        type: "wrong",
        content: "Yes"
      },
      {
        type: "correct",
        content: "No"
      },
    ]
  },
  {
    question: "In what year were all the possible Quidditch fouls committed (in a single game)?",
    answers: [
      {
        type: "wrong",
        content: "1492"
      },
      {
        type: "correct",
        content: "1473"
      },
      {
        type: "wrong",
        content: "1447"
      }
    ]
  },
  {
    question: "True or False: Monkshood, Wolfsbane and Aconite are the same plant?",
    answers: [
      {
        type: "wrong",
        content: "False"
      },
      {
        type: "correct",
        content: "True"
      }
    ]
  },
  {
    question: "Asphodel and Wormwood make what sleeping potion?",
    answers: [
      {
        type: "wrong",
        content: "Peppercup Potion"
      },
      {
        type: "correct",
        content: "Draught of Living Death"
      },
      {
        type: "wrong",
        content: "Draught of Peace"
      }
    ]
  },
  {
    question: "How many Galleons was Arthur Weasley fined for bewitching the blue Ford Anglia?",
    answers: [
      {
        type: "wrong",
        content: "100 Galleons"
      },
      {
        type: "correct",
        content: "50 Galleons"
      },
      {
        type: "wrong",
        content: "75 Galleons"
      }
    ]
  },
  {
    question: "In book 2, what kind of broom does Ron have?",
    answers: [
      {
        type: "correct",
        content: "Shooting Star"
      },
      {
        type: "wrong",
        content: "Cleansweep"
      },
      {
        type: "wrong",
        content: "Comet"
      }
    ]
  },
  {
    question: "What is another name for a Mandrake?",
    answers: [
      {
        type: "correct",
        content: "Mandragora"
      },
      {
        type: "wrong",
        content: "Shrivelfig"
      },
      {
        type: "wrong",
        content: "Bubotuber"
      }
    ]
  },
  {
    question: "Which house is Justin Finch-Fletchly in?",
    answers: [
      {
        type: "correct",
        content: "Hufflepuff"
      },
      {
        type: "wrong",
        content: "Slytherin"
      },
      {
        type: "wrong",
        content: "Ravenclaw"
      }
    ]
  },
  {
    question: "If he hadn't gone to Hogwarts, where would Justin Finch-Fletchly have attended?",
    answers: [
      {
        type: "correct",
        content: "Eton"
      },
      {
        type: "wrong",
        content: "Smeltings"
      },
      {
        type: "wrong",
        content: "King's School"
      }
    ]
  },
  {
    question: "What is Gilderoy Lockhart's favorite color?",
    answers: [
      {
        type: "correct",
        content: "Lilac"
      },
      {
        type: "wrong",
        content: "Lavender"
      },
      {
        type: "wrong",
        content: "Cerise"
      }
    ]
  },
  {
    question: "How many times was Nearless Headless Nick hit with a blunt axe?",
    answers: [
      {
        type: "correct",
        content: "45"
      },
      {
        type: "wrong",
        content: "25"
      },
      {
        type: "wrong",
        content: "42"
      }
    ]
  },
  {
    question: "Fred bewitches Percy's Prefect badge to read what?",
    answers: [
      {
        type: "correct",
        content: "Pinhead"
      },
      {
        type: "wrong",
        content: "Birdbrain"
      },
      {
        type: "wrong",
        content: "Dork"
      }
    ]
  },
  {
    question: "How many O.W.L.s do Bill and Percy each receive?",
    answers: [
      {
        type: "correct",
        content: "12"
      },
      {
        type: "wrong",
        content: "13"
      },
      {
        type: "wrong",
        content: "10"
      }
    ]
  },
  {
    question: "What is Ron's Quidditch team?",
    answers: [
      {
        type: "correct",
        content: "Chudley Cannons"
      },
      {
        type: "wrong",
        content: "Appelby Arrows"
      },
      {
        type: "wrong",
        content: "Banchory Bangers"
      }
    ]
  },
  {
    question: "True or False: The Chamber of Secrets was opened in T.M. Riddle's 5th year.",
    answers: [
      {
        type: "correct",
        content: "True"
      },
      {
        type: "wrong",
        content: "False"
      },
    ]
  },
  {
    question: "In book 3, how many Galleons do the Weasley's win for The Daily Prophet's Grand Prize?",
    answers: [
      {
        type: "correct",
        content: "700 Galleons"
      },
      {
        type: "wrong",
        content: "500 Galleons"
      },
      {
        type: "wrong",
        content: "1,000 Galleons"
      }
    ]
  },
  {
    question: "How many dogs does Aunt Marge have?",
    answers: [
      {
        type: "correct",
        content: "12"
      },
      {
        type: "wrong",
        content: "7"
      },
      {
        type: "wrong",
        content: "9"
      }
    ]
  },
  {
    question: "What is the name of Fleur's sister?",
    answers: [
      {
        type: "correct",
        content: "Gabrielle"
      },
      {
        type: "wrong",
        content: "Olympe"
      },
      {
        type: "wrong",
        content: "Penelope"
      }
    ]
  },
  {
    question: "What is Hagrid's mother's name?",
    answers: [
      {
        type: "correct",
        content: "Fridwulfa"
      },
      {
        type: "wrong",
        content: "Brianne"
      },
      {
        type: "wrong",
        content: "Olympe"
      }
    ]
  },
  {
    question: "Which band did Dumbledore book for the Yule Ball?",
    answers: [
      {
        type: "correct",
        content: "The Weird Sisters"
      },
      {
        type: "wrong",
        content: "The Black Sisters"
      },
      {
        type: "wrong",
        content: "The Butterbeer Experience"
      }
    ]
  },
  {
    question: "How many barrells of mulled mead did Dumbledore buy for the Yule Ball?",
    answers: [
      {
        type: "correct",
        content: "800"
      },
      {
        type: "wrong",
        content: "1,000"
      },
      {
        type: "wrong",
        content: "777"
      }
    ]
  },
  {
    question: "What curse was Sirius going to suggest to Harry for him to get past the dragon task?",
    answers: [
      {
        type: "correct",
        content: "The Conjunctivitus Curse"
      },
      {
        type: "wrong",
        content: "The Blasting Curse"
      },
      {
        type: "wrong",
        content: "The Expulso Curse"
      }
    ]
  },
  {
    question: "Which dragon type does Krum draw for the dragon task?",
    answers: [
      {
        type: "correct",
        content: "Chinese Fireball"
      },
      {
        type: "wrong",
        content: "Norwegian Ridgeback"
      },
      {
        type: "wrong",
        content: "Welsh Green"
      }
    ]
  },
  {
    question: "Who was the caretaker when Molly and Arthur were at Hogwarts?",
    answers: [
      {
        type: "correct",
        content: "Apollyon Pringle"
      },
      {
        type: "wrong",
        content: "Hankerton Humble"
      },
      {
        type: "wrong",
        content: "Rancorous Carpe"
      }
    ]
  },
  {
    question: "What do Madam Maxine's horses drink exlusively?",
    answers: [
      {
        type: "correct",
        content: "Single Malt Whiskey"
      },
      {
        type: "wrong",
        content: "Butterbeer"
      },
      {
        type: "wrong",
        content: "Sparkling Water"
      }
    ]
  },
  {
    question: "How many Sickles does it cost to join S.P.E.W?",
    answers: [
      {
        type: "correct",
        content: "2"
      },
      {
        type: "wrong",
        content: "1"
      },
      {
        type: "wrong",
        content: "5"
      }
    ]
  },
  {
    question: "The Triwizard Tournament includes a prize of how many Galleons?",
    answers: [
      {
        type: "correct",
        content: "1,000"
      },
      {
        type: "wrong",
        content: "5,000"
      },
      {
        type: "wrong",
        content: "500"
      }
    ]
  },
  {
    question: "Who is the campsite manager at the Quidditch Worldcup?",
    answers: [
      {
        type: "correct",
        content: "Mr. Roberts"
      },
      {
        type: "wrong",
        content: "Mr. Bermudez"
      },
      {
        type: "wrong",
        content: "Mr. Flechley"
      }
    ]
  },
  {
    question: "Who was the Riddles' gardener?",
    answers: [
      {
        type: "correct",
        content: "Frank Bryce"
      },
      {
        type: "wrong",
        content: "Luke Mage"
      },
      {
        type: "wrong",
        content: "Thomas Ang"
      }
    ]
  },
  {
    question: "How tall is Grawp?",
    answers: [
      {
        type: "correct",
        content: "16 ft"
      },
      {
        type: "wrong",
        content: "13 ft"
      },
      {
        type: "wrong",
        content: "15 ft"
      }
    ]
  },
  {
    question: "What is the branch name of obscure magic that protects ones mind against external penetration?",
    answers: [
      {
        type: "correct",
        content: "Occlumency"
      },
      {
        type: "wrong",
        content: "Legilimency"
      },
      {
        type: "wrong",
        content: "Divination"
      }
    ]
  },
  {
    question: "According to Luna, what is mistletoe often infected with?",
    answers: [
      {
        type: "correct",
        content: "Nargles"
      },
      {
        type: "wrong",
        content: "Thestral"
      },
      {
        type: "wrong",
        content: "Bowtruckle"
      }
    ]
  },
  {
    question: "What is the name of Hagrid's favorite Thestral?",
    answers: [
      {
        type: "correct",
        content: "Tenebrus"
      },
      {
        type: "wrong",
        content: "Appa"
      },
      {
        type: "wrong",
        content: "Omnibras"
      }
    ]
  },
  {
    question: "Who replaces Harry as Seeker?",
    answers: [
      {
        type: "correct",
        content: "Ginny Weasley"
      },
      {
        type: "wrong",
        content: "Galvin Gudgeon"
      },
      {
        type: "wrong",
        content: "Blythe Parkin"
      }
    ]
  },
  {
    question: "True or False: Tonks is a Metamorphmagus.",
    answers: [
      {
        type: "correct",
        content: "True"
      },
      {
        type: "wrong",
        content: "False"
      }
    ]
  },
  {
    question: "Who wrote Defensive Magical Theory?",
    answers: [
      {
        type: "correct",
        content: "Wilbert Slinkhard"
      },
      {
        type: "wrong",
        content: "Ariel Singleton"
      },
      {
        type: "wrong",
        content: "Galvin Gludgeon"
      }
    ]
  },
  {
    question: "What is Umbridge's first lesson titled?",
    answers: [
      {
        type: "correct",
        content: "A return to basic principles"
      },
      {
        type: "wrong",
        content: "A return to discipline"
      },
      {
        type: "wrong",
        content: "A return to structure"
      }
    ]
  },
  {
    question: "Who still writes weekly to Gilderoy Lockhart during his permanent stay in St. Mungo's?",
    answers: [
      {
        type: "correct",
        content: "Luna Lovegood"
      },
      {
        type: "wrong",
        content: "Gladys Gudgeon"
      },
      {
        type: "wrong",
        content: "Lavender Brown"
      }
    ]
  },
  {
    question: "What did Fred and George treat themselves to after their business started booming?",
    answers: [
      {
        type: "correct",
        content: "Dragon Skin Suits"
      },
      {
        type: "wrong",
        content: "Golden Cauldrons"
      },
      {
        type: "wrong",
        content: "Firebolts"
      }
    ]
  },
  {
    question: "True or False: Snape lives in a muggle town on Spinner's End.",
    answers: [
      {
        type: "correct",
        content: "True"
      },
      {
        type: "wrong",
        content: "False"
      }
    ]
  },
  {
    question: "What is Dumbledore's favorite jam flavor?",
    answers: [
      {
        type: "correct",
        content: "Raspberry"
      },
      {
        type: "wrong",
        content: "Blackberry"
      },
      {
        type: "wrong",
        content: "Strawberry"
      }
    ]
  },
  {
    question: "What does Ginny call Fleur?",
    answers: [
      {
        type: "correct",
        content: "Phlegm"
      },
      {
        type: "wrong",
        content: "Flan"
      },
      {
        type: "wrong",
        content: "Flour"
      }
    ]
  },
  {
    question: "What color are the staff robes at Weasley's Wizard Wheezer?",
    answers: [
      {
        type: "correct",
        content: "Crimson"
      },
      {
        type: "wrong",
        content: "Magenta"
      },
      {
        type: "wrong",
        content: "Neon"
      }
    ]
  },
  {
    question: "How much does the book Advanced Potion-Making cost at Flourish and Blotts?",
    answers: [
      {
        type: "correct",
        content: "9 Galleons"
      },
      {
        type: "wrong",
        content: "7 Galleons"
      },
      {
        type: "wrong",
        content: "5 Galleons"
      }
    ]
  },
  {
    question: "During what two ages did Slughorn take Felix Felicis?",
    answers: [
      {
        type: "correct",
        content: "24 and 57"
      },
      {
        type: "wrong",
        content: "19 and 39"
      },
      {
        type: "wrong",
        content: "27 and 50"
      }
    ]
  },
  {
    question: "How many months does it take to make Felix Felicis?",
    answers: [
      {
        type: "correct",
        content: "6"
      },
      {
        type: "wrong",
        content: "3"
      },
      {
        type: "wrong",
        content: "8"
      }
    ]
  },
  {
    question: "How many O.W.L.s. does Ron receive?",
    answers: [
      {
        type: "correct",
        content: "7"
      },
      {
        type: "wrong",
        content: "5"
      },
      {
        type: "wrong",
        content: "8"
      }
    ]
  },
  {
    question: "How many O.W.L.s. does Hermione receive?",
    answers: [
      {
        type: "correct",
        content: "10"
      },
      {
        type: "wrong",
        content: "12"
      },
      {
        type: "wrong",
        content: "9"
      }
    ]
  },
  {
    question: "How many Shield Hats did the Ministry buy for their support staff, on the initial order?",
    answers: [
      {
        type: "correct",
        content: "500"
      },
      {
        type: "wrong",
        content: "350"
      },
      {
        type: "wrong",
        content: "700"
      }
    ]
  },
  {
    question: "Who killed Krum's grandfather?",
    answers: [
      {
        type: "correct",
        content: "Grindelwald"
      },
      {
        type: "wrong",
        content: "Voldermort"
      },
      {
        type: "wrong",
        content: "Dumbledore"
      }
    ]
  },
  {
    question: "What is Arthur Weasley's Patronus?",
    answers: [
      {
        type: "correct",
        content: "A weasel"
      },
      {
        type: "wrong",
        content: "A gopher"
      },
      {
        type: "wrong",
        content: "A black swan"
      }
    ]
  },
  {
    question: "What is Dolores Umbridge's Patronus?",
    answers: [
      {
        type: "correct",
        content: "A cat"
      },
      {
        type: "wrong",
        content: "A dog"
      },
      {
        type: "wrong",
        content: "A mouse"
      }
    ]
  },
  {
    question: "What color robes do Magical Maintenance employees at the Ministry wear?",
    answers: [
      {
        type: "correct",
        content: "Navy Blue"
      },
      {
        type: "wrong",
        content: "Lavender"
      },
      {
        type: "wrong",
        content: "Beige"
      }
    ]
  },
  {
    question: "What is the only spell Hermione ever has trouble with?",
    answers: [
      {
        type: "correct",
        content: "Expecto Patronum"
      },
      {
        type: "wrong",
        content: "Aguamenti"
      },
      {
        type: "wrong",
        content: "Oppugno"
      }
    ]
  },
  {
    question: "True or False: Harry is a living descendent of Ignotus Peverell.",
    answers: [
      {
        type: "correct",
        content: "True"
      },
      {
        type: "wrong",
        content: "False"
      },
    ]
  }
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
