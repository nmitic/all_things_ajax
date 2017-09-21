/*
  Your only goal should be to take as much as control
  as possible over randomness of "happyAlone"!
 */
var happyAlone = Math.random() > 0.5 ? false : true;

var life = {
	happinessDependency: [
    'external factors',
    'friends',
    'bad weather',
    'failures',
    'relationships',
    'food intake',
    'things over which you don\'t have control'
  ],
  joy: false,
  feelingGood: false,
  sleepGood: false,
  stressHandleAbility: 0,
  negativeThoughts: Infinity,
  positiveThoughts: null,
  mentalHealth: 'not healthy'
}

var willFoundhappiness = new Promise((resolve, reject) => {
	if (happyAlone) {
		life.happinessDependency = ['food intake'];
		life.joy = true;
		life.feelingGood = true;
		life.sleepGood = true;
		life.stressHandleAbility = 1000;
		life.negativeThoughts = null;
		life.positiveThoughts = Infinity;
		life.mentalHealth = 'preconditioned to be healthy';

    resolve(life);
  } else {
  	var reasonWhyYouFailed = new Error('I told you, you need to be happy on your own first!')

    var theGoodLife = {
    	life,
      reasonWhyYouFailed
    }

    reject(theGoodLife)
  }
})

var liveLife = () => {
	willFoundhappiness
  	.then((happinessFound) => {
    	/*
        Let your voice be heard and spread the love
        and help others do the same!
      */
      console.log(happinessFound);
    })
    .catch((happinessNotFound) => {
    /*
      Let your voice be heard and spread the love
      so that the other can help you!
    */
    	console.log(happinessNotFound);
    })
}

/*
  Go out there and make mistakes and remeber world is not model
  around true and false, only I'm. You can have it all! The program.
*/
//liveLife();

module.exports = liveLife;
