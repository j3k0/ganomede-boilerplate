# ganomede-wordsaxe

Wordsaxe rules microservice.

Relations
---------

The wordsaxe module will:

 * Compute the game state as it should be after a valid move.
 * Create new game states
    * To do so: read dictionaries of words from `ganomede-data`

Configuration
-------------

 * `DATA_PORT_8080_TCP_ADDR` - IP of the data service
 * `DATA_PORT_8080_TCP_PORT` - Port of the data service
 * `BUNYAN_LEVEL` — [log level](https://github.com/trentm/node-bunyan#levels), defaults to `INFO`.

API
---

This module conforms with [ganomede-turngame's rules API](https://github.com/j3k0/ganomede-turngame/blob/master/rulesapi.md).

Below are just the specific details concerning wordsaxe itself.

### gameData

An object with the following fields:

 - `state`: content generated by [wordsaxe.State.toJSON](https://github.com/j3k0/ganomede-wordsaxe/blob/8e12cdcc502d24056edb337dbd80fdd3e644ac57/lib/wordsaxe/wordsaxe.js#L417-L419)
 - `config`: see gameConfig below

### gameConfig

An object with the following fields:

 - `rules`: "original
 - `version`: "1.0"
 - `language`: the language code (examples: "en", "fr", ...)
 - `category`: (optional) the selected words category (example: "animals")
 - `seed`: (optional) game seed number

### moveData

An object with the following fields:

 - `roundEntry`: content generated by [wordsaxe.RoundEntry.toJSON](https://github.com/j3k0/ganomede-wordsaxe/blob/8e12cdcc502d24056edb337dbd80fdd3e644ac57/lib/wordsaxe/wordsaxe.js#L264-L266)
    - `playerName`: name of the player making the move
    - `positions`: array of found word positons (example: `[ "A0+=", "B1++" ]`)
    - `timestamps`: array of timestamps when words were found (example: `[ 1,0,3,8 ]`

### moveResult

Empty object

### error codes

 - InvalidJSON: can't parse the request
 - InvalidPlayer: can't find player
 - ListTooShort: not enough words in the selected dictionary
 - NoWords: there' no more words to find
 - WordTimeout: too late to add more words
 - InvalidDirection: direction of a word is invalid
 - InvalidPosition: position of a word is invalid
 - BadPosition: position doen't contain the word to find
 - BadWord: didn't find the expected word
 - BadEntryPlayer: not the current player
 - GameOver: game is over, can't add more entries
 - IncompleteEntry: entry doesn't contain all words
 - BadEntryTimestamp: invalid timestamp
 - BadEntryWord: entry doesn't contain the expected word at the provided position
