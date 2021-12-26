//object full of our random message parts
const messageParts = {
    partsOne: ['3 bat wings', '7 eyes of newt', '2 wolf teeth', '10 owl feathers', '37 woodland spirits', '8 gnar roots', '20 Vorlax talons'],
    partsTwo: ['boil in jello', 'pulverize in an atomizer', 'toss into the river \'o flame', 'juggle them in the pale moonlight', 'hide beneath a turtle stone', 'arrange into the shape of a cricket', 'stack into a spirit column'],
    partsThree: ['sing the song of antlers', 'dance the jig of eternal goonfullery', 'call to the Great Wandering Tree', 'spit into the abyss', 'give your neighbor a dollar', 'strum the ether chord'],
    partsFour: ['zombie army', 'demon familiar', 'ghost friend', 'Frankenstein crocodile', 'restless spirit fish', 'bubblegum golem', 'gremlin squire'],
 }
//empty array that will eventually contain our randomly selected parts
 let partsArray = [];

 //loop to go through the object and select a random message part from each property
for (let i in messageParts) {
    let randNum = Math.floor(Math.random() * messageParts[i].length);
    switch(i) {
        case 'partsOne':
        partsArray.push(messageParts[i][randNum]);
        break;
        case 'partsTwo':
        partsArray.push(messageParts[i][randNum]);
        break;
        case 'partsThree':
        partsArray.push(messageParts[i][randNum]);
        break;
        case 'partsFour':
        partsArray.push(messageParts[i][randNum]);
        break;
        default:
        break;
    }
}

//print the randomized witch recipe to console
console.log(`I\'ve prepared a fine witch recipe for you: 
        
    Take ${partsArray[0]}. 
    Then, ${partsArray[1]}. 
    Finally, ${partsArray[2]}. 

Viola, you\'ll have a ${partsArray[3]} in no time!`) 

