import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  categoryList: [],
  pageList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CATEGORY_LIST:
      return state.set('categoryList', action.list)
    case actionTypes.INIT_PAGE_LIST:
      return state.set('pageList', action.list)
    default:
      return state
  }
}