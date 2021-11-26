var jokes = [{ "joke": "What's the best thing about switzerland", "punchline": "I don't know but the flag is a big plus"},
{ "joke": "I invented a new word", "punchline": "Plagiarism"},
{ "joke": "Did you hear about the mathematician who is afraid of negative numbers?", "punchline": "He'll stop at nothing to avoid them"},
{ "joke": "Why do we tell actors to 'break a leg?'", "punchline": "Because every play has a cast"},
{ "joke": "Helvetica and Times New Roman walk into a bar.", "punchline": "“Get out of here!” shouts the bartender. “We don’t serve your type.”"},
{ "joke": "Yesterday I saw a guy spill all his Scrabble letters on the road.", "punchline": "I asked him, “What’s the word on the street?”"},
{ "joke": "Hear about the new restaurant called Karma?", "punchline": "Their is no menu, you get what you deserve"},
{ "joke": "Did you hear about the actor who fell through the floorboards?", "punchline": "He was just going through the stage"}]

export let getJoke = ( joke: number ) : string => {

	if( !jokes[ joke ] ){

		console.log( 'A joke with the specified index does not exist. Please specify a number between 0 and ${jokes.length - 1}' );
	}

	return jokes[ joke ][ "joke" ] + ' ~ ' + jokes[ joke ][ "punchline" ];
}

export let getRandomJoke = () => {

	return( jokes[ Math.floor( Math.random() * ( jokes.length + 1 ) ) ][ "joke" ] + ' ~ ' + jokes[ Math.floor( Math.random() * ( jokes.length + 1 ) ) ][ "punchline" ] );
}

export let addJoke = ( joke_name: string, joke_punchline: string ) => {

	return jokes.push( { "joke" : joke_name, "punchline" : joke_punchline })
}

export let removeJoke = ( position: number ) => {

	if( !jokes[position] ){

		console.log( `The position ${position} does not exist. Please ensure it ranges between 0 and ${jokes.length - 1}` );
	
	} else {

		jokes.splice( position, 1 )

		console.log( `Successfully removed joke at position ${position}. Their is now ${jokes.length} jokes` )
	}

}
