import {connect} from 'react-redux';
const LOAD_DATASOURCE='loadDataSource';
export function loadDataSource(lists){
  return {
    type:LOAD_DATASOURCE,
    lists
  }
}
