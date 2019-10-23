 
class FetchLocal {

  static getAllEntries(collection) {
    let promise = new Promise(function(resolve, reject){
      setTimeout(function(){
          resolve({entries: require(`../data/${collection}.collection.json`)});
      });
    });
  
    return promise;
  }

}

export default FetchLocal;


