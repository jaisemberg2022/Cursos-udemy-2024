(() => {
  type Avenger = {
    name: string;
    weapons: string;
  };

  const ironman: Avenger = {
    name: "Tony stark",
    weapons: "Mark 3",
  };

  const capAmerica: Avenger = {
    name: "Roger",
    weapons: "shield",
  };

  const thor: Avenger = {
    name: "thor",
    weapons: "hammer",
  };

  const avengers = [ironman, capAmerica, thor];

  for (const avenger of avengers) {
    console.log(avenger.name,avenger.weapons);
  }
})();
