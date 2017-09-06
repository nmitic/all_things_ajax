import vanillaAjax from './modules/vanilla-ajax.js';
import apies from './apies.js';

vanillaAjax('GET', apies.randomChuck, (data) => {
  console.log(data);

  vanillaAjax('GET', apies.dogs, (data) => {
    console.log(data);

    vanillaAjax('GET', apies.questions, (data) => {
      console.log(data);
    })

  })

});
