import vanillaAjax from './modules/vanilla-ajax.js';
import promiseAjax from './modules/promise-ajax.js';
import apies from './apies.js';

// AJAX THE OLD WAY
vanillaAjax('GET', apies.randomChuck, (data) => {
  console.log(data);

  vanillaAjax('GET', apies.dogs, (data) => {
    console.log(data);

    vanillaAjax('GET', apies.questions, (data) => {
      console.log(data);
    })

  })

});

//AJAX THE BETTER WAY
promiseAjax('GET', apies.randomChuck).then((data) => {
  console.log(data);
  return promiseAjax('GET', apies.dogs);
}).then((data) => {
  console.log(data);
  return promiseAjax('GET', apies.questions);
}).then((data) => {
  console.log(data);

}).catch((error) => {
  console.log(error);
})

//AJAX THE MORE BETTER WAY - if we have to wait for all of them to be finished
Promise.all([
  promiseAjax('GET', apies.randomChuck),
  promiseAjax('GET', apies.dogs),
  promiseAjax('GET', apies.questions)
]).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})
