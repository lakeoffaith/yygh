import base64 from 'base-64'
import {API_HOST,LOGIN_URL} from '../data/api'

export const LOGIN_REQUEST='login.request';
export const LOGIN_FAILURE='login.failure';
export const LOGIN_SUCCESS='login.success';

export function loginSuccess(data){
  return{
    type:LOGIN_SUCCESS,
    data
  }
}

function loginRequest(){
  return{
    type:LOGIN_REQUEST
  }
}

export function loginFailure(error){
  return{
    type:LOGIN_FAILURE,
    error
  }
}

export function login(username,password){
  return (dispatch)=>{
    dispatch(loginRequest());
    const headers=new Headers({"Content-Type":"application/json","Accept":"application/json"});
    return fetch(API_HOST+LOGIN_URL,{
      method:'post',
      headers:headers,
      body:JSON.stringify({
        name:'admin1',
        password:'admin1'
      })
    })
    .then(response=>response.json())
    .then(data=>{
      if(data.status===true){
          dispatch(loginSuccess({name:data.ijoy.name,token:data.token}))
      }else{
        dispatch(loginFailure('返回数据出错'))
      }
    })
    .catch(e=>{
      dispatch(loginFailure('fetch 出错'))
    }).done()
  }
}
