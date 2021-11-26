"use strict";
exports.__esModule = true;
exports.removeJoke = exports.addJoke = exports.getRandomJoke = exports.getJoke = void 0;
var jokes = [{ "joke": "What's the best thing about switzerland", "punchline": "I don't know but the flag is a big plus" },
    { "joke": "I invented a new word", "punchline": "Plagiarism" },
    { "joke": "Did you hear about the mathematician who is afraid of negative numbers?", "punchline": "He'll stop at nothing to avoid them" },
    { "joke": "Why do we tell actors to 'break a leg?'", "punchline": "Because every play has a cast" },
    { "joke": "Helvetica and Times New Roman walk into a bar.", "punchline": "“Get out of here!” shouts the bartender. “We don’t serve your type.”" },
    { "joke": "Yesterday I saw a guy spill all his Scrabble letters on the road.", "punchline": "I asked him, “What’s the word on the street?”" },
    { "joke": "Hear about the new restaurant called Karma?", "punchline": "Their is no menu, you get what you deserve" },
    { "joke": "Did you hear about the actor who fell through the floorboards?", "punchline": "He was just going through the stage" }];
var getJoke = function (joke) {
    if (!jokes[joke]) {
        console.log('A joke with the specified index does not exist. Please specify a number between 0 and ${jokes.length - 1}');
    }
    return jokes[joke]["joke"] + ' ~ ' + jokes[joke]["punchline"];
};
exports.getJoke = getJoke;
var getRandomJoke = function () {
    return (jokes[Math.floor(Math.random() * (jokes.length + 1))]["joke"] + ' ~ ' + jokes[Math.floor(Math.random() * (jokes.length + 1))]["punchline"]);
};
exports.getRandomJoke = getRandomJoke;
var addJoke = function (joke_name, joke_punchline) {
    return jokes.push({ "joke": joke_name, "punchline": joke_punchline });
};
exports.addJoke = addJoke;
var removeJoke = function (position) {
    if (!jokes[position]) {
        console.log("The position ".concat(position, " does not exist. Please ensure it ranges between 0 and ").concat(jokes.length - 1));
    }
    else {
        jokes.splice(position, 1);
        console.log("Successfully removed joke at position ".concat(position, ". Their is now ").concat(jokes.length, " jokes"));
    }
};
exports.removeJoke = removeJoke;
console.log(jokes.length);
(0, exports.removeJoke)(7);
console.log(jokes.length);
