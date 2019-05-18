require('es6-promise').polyfill();
import "isomorphic-fetch";

class FetchIt {

  static getAllEntries(collection) {

    const request = new Request(`https://api.spiralthread.com/api/collections/get/${collection}?token=${
      process.env.API_KEY
    }`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    //   body:JSON.stringify({
    //     populate: 1, // resolve linked collection items
    //  })
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