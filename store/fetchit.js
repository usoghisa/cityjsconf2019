require('es6-promise').polyfill();
import "isomorphic-fetch";

//require('whatwg-fetch');

class FetchIt {

  static getAllEntries(collection) {

    const request = new Request(`//api.spiralthread.com/api/collections/get/${collection}?token=${
      process.env.API_KEY
    }`, {
    method: 'GET',
    mode: 'cors',
    });


    const getResponse = (response) => {
      return response.json();
    };

    const getError = (error) => {
      return error;
    };

    return fetch(request)
      .then(getResponse)
      .catch(getError);
  }

}

export default FetchIt;