import promiseAjax from './promise-ajax.js';
import apies from '../apies.js';

async function getJSONAsync(){

    // The await keyword saves us from having to write a .then() block.
    let json = await promiseAjax('GET', apies.randomChuck);

    // The result of the GET request is available in the json variable.
    // We return it just like in a regular synchronous function.
    return json;
}

module.exports = getJSONAsync;
