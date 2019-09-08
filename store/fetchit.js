const axios = require('axios');

class FetchIt {

  static getAllEntries(collection) {
      return axios.post(`https://api.spiralthread.com/api/collections/get/${collection}?token=${
        process.env.API_KEY
      }`, 
      {
        populate: 1, // resolve linked collection items
      })
      .then(function (response) {
        // handle success
       return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });


  }

}

export default FetchIt;