import {
  LOAD_PROVINCE_DATASOURCE,
  CHANGE_LOCATIONCITY
} from './actions';

export default function location(state = {
  lists:null,
  cityList:null
}, action) {
  switch(action.type) {
    case LOAD_PROVINCE_DATASOURCE:
      return {
        ...state,
        lists:action.lists
      };
      case CHANGE_LOCATIONCITY:
        return {
          ...state,
          cityParams:action.cityParams
        };
    default:
      return state;
  }
}
