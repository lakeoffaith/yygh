import{
  AsyncStorage
} from 'react'

// Singleton pattern
function DataRepository(){
  if(typeof DataRepository.instance==='object'){
    return DataRepository.instance;
  }
  DataRepository.instance=this;
}


DataRepository.prototype._postFetch=function(reqUrl:string,params:?Object){
  return new Promise((resolve,reject)=>{
    fetch(reqUrl,{
      method:'post',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(params).replace(/{|}/gi, "")
     })
    .then((response)=>response.json())
    .then((responseData)=>{
      console.log("postfetch");
      console.log(responseData);
       resolve(responseData);
    })
    .catch((error)=>{
      console.error(error);
      resolve(null);
    })
  }
  );
}
DataRepository.prototype._getFetch=function(reqUrl:string){
  return new Promise((resolve,reject)=>{
    fetch(reqUrl)
    .then((response)=>response.json())
    .then((responseData)=>{
      console.log(responseData);
       resolve(responseData);
    })
    .catch((error)=>{
      console.error(error);
      resolve(null);
    })
  }
  );
}

module.exports=DataRepository;
