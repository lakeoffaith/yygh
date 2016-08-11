import{
  AsyncStorage
} from 'react'

const API_HOSPITAL_LIST='http://www.tngou.net/api/hospital/list'

const KEY_HOSPITAL_LIST='@hospital'

// Singleton pattern
function DataRepository(){
  if(typeof DataRepository.instance==='object'){
    return DataRepository.instance;
  }
  DataRepository.instance=this;
}
function getParamsStr(obj){
  var result='';
  if(obj){
    if(obj.page)result+="&&page="+obj.page;
    if(obj.rows)result+="&&rows="+obj.rows;
    if(obj.id)result+="&&id="+obj.id;
    if(result.length>0)result="?"+result.substr(2);
  }
  return result;
}
/*
   params1 {page:'',rows:'',id:''}
*/
DataRepository.prototype.fetchHospital=function(params){
   let paramsStr=getParamsStr(params);
   console.log(paramsStr);
   const result=new Promise((resolve,reject)=>{
     fetch(API_HOSPITAL_LIST+paramsStr,{
       method:'get',
       dataType:'json',
       headers:{
         'Accept':'application/json',
         'Content-Type':'application/json'
       }
     })
     .then((response)=>response.json())
     .then((responseData)=>{
       console.log('responseData :'+responseData);
       resolve(responseData.tngou);
     })
     .catch((error)=>{
       console.error(error);
       resolve(null);
     })
   });
   return result;
}
module.exports=DataRepository
