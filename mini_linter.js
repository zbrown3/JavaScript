let story = `Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.`;

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let storyWords = story.split(' ');
let betterWords = storyWords.filter(i => (unnecessaryWords.indexOf(i) === -1));
console.log(betterWords);
let word1 = 0;
let word2 = 0;
let word3 = 0;
let sentence = 0;
betterWords.forEach(i => {
  if (i === 'really') {
    word1++;
  } else if(i === 'very') {
    word2++;
  } else if(i === 'basically') {
    word3++
  } else if(i.includes('.') === true || i.includes('!') === true) {
    sentence++;
  }
});
console.log(`The numbers of words in the string is ${betterWords.length}.  The number of sentences is ${sentence}.  The word really was used ${word1} times, the word very ${word2} times, and the word basically ${word3} times.`);
console.log(betterWords.join(' '));