import {connect} from 'react-redux';
export const LOAD_PROVINCE_DATASOURCE='loadProvinceDataSource';
export const CHANGE_LOCATIONCITY="changeLocationCity";
export function loadProvinceDataSource(lists){
  return {
    type:LOAD_PROVINCE_DATASOURCE,
    lists
  }
}



export function changeLocationCity(cityParams){
  return {
    type:CHANGE_LOCATIONCITY,
    cityParams
  }
}
