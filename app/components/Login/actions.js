const API_HOST="http://192.168.100.116:8889/plat";

const LOGIN_URL="/loginInfo/check/api";
import {actions} from 'react-native-navigation-redux-helpers';
const {popRoute}=actions;
import base64 from 'base-64'
export const LOGIN_REQUEST = 'login.request'
export const LOGIN_SUCCESS = 'login.success'
export const LOGIN_FAILURE = 'login.failure'

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}
function loginRequest() {
   return {
      type: LOGIN_REQUEST
   }
}
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export function login(username, password) {
  return (dispatch) => {

    // We use this to update `isLoggingIn` to `true` in our store, which can
    // be used to display an activity indicator on the login view.
    dispatch(loginRequest())

    // Note: This only works in node.js, use an implementation that works
    // for the platform you're using, e.g.: base64-js for React Native, or
    // btoa() for browsers.
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
    .then(data => {
          console.log(data);
          //成功
          if(data.status===true){
              dispatch(loginSuccess({name:data.ijoy.name,token:data.token}))
              dispatch(popRoute('global'))
          }else {
            dispatch(loginFailure('返回数据 出错'))
          }
    })
    .catch(e=>{
      dispatch(loginFailure('fetch 出错'))
    }).done()
  }
}
