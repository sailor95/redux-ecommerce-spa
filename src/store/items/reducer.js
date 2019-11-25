import { ACTION_TYPES } from './actions';

const initState = {
  items: [],
  categories: [],
  currentItem: {},
  errors: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload
      };
    case ACTION_TYPES.GET_ITEM_BY_ID_SUCCESS:
      return {
        ...state,
        currentItem: action.payload
      };
    case ACTION_TYPES.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload
      };
    case ACTION_TYPES.GET_ALL_ITEMS_FAILED:
    case ACTION_TYPES.GET_ITEM_BY_ID_FAILED:
    case ACTION_TYPES.GET_ALL_CATEGORIES_FAILED:
    default:
      return state;
  }
};

export default reducer;