//contains the message parts to be pieced together
let messageParts = {
    partsOne: ['Did you know ', 'How strange that ', 'A mystical wizard cast a spell ensuring ', 'A pack of wild dogs will say that ', 'Mojo Jojo has claimed '],
    partsTwo: ['all dogs go to heaven', 'rats control the government', 'happiness prevails', 'whales cannot eat gummy candy', 'portals to the netherworld are painted orange'],
    partsThree: [' at least once or twice a generation.', ', even if most of us will never know.', ' in certain lands.', ', and only fools think otherwise.', ' during certain lunar cycles.'],
 };

 //pulls a random message component from each of the three parts arrays
let partOne = messageParts.partsOne[Math.floor(Math.random() * messageParts.partsOne.length)];
let partTwo = messageParts.partsTwo[Math.floor(Math.random() * messageParts.partsTwo.length)];
let partThree = messageParts.partsThree[Math.floor(Math.random() * messageParts.partsThree.length)];

//prints the random message to console
console.log(partOne + partTwo + partThree);

