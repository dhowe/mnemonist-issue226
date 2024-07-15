
let { SuffixArray } = require("mnemonist");
let GeneralizedSuffixArray = SuffixArray.GeneralizedSuffixArray;
let SEPARATOR = '\u0001';

var sa = new GeneralizedSuffixArray(getTokens());
let entries = sa.array.map(idx => sa.text.slice(idx, idx + 40).replaceAll(SEPARATOR, ' ')+'...');
let windEntries = entries.filter(s => s.startsWith('wind'));

console.log(windEntries);

function getTokens() {
  return [
    "<s>", "Little", "humps", "of", "sand", ",", "of", "water", "mixed", "with", "sand", "so", "thoroughly", "that", "granules", "of", "this", "new", "matter", "have", "the", "texture", "of", "firn", ",", "stick", "out", "smartly", "where", "the", "surf", "used", "to", "pound", "the", "shore", ",", "and", "beyond", "that", "a", "great", "frozen", "slab", "opens", "out", "like", "a", "cold", "hand", ",", "lined", "with", "the", "details", "of", "waves", ",", "crests", ",", "white", "horses", "of", "snow", ",", "a", "fleeting", "image", "of", "air", "in", "a", "furtive", "coupling", "of", "wind", "and", "spray", ",", "an", "alphabet", "of", "meanings", "receding", "to", "the", "horizon", ",", "repeated", "to", "infinity", ",", "an", "infinity", "of", "vibrations", "and", "still-born", "interferences", ".", "</s>",
    "<s>", "But", "it’s", "a", "splendid", "funeral", ";", "all", "around", ",", "in", "the", "strong", "wind", ",", "thousands", "of", "snowflakes", "are", "crowding", ",", "each", "one", "a", "crystal", "star", "with", "its", "own", "particular", "design", ".", "</s>",
    "<s>", "The", "path", "was", "like", "those", "that", "wind", "from", "the", "crest", "of", "the", "Downs", "south", "to", "the", "sea", ".", "</s>",
    "<s>", "That", "seems", "to", "even", "things", ",", "for", "those", "who", "regard", "it", "as", "a", "balance", ",", "or", "think", "the", "wind", "blows", "one", "way", ".", "</s>",
    "<s>", "And", "they", "hadn’t", "invented", "wind", "and", "rain", ",", "so", "the", "footprints", "stayed", "where", "they", "were", ".", "</s>",
    "<s>", "They", "hadn’t", "invented", "wind", "and", "rain", ",", "remember", ".", "</s>",
    "<s>", "In", "winter", ",", "when", "the", "wind", "blows", "hard", "and", "there’s", "no", "one", "about", "in", "these", "out-of-the-way", "places", ",", "I", "like", "to", "hear", "the", "flag", "crack", "like", "a", "whip", "with", "the", "fish", "swimming", "in", "the", "sky", "as", "if", "it", "were", "alive", ".", "</s>",
    "<s>", "But", "in", "high", "winter", ",", "the", "flag", "thrashes", "up", "there", "with", "its", "fish", "in", "the", "air", ",", "trembling", "with", "cold", ",", "wind", "and", "sky", ".", "</s>",
    "<s>", "I", "see", "the", "iron", "fences", "and", "the", "shallow", "ditches", "of", "the", "countryside", "the", "mild", "wind", "has", "travelled", "over", ".", "</s>",
    "<s>", "I", "cannot", "join", "together", "the", "mild", "wind", "and", "the", "shallow", "ditches", ",", "I", "cannot", "lay", "the", "light", "across", "the", "world", "and", "then", "watch", "it", "slide", "away", ".", "</s>",
    "<s>", "In", "the", "mirror", ",", "the", "wind", "from", "the", "south", "spins", ",", "carrying", "leaves", "and", "feathers", ".", "</s>",
    "<s>", "In", "the", "wind", "from", "the", "desert", "the", "needles", "bend", "and", "my", "hour", "is", "past", ".", "</s>",
    "<s>", "Everywhere", "the", "light", "wind", "blows", ",", "the", "breeze", "that", "provokes", "the", "immense", "whiplash", "each", "time", "it", "unwinds", "in", "the", "air", ".", "</s>",
    "<s>", "The", "light", "wind", "rises", "from", "the", "meadows", "of", "the", "past", ",", "and", "hurries", "closer", "to", "our", "time", ".", "</s>",
    "<s>", "A", "great", "wind", "is", "blowing", "from", "the", "centre", ".", "</s>",
    "<s>", "Hearths", "that", "were", "red", "yesterday", "are", "now", "dead", "ashes", ",", "and", "the", "wind", "blowing", "through", "the", "burst-open", "windows", ".", "</s>",
    "<s>", "A", "sudden", "icy", "wind", "struck", "me", ";", "I", "felt", "my", "legs", "go", "numb", ".", "</s>",
    "<s>", "Secret", "the", "meeting", "in", "time", "and", "place", ",", "the", "time", "of", "the", "off-shore", "wind", ",", "the", "place", "where", "the", "loyalty", "is", "divided", ".", "</s>",
    "<s>", "Green", "is", "almost", "uniformly", "spread", "over", "the", "plants", ",", "the", "wind", "follows", "the", "birds", ",", "no", "one", "risks", "seeing", "the", "stones", "die", ".", "</s>",
    "<s>", "The", "wind", "roars", "up", "the", "avenue", ".", "</s>",
    "<s>", "The", "wind", "falls", ",", "the", "rain", "slides", "silver", "down", "the", "glass", ".", "</s>",
    "<s>", "The", "wind", "drives", "straightly", ";", "the", "flame", "stoops", "slightly", ".", "</s>",
    "<s>", "At", "sunset", ",", "when", "there", "was", "no", "wind", ",", "and", "the", "pine-smoke", "from", "over", "by", "the", "sawmill", "hugged", "the", "earth", ",", "and", "you", "couldn’t", "see", "more", "than", "a", "few", "feet", "in", "front", ",", "her", "sudden", "darting", "past", "you", "was", "a", "bit", "of", "vivid", "color", ",", "like", "a", "black", "bird", "that", "flashes", "in", "light", ".", "</s>",
    "<s>", "In", "sad", "times", ",", "hurt", "seabirds", "come", "to", "wail", "in", "ice", "white", "wind", ",", "alone", ",", "and", "wail", "in", "starlight", "wells", ",", "cold", "pits", "of", "evening", ",", "and", "endings", ",", "flinging", "rounds", "of", "flame", "sheeted", "balls", "of", "jagged", "bone", ",", "eaten", ",", "with", "remains", "of", "torn", "flowers", ",", "overwhelming", "after-thoughts", ",", "binding", "loves", ",", "classic", "pains", ",", "casting", "elongated", "shadows", ",", "of", "early", "blue", ".", "</s>",
    "<s>", "Will", "you", "come", "to", "visit", "me", "in", "hospital", "?", ";", "I", "stood", "up", ",", "I", "sat", "down", ",", "I", "stood", "up", "again", ";", "the", "clock", "slowed", "down", ",", "the", "post", "came", "late", ",", "the", "afternoon", "turned", "cool", ";", "the", "cat", "licked", "his", "coat", ",", "tore", "the", "chair", "to", "shreds", ",", "slept", "in", "a", "drawer", "that", "didn’t", "close", ";", "I", "entered", "a", "room", ",", "I", "felt", "my", "skin", "shiver", ",", "then", "dissolve", ",", "I", "lighted", "a", "candle", ",", "I", "saw", "something", "move", ",", "I", "recognized", "the", "shadow", "to", "be", "my", "own", "hand", ",", "I", "felt", "myself", "to", "be", "one", "thing", ";", "the", "wind", "was", "hard", ",", "the", "house", "swayed", ",", "the", "angiosperms", "prospered", ",", "the", "mammal-like", "reptiles", "vanished", "Is", "the", "Heaven", "to", "be", "above", "?", "</s>",
  ];
};
